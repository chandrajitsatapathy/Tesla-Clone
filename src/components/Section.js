import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({ title, description, LeftBtnText, RightBtnText, backgroundimg}) {
    return (
        <Wrap bgImage={backgroundimg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                    <p>{description}</p>
            </ItemText>
            </Fade>
            
            <Buttons>
            <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                                {LeftBtnText}
                        </LeftButton>
                        {RightBtnText &&
                                <RightButton>
                                    {RightBtnText}
                                </RightButton>
                        }
                        
                    </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-3.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
padding: 15vh;
text-align: center;
z-index: -1;
`
const ButtonGroup = styled.div`
display:flex;
margin-Button:30px;
@media (max-width:768px){
     flex-direction: column;
}
`
const LeftButton = styled.div`
 background-color: rgba(23, 26, 32, 0.8);
 height: 40px;
 width: 256px;
 color: white;
 display: flex;
 
 align-items: center;
 justify-content: center;
 border-radius: 100px;
 opacity: 0.85;
 text-transform: uppercase;
 font-size:12px;
 cursor: pointer;
 margin: 8px;
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
height: 40px;
overflow-x: hidden;
animation: animatedown infinite 1.5s;
`
const Buttons = styled.div`
`


