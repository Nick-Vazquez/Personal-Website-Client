import React from "react";
import {
    purpleGradient,
    purpleShadow
} from "./Theme";
import styled from "styled-components";

const Box = styled.div`
    width: ${props => props.Width};
    height: ${props => props.Height};
    background-image: ${props => props.BackgroundImage};
    box-shadow: ${props => props.ShadowImage};
    border-radius: 40px;
   `;

Box.defaultProps = {
    Width: '50vh',
    Height: '50vh'
};

const textStyle = {
    color: 'white',
    textAlign: 'center',
    padding: 0,
    margin: 0,
};

class Div extends React.Component {
    render() {
        return(
            <Box BackgroundImage={purpleGradient} ShadowImage={purpleShadow}>
                <h1 style={textStyle}>Send Noods</h1>
            </Box>
        )
    }
}

export default Div