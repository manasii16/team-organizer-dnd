import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch_emp_API } from "./employeesAPI";

// export const fetch_emp = createAsyncThunk(
//   "employees/fetch",
//   (_, thunkAPI) => fetch_emp_API().catch(thunkAPI.rejectWithValue)
// );

export const fetch_emp = createAsyncThunk(
  "employees/fetch",
  
  async(thunkAPI) =>{
    try{
      const data = await fetch_emp_API();
      return data;
    } 
    catch(err){
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const employeesSlice =createSlice({
  name: "employees",

  initialState:{ 
    loading: false, 
    pool: [], 
    error: null,
    team: [],  
  },

  extraReducers:(builder) =>{
    builder.addCase(fetch_emp.pending, (state) =>{
        state.loading = true;
        state.error = null;
      })
      
      //shortcut to write payload and error
      .addCase(fetch_emp.fulfilled,(state, {payload}) =>{
        //const payload = action.payload;
        state.loading = false;
        state.pool = payload; 
      })

      .addCase(fetch_emp.rejected, (state, {error})=>{
        state.loading = false;
        state.error =error.message;
      });
  },

  reducers:{
    moveEmployee:(state,action) =>{
    const { source_list, dest_list, source_idx, dest_idx } = action.payload;

    if (source_list === dest_list){
      return;
    }
    
    //remove from source
    const removed_arr = state[source_list].splice(source_idx, 1); // start and delete-count
    const moved = removed_arr[0];

    state[dest_list].push(moved); 
  },
  },
});

export const { moveEmployee} = employeesSlice.actions;
export default employeesSlice.reducer;
