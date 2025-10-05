import { createSlice } from "@reduxjs/toolkit";

const informationslice = createSlice({
  name: "inform",
  initialState:  {fetchDone: false,
    currentlyFetching: false,
  },
  reducers:
  {
markFetchDone:(state)=>
{
 state.fetchDone= true
},
markFetchingStarted: (state)=>
{
      state.currentlyFetching = true;
},
markFetchingFinished: (state)=>
{
   state.currentlyFetching = false;
}




  }
})
export default informationslice.reducer
export const informAction = informationslice.actions