import React, { Component } from "react";

export default class BaiTapThuKinh extends Component {
  dbGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glassesDefault: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderDBGlasses = () => {
    return this.dbGlasses.map((sp, i) => {
      return (
        <img
          onClick={() => {
            this.setState({ glassesDefault: sp });
          }}
          key={i}
          src={sp.url}
          className="ml-1"
          style={{
            cursor: "pointer",
            width: "120px",
            border: "1px solid gray",
          }}
        />
      );
    });
  };
  render() {
    let keyFrames = `@keyframes animChangeGlasses${Date.now()} {
      from{
          width: 0;
          transform:rotate(45deg);
      }to{
          width: 150px;
          transform:rotate(0deg);    
      }
  }`;

    let keyMoTa = `@keyframes animChangeMoTa${Date.now()} {
    from{
        width: 250px;
        transform:translateY(107px);
    }to{
        width: 250px;
        transform:translateY(0);   
    }
  }`;

    let styleGlasses = {
      position: "absolute",
      right: "191px",
      width: "155px",
      top: "78px",
      opacity: 0.8,
      animation: `animChangeGlasses${Date.now()} 1s`,
      // transform: "rotate(0deg)",
    };
    let infoGlasses = {
      color: "black",
      width: "250px",
      top: "200px",
      left: "145px",
      backgroundColor: "rgba(255,127,0,.7)",
      textAlign: "left",
      height: "105px",
      animation: `animChangeMoTa${Date.now()} 1s`,
      // transform: "translateY(0)",
    };
    let { glassesDefault } = this.state;
    return (
      <div
        style={{
          backgroundImage: "url(./img/glassesImage/background.jpg)",
          minHeight: 700,
          backgroundSize: 1500,
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>
          {keyFrames}
          {keyMoTa}
        </style>
        <div style={{ backgroundColor: "rgba(0,0,0,0.8)", minHeight: 2000 }}>
          <h3
            className="text-center p-5 text-light"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5">
              <div className="col-6 text-center">
                <div
                  className="position-relative"
                  style={{ overflow: "hidden" }}
                >
                  <img width={250} src="./img/glassesImage/model.jpg" />
                  <img src={glassesDefault.url} style={styleGlasses} />
                  <div
                    className="position-absolute text-left text-black font-weight-bold"
                    style={infoGlasses}
                  >
                    <span style={{ color: "yellow" }}>
                      {glassesDefault.name}
                    </span>
                    <br />
                    <span>{glassesDefault.desc}</span>
                  </div>
                </div>
              </div>
              <div className="col-6 text-center">
                <img width={250} src="./img/glassesImage/model.jpg" />
              </div>
            </div>
            <div className="row bg-white mt-5 d-flex justify-content-center align-items-center pt-5 pb-5">
              {this.renderDBGlasses()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
