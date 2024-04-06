import React from 'react';
import ImageGallery from 'react-image-gallery';
import {images} from './data';
import A1 from './assets/facebook.svg';
import A2 from './assets/gPlus.svg';
import A3 from './assets/twitter.svg';
import A4 from './assets/instag.svg';
import './styles.css';

const index = () => {
  return (
    <div className='another__'>
      <div className='image-gallery-wrapper gallery__s'>
        <ImageGallery style={{height: '600px'}} items={images} />
      </div>

      <div className='right__items'>
        <h3>This thing name</h3>
        <div className='thing__price'>
          <span>50 $</span>
          <span>125 $</span>
        </div>

        <p className='thing__about'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          aliquam, eaque dolor tempora labore dolores similique, amet recusandae
          deserunt nihil obcaecati illo saepe. Ut fugiat error dolor fugit
          delectus eligendi facere, quae magnam similique nihil laboriosam
          cumque repellendus modi reiciendis illo saepe asperiores ad, quos
          recusandae vel ea nemo? At laudantium, modi nisi nulla quod reiciendis
          assumenda nobis animi nam.
        </p>

        <div className='thing__items'>
          <div>
            <h2>Brand : </h2>
            <h2>Aviability : </h2>
            <h2>Seller : </h2>
            <h2>Fabric : </h2>
          </div>

          <div className='zsaaa'>
            <span>Pixelstrap</span>
            <span>In stock</span>
            <span>ABC</span>
            <span>Cotton</span>
          </div>
        </div>

        <div className='shareit'>
          <h2>share it</h2>
          <div className='social__btns'>
            <button>
              <a href='#'>
                <img src={A1} alt='Social links' />
              </a>
            </button>
            <button>
              <a href='#'>
                <img src={A2} alt='Social links' />
              </a>
            </button>
            <button>
              <a href='#'>
                <img src={A3} alt='Social links' />
              </a>
            </button>
            <button>
              <a href='#'>
                <img src={A4} alt='Social links' />
              </a>
            </button>
          </div>
        </div>

        <div className='order__btns'>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default index;
