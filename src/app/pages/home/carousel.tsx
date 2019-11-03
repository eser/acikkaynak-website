import React from 'react';

import { Button, Container } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';

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
        >
            <Slider style={{ minHeight: '320px' }}>
                {props.children}
            </Slider>

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
