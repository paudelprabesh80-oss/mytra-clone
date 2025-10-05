import { createSlice } from "@reduxjs/toolkit";

const siteitems = createSlice({
  name: "items",
  initialState:  [],
  reducers:
  {
addinitialpost:(state, action)=>
{
return action.payload
}



  }
})
export default siteitems.reducer
export const itemsAction = siteitems.actions