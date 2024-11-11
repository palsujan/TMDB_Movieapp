import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     bannerData:[]
// }
 const movieSlcie = createSlice({
    name:"movies",
    initialState: {
        bannerData: [],
        imageURL:""
    },
    reducers:{
        setBannerData:(state,action) =>{
            state.bannerData = action.payload
        },
        setImageURL:(state, action)=>{
            state.imageURL = action.payload
        }
    }
})
export const {setBannerData, setImageURL} = movieSlcie.actions
export default movieSlcie.reducer