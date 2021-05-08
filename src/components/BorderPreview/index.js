import React from 'react';
import './BorderPreview.css';

import Slider from '@material-ui/core/Slider';
import BoxPreview from './BoxPreview';

const BorderPreview = () => {
    const [topLeft, setTopLeft] = React.useState(0);
    const [topRight, setTopRight] = React.useState(0);
    const [bottomRight, setBottomRight] = React.useState(0);
    const [bottomLeft, setBottomLeft] = React.useState(0);
    return(
        <div>
            <BoxPreview
                width={400}
                height={400}
                radiusTop={topLeft}
                radiusRight={topRight}
                radiusBottom={bottomRight}
                radiusLeft={bottomLeft}/>
            
            <div>
                <p>Top-Left</p>
                <Slider
                    color="secondary"
                    defaultValue={0}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(e, value)=> setTopLeft(value)}/>
                <p>Top-Right</p>
                <Slider
                    color="secondary"
                    defaultValue={0}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(e, value)=> setTopRight(value)}/>
                <p>Bottom-Right</p>
                <Slider
                    color="secondary"
                    defaultValue={0}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(e, value)=> setBottomRight(value)}/>
                <p>Bottom-Left</p>
                <Slider
                    color="secondary"
                    defaultValue={0}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(e, value)=> setBottomLeft(value)}/>
            </div>
        </div>
    )
}

export default BorderPreview;