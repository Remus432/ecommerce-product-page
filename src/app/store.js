import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import galleryReducer from '../features/gallery/gallerySlice';
import menuReducer from '../features/menu/menuSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    gallery: galleryReducer,
    menu: menuReducer
  },
});
