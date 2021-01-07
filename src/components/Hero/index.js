import React, { Fragment, Suspense } from 'react';
import './style.css';
import logo from '../../img/Breaking_Bad_logo.svg';


const Hero = ({items, isLoading}) => {

  return (
    <Fragment>
      <div className="logo-img">
        <img src={logo} alt="" />
      </div>
      <div className="container">
      <div className="cards-container">
        <div className="center">
          <div className="search">
            <input type="text" />
          </div>

          <div className="cards">
            {items.map(item => (
              <div className="card">
                <img src={item['img']} alt=""/>
              </div>
            ))}            
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
