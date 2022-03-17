import React, { Component } from "react";

export default class GioHang extends Component {
  render() {
    let { spGH } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Danh Sách Sản Phẩm</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã Sản Phẩm</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Hình Ảnh</th>
                      <th>Giá Bán</th>
                      <th>Số Lượng</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {spGH.map((spGH, i) => {
                      return (
                        <tr key={i}>
                          <td>{spGH.maSP}</td>
                          <td>{spGH.tenSP}</td>
                          <td>
                            <img
                              src={spGH.hinhAnh}
                              className="w-100"
                              width={50}
                              height={50}
                            />
                          </td>
                          <td>{spGH.giaBan}</td>
                          <td>
                            <button
                              className="btn btn-info"
                              onClick={() => {
                                this.props.tangGiamSP(spGH.maSP, 1);
                              }}
                            >
                              +
                            </button>
                            {spGH.soLuong}
                            <button
                              className="btn btn-info"
                              onClick={() => {
                                this.props.tangGiamSP(spGH.maSP, -1);
                              }}
                            >
                              -
                            </button>
                          </td>
                          <td>{spGH.giaBan * spGH.soLuong}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                this.props.delete(spGH.maSP);
                              }}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
