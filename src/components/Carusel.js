import React, { useState, useEffect } from 'react';
import style from './Carusel.module.css';
import{ connect} from 'react-redux';
import {getCars} from '../reducers/carReducer';
import PropTypes from 'prop-types';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const Carusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect (() => {
    props.getCars();
  },[]);

  const items = [
    {
      src: props.car ? props.car[1].img : null,
      altText: 'Slide 1',
      caption: 'Slide 1',
    },
    {
      src: props.car ? props.car[2].img : null,
      altText: 'Slide 2',
      caption: 'Slide 2',
    },
    {
      src: props.car ? props.car[0].img : null,
      altText: 'Slide 3',
      caption: 'Slide 3',
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem className={style.img}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl className={style.arrows}  direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl className={style.arrows}  direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

Carusel.propTypes = {
  getCars: PropTypes.func,
  car: PropTypes.array,
};

const mapStateToProps = (state) => ({
  car: state.cars,
});

export default connect(mapStateToProps,{getCars})(Carusel);