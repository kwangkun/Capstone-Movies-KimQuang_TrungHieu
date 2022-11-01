import { Action } from "@remix-run/router";

const stateDefault = {
    bannerCarousel: [{
        "maBanner": 2,
        "maPhim": 1283,
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png"
    }
    ]
};
export const HomeCarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
        default: return { ...state }
    }
}