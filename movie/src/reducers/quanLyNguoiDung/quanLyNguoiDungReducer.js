import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Navigate, useNavigate } from "react-router-dom";
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
                console.log('result:', result.data);
                localStorage.setItem("USER_LOGIN", JSON.stringify(result.data.content))
                localStorage.setItem("TOKEN", JSON.stringify(result.data.content.accessToken))
                return result.data.response
            }
        } catch (error) {
            return console.log('error', error)
        }
    },
);