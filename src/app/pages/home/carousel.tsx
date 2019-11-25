import React from 'react';

import { Button, Container } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CustomDotGroup(props) {
    return (
        <Container textAlign="center">
            <Button.Group size={props.size}>
                {[ ...Array(props.slides).keys() ].map(slide => (
                    <Button as={Dot} key={slide} icon="circle" slide={slide} />
                ))}
            </Button.Group>
        </Container>
    );
}

function Carousel(props) {
    return (
        <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={0.15}
            totalSlides={props.children.length}
            visibleSlides={1}
            infinite
        >
            <div className="wrapper">
                <ButtonBack>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </ButtonBack>
                <Slider style={{ minHeight: '300px' }}>
                    {props.children}
                </Slider>
                <ButtonNext>
                    <FontAwesomeIcon icon={faChevronRight} />
                </ButtonNext>
            </div>
            <CustomDotGroup slides={props.children.length} size="mini" />
        </CarouselProvider>
    );
}

Carousel.Item = function CarouselItem(props) {
    return (
        <Slide index={props.index}>
            <Container style={{ margin: '1em' }}>
                {props.children}
            </Container>
        </Slide>
    );
};

export {
    Carousel as default,
};
