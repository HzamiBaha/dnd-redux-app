import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import employeReducer from '../features/employes/employeSlice'



export const store = configureStore({
  reducer: {
    auth: authReducer,
    employes: employeReducer,
  }, 
})
