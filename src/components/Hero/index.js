import React, { Fragment } from 'react';
import './style.css';
import logo from '../../img/Breaking_Bad_logo.svg';

const Hero = () => {
  return (
    <Fragment>
      <div className="logo-img">
        <img src={logo} alt="" />
      </div>
    </Fragment>
  );
};

export default Hero;
