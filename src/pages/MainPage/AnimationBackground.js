import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
	background-image: url('${PATH_TO_RESOURCES}/images/main/back5.svg');
    background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
    position: absolute;
	width: 100%;
	height: 100%;

    animation-duration: 5s; 
    animation-timing-function: ease-in-out; 
    animation-delay: 0;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
`;

const ImageBack1 = styled(Image)`
	background-image: url('${PATH_TO_RESOURCES}/images/mainPage/back1.svg');
`;

const ImageBack2 = styled(Image)`
    animation-name: cloud;
	background-image: url('${PATH_TO_RESOURCES}/images/mainPage/back2.svg');
`;

const ImageBack3 = styled(Image)`
	background-image: url('${PATH_TO_RESOURCES}/images/mainPage/back3.svg');
`;

const ImageBack4 = styled(Image)`
    animation-name: cloud;
	background-image: url('${PATH_TO_RESOURCES}/images/mainPage/back4.svg');
`;

const ImageBack5 = styled(Image)`
    animation-name: cloud;
	background-image: url('${PATH_TO_RESOURCES}/images/mainPage/back5.svg');
`;

const ImageBack6 = styled(Image)`
	background-image: url('${PATH_TO_RESOURCES}/images/mainPage/back6.svg');
`;

const ImageLittleEllipse1 = styled(Image)`
    animation-name: cloud;
	background-image: url('${PATH_TO_RESOURCES}/images/mainPage/little_ellipse1.svg');
`;

const ImageLittleEllipse2 = styled(Image)`
    animation-name: cloud;
	background-image: url('${PATH_TO_RESOURCES}/images/mainPage/little_ellipse2.svg');
`;

const AnimationBackground = () => (
    <>
        <ImageBack1 />
        <ImageBack2 />
        <ImageBack3 />
        <ImageBack4 />
        <ImageBack5 />
        <ImageBack6 />
        <ImageLittleEllipse1 />
        <ImageLittleEllipse2 />
    </>
);

export default AnimationBackground;