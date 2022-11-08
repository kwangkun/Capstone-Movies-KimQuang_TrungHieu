import { api } from '../constants/api'

export const quanLyPhimService = {
    getMovieBannerList: () => {
        return api.get('QuanLyPhim/LayDanhSachBanner')
    },
    getMovieList: (value) => {
        if (!value.trim()) {
            return api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP13`);
        } else {
            return api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${value}`);
        }
    },
    getMovieDetail: (idFilm) => {
        return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`);
    },
    themPhimUploadHinh: (data) => {
        return api.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, data)
    },
    postFilmUpDate: (data) => {
        return api.post(`/api/QuanLyPhim/CapNhatPhimUpload`, data)
    },
    xoaPhim: (maPhim) => {
        return api.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    },
}