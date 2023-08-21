import { faker } from '@faker-js/faker';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pause = (duration) => {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
};

const photosApi = createApi({
	reducerPath: 'photos',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001',
		fetchFn: async (...args) => {
			// await pause(500);
			return fetch(...args);
		}
	}),
	endpoints(builder) {
		return {
			fetchImages: builder.query({
				query: (album) => {
					return {
						url: '/photos',
						params: {
							albumId: album.id
						},
						method: 'GET'
					};
				},
				providesTags: (result, error, album) => {
					const tags = result.map((photo) => {
						return { type: 'Photo', id: photo.id };
					});
					tags.push({ type: 'AlbumsPhoto', id: album.id });

					return tags;
				}
			}),

			addPhoto: builder.mutation({
				query: (album) => {
					return {
						url: '/photos',
						body: {
							url: faker.image.url(),
							albumId: album.id
						},
						method: 'POST'
					};
				},
				invalidatesTags: (result, error, album) => {
					return [{ type: 'AlbumsPhoto', id: album.id }];
				}
			}),

			deletePhoto: builder.mutation({
				query: (photo) => {
					return {
						url: `/photos/${photo.id}`,
						method: 'DELETE'
					};
				},
				invalidatesTags: (result, error, photo) => {
					return [{ type: 'Photo', id: photo.id }];
				}
			})
		};
	}
});

export const { useFetchImagesQuery, useAddPhotoMutation, useDeletePhotoMutation } = photosApi;
export { photosApi };