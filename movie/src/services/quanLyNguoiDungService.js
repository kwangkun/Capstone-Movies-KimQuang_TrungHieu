import { api } from '../constants/api'

export const quanLyNguoiDungService = {
    login: (thongTinDangNhap) => {
        return api.post('QuanLyNguoiDung/DangNhap', thongTinDangNhap)
    },
}