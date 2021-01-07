import React, { Fragment, Suspense } from 'react';
import './style.css';
import logo from '../../img/Breaking_Bad_logo.svg';
import CharacterGrid from '../Characters/characterGrid'


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
          <CharacterGrid isLoading={isLoading} items={items}/>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
