import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     bannerData:[]
// }
 const movieSlcie = createSlice({
    name:"movies",
    initialState: {
        bannerData: []
    },
    reducers:{
        setBannerData:(state,action) =>{
            state.bannerData = action.payload
        }
    }
})
export const {setBannerData} = movieSlcie.actions
export default movieSlcie.reducer