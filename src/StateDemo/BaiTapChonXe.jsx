import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

  state = {
      imgSrc: './img/products/black-car.jpg'
  }
  
  handleChangeColor = (color) => {
    this.setState({
        imgSrc:`./img/products/${color}-car.jpg`
    })
  }
  render() {
    return (
      <div className='row'>
          <div className='col-6'>
              <img className='w-100' src={this.state.imgSrc} alt='...' />
          </div>
          <div className='col-6'>
                <div className='row'>
                    <div className='col-3'>
                        <button className='btn btn-dark' onClick={() => {
                            this.handleChangeColor('black')
                        }}>Black</button>
                    </div>
                    <div className='col-3'>
                        <button className='btn btn-danger' onClick={()=>{
                            this.handleChangeColor('red')
                        }}>Red</button>
                    </div>
                    <div className='col-3'>
                        <button className='btn' style={{background:'silver'}} onClick={()=>{
                            this.handleChangeColor('silver')
                        }}>Silver</button>
                    </div>
                    <div className='col-3'>
                        <button className='btn' style={{background:'gray'}} onClick={()=>{
                            this.handleChangeColor('steel')
                        }}>Steel</button>
                    </div>
                </div>
          </div>
      </div>
    )
  }
}
