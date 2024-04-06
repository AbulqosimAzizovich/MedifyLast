import React, {useState} from 'react';
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {Button} from 'antd';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {HeartFilled, HeartOutlined} from '@ant-design/icons';
import {
  StyledProductFav,
  StyledProductImageSlide,
  StyledProductImageSlideAction,
  StyledProductImageSlideRoot,
} from './index.styled';
import {postDataApi} from '@crema/hooks/APIHooks';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';

const ProductImageSlide = ({product}) => {
  const [value, setValue] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const infoViewActionsContext = useInfoViewActionsContext();
  const navigate = useNavigate();
  const slides = product.image.map((data, index) => (
    <img key={index} src={data.src} alt='' />
  ));
  const onChange = (value) => {
    setValue(value);
  };

  const onAddToCard = () => {
    postDataApi('/api/cart/add', infoViewActionsContext, {
      product,
    })
      .then(() => {
        infoViewActionsContext.showMessage(
          `${product.title} added to cart successfully`,
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };
  const onButNowToCard = () => {
    postDataApi('/api/cart/add', infoViewActionsContext, {
      product,
    })
      .then(() => {
        navigate('/apps/ecommerce/cart');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const OnFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <StyledProductImageSlide>
      <StyledProductImageSlideRoot>
        <Dots
          position='left'
          thumbnails={slides}
          value={value}
          onChange={onChange}
          number={slides.length}
        />
        <Carousel
          position='left'
          value={value}
          slides={slides}
          onChange={onChange}
        />

        <StyledProductFav onClick={OnFavorite}>
          {isFavorite ? <HeartFilled /> : <HeartOutlined />}
        </StyledProductFav>
      </StyledProductImageSlideRoot>
      <StyledProductImageSlideAction>
        <Button
          type='primary'
          onClick={onAddToCard}
          style={{marginRight: 20, width: 140}}
        >
          Add to cart
        </Button>
        <Button
          style={{width: 140}}
          className='btn-secondary'
          onClick={onButNowToCard}
        >
          Buy now
        </Button>
      </StyledProductImageSlideAction>
    </StyledProductImageSlide>
  );
};

export default ProductImageSlide;

ProductImageSlide.propTypes = {
  product: PropTypes.object,
};
