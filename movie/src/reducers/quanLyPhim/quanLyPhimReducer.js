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
  postFilm: null, isFetchPostPhim: false, errPostFilm: undefined,
  delFilm: null, isFetchDelFilm: false, errDelFilm: undefined,
  upDateFilm: null, isFetchUpDateFilm: false, errUpDateFilm: undefined
};
export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } = createSlice({
  name: 'quanLyPhim',
  initialState,
  reducers: {
    postFilm: (state, action) => {
      state.postFilm = null
      state.errPostFilm = undefined
    },
    suaPhim: (state, action) => {
      state.upDateFilm = null
      state.errUpDateFilm = undefined
    },
    xoaPhim: (state, action) => {
      state.delFilm = null
      state.errDelFlim = undefined
    }
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
      // lay ds phim detail
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
      .addCase(postFilmUploadHinh.pending, (state, action) => {
        state.isFetchPostPhim = true
      }).addCase(postFilmUploadHinh.fulfilled, (state, action) => {
        state.isFetchPostPhim = false
        state.postFilm = action.payload
        state.errPostFilm = undefined
      }).addCase(postFilmUploadHinh.rejected, (state, action) => {
        state.isFetchPostPhim = false
        state.errPostFilm = action.payload
        state.postFilm = null
      })
      //Xoá phim
      .addCase(xoaPhim.pending, (state, action) => {
        state.isFetchDelFilm = true
      }).addCase(xoaPhim.fulfilled, (state, action) => {
        state.isFetchDelFilm = false
        state.delFilm = action.payload
        state.errDelFilm = undefined
      }).addCase(xoaPhim.rejected, (state, action) => {
        state.isFetchDelFilm = false
        state.errPostFilm = action.payload
        state.delFilm = null
      })
      // Cập nhật phim
      .addCase(postFilmUpDate.pending, (state, action) => {
        state.isFetchUpDateFilm = true
      }).addCase(postFilmUpDate.fulfilled, (state, action) => {
        state.isFetchUpDateFilm = false
        state.upDateFilm = action.payload
        state.errUpDateFilm = undefined
      }).addCase(postFilmUpDate.rejected, (state, action) => {
        state.isFetchUpDateFilm = false
        state.errUpDateFilm = action.payload
        state.upDateFilm = null
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
export const postFilmUploadHinh = createAsyncThunk('quanLyPhim/postFilmUploadHinh',
  async (data, { rejectWithValue }) => {
    try {
      const result = await quanLyPhimService.postFilmUploadHinh(data)
      return result.data.content
    } catch (err) {
      return rejectWithValue(err.response.data.content)
    }
  }
)
export const xoaPhim = createAsyncThunk('quanLyPhim/xoaPhim',
  async (data, { rejectWithValue }) => {
    try {
      const result = await quanLyPhimService.xoaPhim(data)
      return result.data.content
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)
export const postFilmUpDate = createAsyncThunk('quanLyPhim/postFilmUpDate',
  async (data, { rejectWithValue }) => {
    try {
      const result = await quanLyPhimService.postFilmUpDate(data)
      return result.data.content
    } catch (err) {
      return rejectWithValue(err.response.data.content)
    }
  }
)
