import {createSlice} from "@reduxjs/toolkit"
import  DEFAULT_ITEMS  from "../data/items";

const itmesSlice = createSlice({
    name: "items",
    initialState : DEFAULT_ITEMS,
    reducers : {
        addInitialItems: (store, action)=> {
            return store;
        }   
    }
}); 

export const itemsActions = itmesSlice.actions;

export default itmesSlice;