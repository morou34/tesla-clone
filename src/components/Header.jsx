import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'

const Header = () => {
  const [nav, setNav] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href='/#'>
        <img src='/images/logo.svg' alt=''/>
      </a>

      <Menu>
        {
          cars && cars.map((car, index) => (
            <a key={index} href='/#'>{car}</a>
          ))
        }
      </Menu>

      <RightMenu>
        <a href='/#'>Shop</a>
        <a href='/#'>Account</a>
        <CustomMenu onClick={() => setNav(true)}/>
      </RightMenu>

      <BurgerNav show={nav}>
        <CloseWrap>  
          <CustomClose onClick={() => setNav(false)}/>
        </CloseWrap>
        {
          cars && cars.map((car, index) => (
            <li key={index}><a href='/#'>{car}</a></li>
          ))
        }
        <li><a href='/#'>Existing Inventory</a></li>
        <li><a href='/#'>Used Inventory</a></li>
        <li><a href='/#'>Test Drive</a></li>
        <li><a href='/#'>Insurance</a></li>
        <li><a href='/#'>Charging</a></li>
        <li><a href='/#'>Utilities</a></li>
        <li><a href='/#'>Support</a></li>
        <li><a href='/#'>Relations</a></li>
        <li><a href='/#'>Shop</a></li>
        <li><a href='/#'>Account</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  position: fixed;
  padding: 0px 20px;
  top:0;
  right: 0;
  left: 0;
  z-index: 1;

`

const Menu = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px;
    flex-wrap: nowrap;
  }

  a:hover{
    text-decoration: underline;
  }

  @media(max-width: 768px) {display: none}
`

const RightMenu = styled.div` 
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  a:hover{
    text-decoration: underline;
  }
`
const CustomMenu = styled(MenuIcon)` 
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  width: 290px;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, .2);

    a {
      font-weight: 600;
    }
    
  }
  a:hover {
    color:rgb(221,52,75);

  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrap = styled.div` 
  display: flex;
  justify-content:end;
`