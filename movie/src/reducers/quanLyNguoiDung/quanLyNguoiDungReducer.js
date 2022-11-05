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
                console.log('result:', result.data);
                localStorage.setItem("USER_LOGIN", JSON.stringify(result.data.content))
                // localStorage.setItem("TOKEN", JSON.stringify(result.data.content.accessToken))
                localStorage.setItem("SCODE", JSON.stringify(result.data.statusCode))
                return result.data.response
            }
        } catch (error) {
            return console.log('error', error)
        }
    },
);

export const registerAction = createAsyncThunk(
    "QuanLyNguoiDung/DangKy",
    async (data) => {
        try {
            const result = await quanLyNguoiDungService.register(data)
            return console.log(result)
            // if (result.data.statusCode === 200) {
            //     console.log('result:',result.data)
            // }
        } catch (error) {
            return console.log('error:', error)
        }
    }
)