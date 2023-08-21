import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

/*
	====================================== ⚙️ ======================================
	When creating a new RTK API, we need to add a bunch of config to the API. In
	this object, we define our endpoints for the data. These endpoints can be CRUD
	functionalities. When we create these endpoints, API we automatically create a
	collection of hooks for each of the endpoints. These hooks can be used in the
	application. 
	
	====================================== 🏗️ ======================================
	For each API we create, we need to add three properties to that object. 

	🍕 ReducerPath is the slice that stores all the state like incoming requests,
	data that is used, the status of that data and so on.. When the API is created,
	it will automatically create that slice for us. 

	🎯 BaseQuery is the URL path that decides where to send the request.
	`baseQuery` uses fetch by default. Since fetch itself is a little awkward to 
	work with, we use`fetchBaseQuery`. `fetchBaseQuery` returns a pre-configured
	version of `fetch`. We then use this object to make requests.

	🛣️ EndPoints is the object in which we specify how to make each request exactly
	as we want.

	====================================== 🔌 ======================================
	To use the API we have created, we need to form a connection to the store form
	our API. You can check the store creation at ../index.js for more details. 

	====================================== 🏷️ ======================================
	Tags are an array of strings that keep track of which queries should be updated
	after which mutations. The `invalidatesTags` property of a mutation updates the
	queries with the same tags whenever the mutation is run. We use `providesTags`
	property to decide which queries should rerun. 

*/
// const pause = (duration) => {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, duration);
// 	});
// };

const albumsApi = createApi({
	reducerPath: 'albums',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
		// fetchFn: async (...args) => {
		// 	await pause(1000);
		// 	return fetch(...args);
		// }
	}),
	endpoints(builder) {
		return {
			// Specify what the type of request will be (query || mutation)
			// This property will be converted to a hook called
			// `useFetchAlbumsQuery()`

			fetchAlbums: builder.query({
				query: (user) => {
					return {
						// The path for the request relative
						// to the baseUrl of baseQuery 
						url: '/albums',
						// Query string for the request
						params: {
							userId: user.id
						},
						method: 'GET'
					};
				},
				providesTags: (result, error, user) => {
					const tags = result.map((album) => {
						return { type: 'Album', id: album.id };
					});
					tags.push({ type: 'UsersAlbums', id: user.id });
				
					return tags;
				}
			}),

			addAlbum: builder.mutation({
				query: (user) => {
					return {
						url: '/albums',
						method: 'POST',
						body: {
							userId: user.id,
							title: faker.commerce.productName()
						}
					};
				},
				invalidatesTags: (result, error, user) => {
					return [{ type: 'UsersAlbums', id: user.id }];
				}
			}),

			removeAlbum: builder.mutation({
				query: (album) => {
					return {
						url: `/albums/${album.id}`,
						method: 'DELETE',
					};
				},
				invalidatesTags: (result, error, album) => {
					return [{ type: 'Album', id: album.id }];
				}
			})
		};
	}
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };