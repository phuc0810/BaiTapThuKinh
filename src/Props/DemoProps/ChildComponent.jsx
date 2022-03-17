import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    /*this.props là thuộc tính có sẵn của react class component dùng để truyền dữ liêu từ component cha sang con 
        this.props là thuộc tính readonly : không thể gán lại được giá trị cho nó
    */
//    this.props.tenSanPham = 'abc' lỗi
    let{maSanPham,tenSanPham,gia,hinhAnh} = this.props.product
    return (
      <div className='card'>
          <img src={hinhAnh} alt='...'/>
          <div className='card-body'>
              <p>Tên sản phẩm {tenSanPham}</p>
              <p>Giá {gia}</p>
          </div>
      </div>
    )
  }
}
