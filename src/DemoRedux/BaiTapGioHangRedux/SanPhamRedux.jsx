import React, { Component } from "react";
// kết nối với redux
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img height={300} src={sanPham.hinhAnh} className="w-100" />
        <div className="card-body bg-dark text-white">
          <p>{sanPham.tenSP}</p>
          <p>{sanPham.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-info"
            onClick={() => this.props.themGioHang(sanPham)}
          >
            thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

// mapDispactchToProps dùng để định nghĩa Props là các hàm gửi giá trị lên redux

const mapDispactchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
    //   console.log(sanPhamClick);
      const action = {
        type: "THEM_GIO_HANG",
        sanPhamClick,
      };
      //   gửi dữ liệu lên redux
      dispatch(action);
    },
  };
};

export default connect(null, mapDispactchToProps)(SanPhamRedux);
