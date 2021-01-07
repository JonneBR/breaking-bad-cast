import React, { Fragment, Suspense } from 'react';
import './style.css';
import logo from '../../img/Breaking_Bad_logo.svg';

import Search from '../Search/Search'

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
