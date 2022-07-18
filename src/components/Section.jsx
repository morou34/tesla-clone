import React from 'react'
import styled from 'styled-components'

const Section = ({title, description, backgroundImg, leftBtnText, rightBtnText}) => {
  return (
    <Wrap coverImg={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          {
            rightBtnText && 
              <RightButton>
                {rightBtnText}
              </RightButton>
          }
          
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg"/>
      </Buttons>


    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image:${props => `url("./images/${props.coverImg}")}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media(max-width: 768px) {flex-direction: column;}

`

const LeftButton = styled.div`
  width: 256px;
  height: 40px;
  color: white;
  background-color: rgba(23, 26, 32, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  border-radius: 100px;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 10px;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;

`

const DownArrow = styled.img`
  height: 40px;
  margin-top: 10px; 
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`