import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: {},
    isLoading: true,
    error: {},
    getAllProductRes: {}
}

const CmsSlice = createSlice({
    name: 'CMS',
    initialState,

   

    reducers: {
        // allProductsRequest()
        //Banner
        
        allProductsRequest(state, action) {
            state.isLoading = true;
            state.status = action.type;
        },
        allProductsSuccess(state, action) {
            state.isLoading = false;
            state.getAllProductRes = action?.payload;
            state.status = action.type;
        },
        allProductsFailure(state, action) {
            state.error = action.error;
            state.status = action.type;
        },
    },
});

export const {
    allProductsRequest,
    allProductsSuccess,
    allProductsFailure
} = CmsSlice.actions;

export default CmsSlice.reducer;