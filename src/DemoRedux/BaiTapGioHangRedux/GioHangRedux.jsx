import React, { Component } from "react";
import { connect } from "react-redux";

// kết nối redux
class GioHangRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <table className="table">
          <thead>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Hình Ảnh</th>
            <th>Giá Bán</th>
            <th>Số Lượng</th>
            <th>Tổng Tiền</th>
            <th>Thao Tác</th>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGH, i) => {
              return (
                <tr key={i}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <img
                      src={spGH.hinhAnh}
                      className="w-100"
                      width={50}
                      height={100}
                    />
                  </td>
                  <td>{spGH.giaBan}</td>
                  <td>{spGH.soLuong}</td>
                  <td>{spGH.giaBan * spGH.soLuong}</td>
                  <td>
                    <button className="btn btn-danger">xóa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// định nghĩa hàm để lấy dữ liệu từ redux về component này
const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.gioHangReducer,
    number: rootReducer.numberReducer,
  };
};

// khi connect được gọi sẽ trả về 1 component đã được kết nối với redux store, và mình export default component đó ra luôn
export default connect(mapStateToProps)(GioHangRedux);
