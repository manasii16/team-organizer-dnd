import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './src/components/employeeDashboard/redux/employeesSlice';
import logger from 'redux-logger'; 
const customMiddleware=(getDefaultMiddleware) =>{
  return getDefaultMiddleware().concat(logger);
};

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  
  middleware: customMiddleware,
  devTools: true
});

export default store;