import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import snackbarReducer from './reducers/SnackbarSlice'
import modalReducer from './reducers/ModalSlice'
import appReducer from './reducers/AppSlice'
import productReducer from './reducers/ProductSlice'


const rootReducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  modal: modalReducer,
  app: appReducer,
  product: productReducer,

})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export default store