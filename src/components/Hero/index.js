import React, { Fragment, Suspense } from 'react';
import './style.css';
import logo from '../../img/Breaking_Bad_logo.svg';


const Hero = ({items, isLoading}) => {
  let arrayImg = items.map(item => {
    <div className='card'>
      <img src={item['img']} alt=""/>
    </div>
  })

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
            <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png" alt=""/>
            </div>
            <div className="card">
              <img src="https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441" alt=""/>
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div><div className="card">
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
