import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyPhimService } from '../../services/quanLyPhimService';
const initialState = {
  bannerList: [],
  movieList: [],
  movieDetail: {},
  isFetching: false,
  isFetchingDetail: false,
  isFetchingBanner: false,
};
export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } = createSlice({
  name: 'quanLyPhim',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.number = state.number + action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovieBannerList.pending, (state, action) => {
        state.isFetching = true
      })
      .addCase(getMovieBannerList.fulfilled, (state, action) => {
        state.getMovieBannerList = action.payload
        state.isFetching = false
      })
      .addCase(getMovieBannerList.rejected, (state, action) => {
        state.err = action.payload
        state.isFetching = false
      })
  }
})
export const getMovieBannerList = createAsyncThunk(
  "quanLiPhim/getMovieBannerList",
  async (rejectWithValue) => {
    try {
      const result = await quanLyPhimService.getMovieBannerList();
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);