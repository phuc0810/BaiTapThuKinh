import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card">
        <img src={product.hinhAnh} className="w-100" />
        <div className="card-body bg-dark text-white">
          <p>{product.tenSP}</p>
          <p>{product.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.handleInfo(product);
            }}
          >
            chi tiet san pham
          </button>
          <button className="btn btn-danger ml-2" onClick={()=>{
            this.props.addGH(product);
          }}>Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
