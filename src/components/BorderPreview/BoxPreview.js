import React from 'react';
import styled from 'styled-components';

const BoxPreview = ({ width, height, radiusTop = 0, radiusLeft = 0, radiusBottom = 0, radiusRight = 0}) => {

    const BoxContainer = styled.div`
        background-color: #fff;
        width: ${width}px;
        height: ${height}px;
        border-radius: ${radiusTop}% ${radiusLeft}% ${radiusBottom}% ${radiusRight}%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    const PreviewText = styled.p`
        font-family: sans-serif;
        font-size: ${(width + height)/20 -20}px;
        font-weight: bold;
        text-align: center;
    `;

    return(
        <BoxContainer>
            <PreviewText>
                border-radius: {radiusTop}% {radiusLeft}% {radiusBottom}% {radiusRight}%;
            </PreviewText>
        </BoxContainer>
    )
} 

export default BoxPreview;