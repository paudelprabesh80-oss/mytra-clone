import { configureStore } from "@reduxjs/toolkit";
import informationReducer from "./information";  
import siteitemsReducer from "./siteitem";
import bagitems from "./bagitem";

export const store = configureStore({
  reducer: {
    inform: informationReducer,   
    items: siteitemsReducer,
    bag: bagitems.reducer,
  },
});
