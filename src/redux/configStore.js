import { combineReducers, createStore } from "redux";

let stateGioHangDefault = [
  {
    maSP: 1,
    tenSP: "iphone",
    giaBan: 1000,
    soLuong: 1,
    hinhAnh: "http://picsum.photos/200/300",
  },
];
// rootReducer xem như state tổng của ứng dụng
const rootReducer = combineReducers({
  // nơi chúa các state của ứng dụng
  gioHangReducer: (state = stateGioHangDefault, action) => {
    switch (action.type) {
      case "THEM_GIO_HANG": {
        let gioHang = [...state, action.sanPhamClick];
        return gioHang;
      }
    }
    return state;
  },
  numberReducer: (state = 1, action) => {
    return state;
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
