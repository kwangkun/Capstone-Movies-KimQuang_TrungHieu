import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quanLyPhimService } from '../../services/quanLyPhimService';
const initialState = {
  bannerList: [],
  movieDetail: {},
  isFetching: false,
  isFetchingDetail: false,
  isFetchingBanner: false,
  error: undefined,
  infoMovie: {},
  movieList: [],
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
        state.isFetchingBanner = true;
      })
      .addCase(getMovieBannerList.fulfilled, (state, action) => {
        state.isFetchingBanner = false;
        state.bannerList = action.payload;
      })
      .addCase(getMovieBannerList.rejected, (state, action) => {
        state.isFetchingBanner = false;
        state.bannerList = action.payload;
      })
      // lay ds phim
      .addCase(getMovieList.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getMovieList.fulfilled, (state, action) => {
        state.isFetching = false;
        state.movieList = action.payload;
      })
      .addCase(getMovieList.rejected, (state, action) => {
        state.isFetching = false;
        state.movieList = action.payload;
      })
      .addCase(getMovieDetail.pending, (state, action) => {
        state.isFetchingDetail = true;
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.isFetchingDetail = false;
        state.movieDetail = action.payload;
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.isFetchingDetail = false;
        state.movieDetail = action.payload;
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
  async (value = "", { rejectWithValue }) => {
    try {
      const result = await quanLyPhimService.getMovieList(value);
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMovieDetail = createAsyncThunk(
  "quanLyPhim/getMovieDetail",
  async (idFilm, { rejectWithValue }) => {
    try {
      const result = await quanLyPhimService.getMovieDetail(idFilm);

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);