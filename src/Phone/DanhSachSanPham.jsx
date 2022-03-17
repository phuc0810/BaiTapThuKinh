import React, { Component } from "react";
import GioHang from "./GioHang";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  mangDienThoai = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/phone/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/phone/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/phone/applephone.jpg",
    },
  ];

  state = {
    dienThoai: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/phone/vsphone.jpg",
    },
    gioHang: [
      // {
      //   maSP: 1,
      //   tenSP: "VinSmart Live",
      //   hinhAnh: "./img/phone/vsphone.jpg",
      //   giaBan: 5700000,
      //   soLuong: 3,
      // },
    ],
  };

  themGioHang = (dienThoaiClick) => {
    console.log(dienThoaiClick);
    // click vào sp thì nó sẽ tạo ra thuộc tính soLuong
    let dienThoaiTrongGH = { ...dienThoaiClick, soLuong: 1 };

    // sao chép giỏ hàng ra 1 mảng mới
    let gioHangUpdate = [...this.state.gioHang];

    // kiểm tra sản phẩm có trong giỏ hàng hay chưa
    let checkGH = gioHangUpdate.find((sp) => sp.maSP === dienThoaiTrongGH.maSP); //let checkGH = {maSP,tenSP,gia,hinhAnh,...}

    if (checkGH) {
      checkGH.soLuong += 1;
    } else {
      gioHangUpdate.push(dienThoaiTrongGH);
    }

    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  tangGiamSoLuong = (maSP, soLuong) => {
    let gioHangUpdate = [...this.state.gioHang];

    let spTangGiam = gioHangUpdate.find((sp) => sp.maSP === maSP);

    if (spTangGiam) {
      spTangGiam.soLuong += soLuong;
      if (spTangGiam.soLuong < 1) {
        if (window.confirm("bạn có muốn xóa hay không ?")) {
          this.xoaSanPham(spTangGiam.maSP);
          return;
        } else {
          spTangGiam.soLuong -= soLuong;
        }
      }
    }
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  tinhTongSoLuong = () => {
    // let tongSoLuong = 0;

    // for (let spGH of this.state.gioHang) {
    //   tongSoLuong += spGH.soLuong;
    // }
    // return tongSoLuong;

    let tongSoLuong = this.state.gioHang.reduce((soLuong, spGioHang, i) => {
      return (soLuong += spGioHang.soLuong);
    }, 0);
    return tongSoLuong;
  };

  xoaSanPham = (maSP) => {
    let gioHangUpdate = [...this.state.gioHang];

    let i = gioHangUpdate.findIndex((sp) => sp.maSP === maSP);

    gioHangUpdate.splice(i, 1);

    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  xemChiTietSP = (dienThoaiClick) => {
    this.setState({
      dienThoai: dienThoaiClick,
    });
  };

  renderMangSP = () => {
    return this.mangDienThoai.map((sp, i) => {
      return (
        <div className="col-4" key={i}>
          <SanPham
            product={sp}
            handleInfo={this.xemChiTietSP}
            addGH={this.themGioHang}
          />
        </div>
      );
    });
  };
  render() {
    let { dienThoai } = this.state;
    return (
      <div className="container">
        <div className="gioHang">
          <span
            data-toggle="modal"
            data-target="#modelId"
            style={{
              cursor: "pointer",
              color: "red",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Giỏ Hàng ({this.tinhTongSoLuong()})
          </span>
          <GioHang
            spGH={this.state.gioHang}
            delete={this.xoaSanPham}
            tangGiamSP={this.tangGiamSoLuong}
          />
        </div>
        <h1 className="text-center">Danh Sách Sản Phẩm</h1>
        <div className="row">{this.renderMangSP()}</div>
        <div className="row">
          <div className="col-4">
            <h2>{dienThoai.tenSP} </h2>
            <img src={dienThoai.hinhAnh} className="w-100" />
          </div>
          <div className="col-8">
            <h1>thông số kỹ thuật</h1>
            <table className="table">
              <tr>
                <th>màn hình</th>
                <td>{dienThoai.manHinh}</td>
              </tr>
              <tr>
                <th>hệ điều hành</th>
                <td>{dienThoai.heDieuHanh}</td>
              </tr>
              <tr>
                <th>cam trước</th>
                <td>{dienThoai.cameraTruoc}</td>
              </tr>
              <tr>
                <th>cam sau</th>
                <td>{dienThoai.cameraSau}</td>
              </tr>

              <tr>
                <th>RAM</th>
                <td>{dienThoai.ram}</td>
              </tr>
              <tr>
                <th>ROM</th>
                <td>{dienThoai.rom}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
