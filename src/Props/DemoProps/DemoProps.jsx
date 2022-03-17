import React, { Children, Component } from 'react'
import ChildComponent from './ChildComponent'

export default class DemoProps extends Component {
  render() {
      let proDuctA = {
          maSanPham:1,
          tenSanPham:'Iphone 4',
          gia:1000,
          hinhAnh: 'http://picsum.photos/id/1/200/300'
      }
      let proDuctB = {
        maSanPham:2,
        tenSanPham:'Iphone 5',
        gia:2000,
        hinhAnh: 'http://picsum.photos/id/2/200/300'
    }

    
    return (
      <div className='container'>
          <div className='row'>
              <div className='col-4'>
                  <ChildComponent product={proDuctA}/>
              </div>
              <div className='col-4'>
                  <ChildComponent product={proDuctB}/>
              </div>
          </div>
      </div>
    )
  }
}
