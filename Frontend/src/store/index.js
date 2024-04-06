import {configureStore} from "@reduxjs/toolkit"
import itmesSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSLice";

const myntraStore = configureStore({
    reducer : {
        items: itmesSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer 
    }
});

export default myntraStore;