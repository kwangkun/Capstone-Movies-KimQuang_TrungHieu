import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyPhimService } from '../../services/quanLyPhimService';
const initialState = {
  bannerList: [],
  movieList: [],
  movieDetail: {},
  isFetching: false,
  isFetchingDetail: false,
  isFetchingBanner: false,
  err: undefined
};
export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } = createSlice({
  name: 'quanLyPhim',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder
      //lấy ds banner
      .addCase(getMovieBannerList.pending, (state, action) => {
        state.isFetching = true
      })
      .addCase(getMovieBannerList.fulfilled, (state, action) => {
        state.bannerList = action.payload
        state.isFetching = false
      })
      .addCase(getMovieBannerList.rejected, (state, action) => {
        state.err = action.payload
        state.isFetching = false
      })
      //lấy ds phim
      .addCase(getMovieList.pending, (state, action) => {
        state.isFetching = true
      })
      .addCase(getMovieList.fulfilled, (state, action) => {
        state.movieList = action.payload
        state.isFetching = false
      })
      .addCase(getMovieList.rejected, (state, action) => {
        state.err = action.payload
        state.isFetching = false
      })
  }
})
export const getMovieBannerList = createAsyncThunk(
  "quanLyPhim/getMovieBannerList",
  async (rejectWithValue) => {
    try {
      const result = await quanLyPhimService.getMovieBannerList();
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
export const getMovieList = createAsyncThunk(
  "quanLyPhim/getMovieList",
  async (rejectWithValue) => {
    try {
      const result = await quanLyPhimService.getMovieList();
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.respone.data)
    }
  }
)
