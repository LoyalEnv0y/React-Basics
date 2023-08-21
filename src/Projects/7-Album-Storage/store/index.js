import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

/* 
	====================================== 🔌 ======================================
	After creating the albums API we can connect it to our store by specifying the
	it's name with it's reducer. 

	====================================== 🪄 ======================================
	To call our middleware of the created api, we need to tell our store to include
	them.
*/

const store = configureStore({
	reducer: {
		users: usersReducer,
		[albumsApi.reducerPath]: albumsApi.reducer,
		[photosApi.reducerPath]: photosApi.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(albumsApi.middleware)
			.concat(photosApi.middleware);
	}
});

setupListeners(store.dispatch);

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser';
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export { useFetchImagesQuery, useAddPhotoMutation, useDeletePhotoMutation } from './apis/photosApi';