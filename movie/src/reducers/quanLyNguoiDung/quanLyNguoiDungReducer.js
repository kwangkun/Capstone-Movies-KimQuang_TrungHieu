import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { quanLyNguoiDungService } from "../../services/quanLyNguoiDungService"


const initialState = {
    userLogin: {
        taiKhoan: '',
        matKhau: '',
    },
}

export const { reducer: quanLyNguoiDungReducer, action: quanLyNguoiDungActions } = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {
    },
    // extraReducers: (builder) => {
    //     builder.addCase
    // }
})

export const loginAction = createAsyncThunk(
    "QuanLyNguoiDung/DangNhap",
    async (data, { dispatch }) => {
        try {
            const result = await quanLyNguoiDungService.login(data);
            if (result.data.statusCode === 200) {
                
            }

            console.log('result:', result.data);
        } catch (error) {
            return console.log('error', error)
        }
    },
);