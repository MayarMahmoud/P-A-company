import React from 'react';
import { Button } from './Button';
import './Products.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 70 }}>
      <div className='products__section'>
        <div className='products__wrapper'>
          <h1 className='products__heading'>Products</h1>
          <div className='products__container'>
            <Link to='/products' className='products__container-card'>
              <div className='products__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Product name</h3>
                
                <ul className='products__container-features'>
                  <li>Description</li>
                  <li>Description</li>
                  <li>Description</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button> */}
              </div>
            </Link>
            <Link to='/products' className='products__container-card'>
              <div className='products__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Product name</h3>
               
                <ul className='products__container-features'>
                  <li>Description</li>
                  <li>Description</li>
                  <li>Description</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button> */}
              </div>
            </Link>
            <Link to='/products' className='products__container-card'>
              <div className='products__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Product Name</h3>
                
                <ul className='products__container-features'>
                  <li>Description</li>
                  <li>Description</li>
                  <li>Description</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Products;