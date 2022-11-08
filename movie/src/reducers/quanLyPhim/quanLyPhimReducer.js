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
      // lay thong tin phim
      .addCase(getInfoMovies.pending, (state, action) => {
        state.isFetchingDetail = true;
      })
      .addCase(getInfoMovies.fulfilled, (state, action) => {
        state.isFetchingDetail = false;
        state.infoMovie = action.payload;
      })
      .addCase(getInfoMovies.rejected, (state, action) => {
        state.isFetchingDetail = false;
        state.infoMovie = action.payload;
      });
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
export const getInfoMovies = createAsyncThunk(
  "quanLiPhim/getInfoMovies",
  async (idFilm, { rejectWithValue }) => {
    try {
      const result = await quanLyPhimService.getInfoMovies(idFilm);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteFilm = createAsyncThunk(
  "quanLiPhim/deleteFilm",
  async (idFilm, { dispatch, rejectWithValue }) => {
    try {
      await quanLyPhimService.deleteFilm(idFilm);
      alert("xoá phim thành công");
      dispatch(getMovieList());
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const postFilmUpdate = createAsyncThunk(
  "quanLiPhim/postFilmUpdate",
  async (formData, { dispatch, rejectWithValue }) => {
    console.log(rejectWithValue);
    try {
      await quanLyPhimService.postFilmUpdate(formData);

      alert("cập nhật thành công");
      dispatch(getMovieList());
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);