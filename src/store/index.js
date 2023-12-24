import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import themeReducer from './themeSlice'
import configReducer from './configSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    config: configReducer
  }
})

export default store