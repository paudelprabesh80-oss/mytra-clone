import { createSlice } from "@reduxjs/toolkit";

const bagitems = createSlice({
  name: "bag",
  initialState:  [],
  reducers:
  {
addtobag:(state, action)=>
{
 state.push(action.payload)
},
removefrombag: (state, action)=>
{
return state.filter(value=> value!=action.payload)
}


  }
})
export default bagitems
export const bagAction = bagitems.actions