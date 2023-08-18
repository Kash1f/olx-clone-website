import React from 'react';

import Heart from '../../assets/Heart';
import pic1 from "../../assets/iphone.jpg"
import './style.css';

function Posts() {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={pic1} alt="" />
            </div>
            <div className="content">
              <p className="rate">Rs. 250000</p>
              <span className="name">iPhone 14 Pro Max</span>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={pic1} alt="" />
            </div>
            <div className="content">
              <p className="rate">Rs. 250000</p>
              <span className="name">iPhone 14 Pro Max</span>
              {/* <p className="name"> YAMAHA R15V3</p> */}
            </div>
            <div className="date">
              <span>10/5/2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
