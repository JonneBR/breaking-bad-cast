import React from 'react';
import './style.css';
import logo from '../../img/Breaking_Bad_logo.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="logo-img">
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <div className="center">
          <div className="search">
            <input type="text" />
          </div>

          <div className="cards">
            <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png" alt=""/>
            </div>
            <div className="card">
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
    </section>
  );
};

export default Hero;
