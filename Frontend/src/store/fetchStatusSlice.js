import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers:{
        markFetchDone: (status) =>{
            return status.fetchDone = true;;
        },
        markFetcingStarted: (status) =>{
            return status.currentlyFetching = true;
        },
        markFetchingFinished: (status) =>{
            return status.currentlyFetching = false;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;