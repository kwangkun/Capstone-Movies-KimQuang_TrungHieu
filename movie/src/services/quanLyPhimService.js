import { api } from '../constants/api'

export const quanLyPhimService = {
    getMovieBannerList: () => {
        return api.get('QuanLyPhim/LayDanhSachBanner')
    },
}