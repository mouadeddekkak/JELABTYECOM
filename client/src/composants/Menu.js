import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

// Styled component
const Container = styled.div`
    font-size: 20px;
    font-weight:500;
`
const Menu = styled.div`
    background-color: #141414;
    display: flex;
    justify-content: space-between;
    text-align: center;
`
const Left = styled.button`
    text-align: center; 
    flex: auto;
    border: none;
    color: white;    
    background-color: #141414;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;  
    letter-spacing: 2px;
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: #1E1E1E;
        }
`
const Center = styled.button`
   text-align: center; 
    flex: auto;
    border: none;
    color: white;     
    letter-spacing: 2px; 
    background-color: #141414;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;  
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: #1E1E1E;
        }
`
const Right = styled.button`
   text-align: center; 
    flex: auto;  
    letter-spacing: 2px;
    border: none;
    color: white;    
    background-color: #141414;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;  
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: #1E1E1E;
        }
`
const RightW = styled.button`
    text-align: center; 
    flex: auto;  
    letter-spacing: 2px;
    border: none;
    color: white;    
    background-color: #141414;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;  
    cursor: pointer;
    font-weight: 600;
    &:hover{
        background-color: #1E1E1E;
        }
`

export default function MenuNavbar() {  
let history = useHistory();
  // Event handler for the Home button
const home = (e) => {
history.push("/");
};
// Event handler for the Women button
const women = (e) => {
history.push("/produits/women");
};
  // Event handler for the Men button
const men = (e) => {
history.push("/produits/men");
};
  // Event handler for the Kids button
const kids = (e) => {
history.push("/produits/kids");
};
  return ( 
    <Container>        
            <Menu>
                 <Left onClick={home}>Home</Left>{/* Home button */}
                 <Center onClick={women}>WOMEN</Center>   {/* Women button */}
                 <Right onClick={men} >MEN</Right>      {/* Men button */}
                 <RightW onClick={kids}>KIDS</RightW>      {/* Kids button */}
            </Menu>
    </Container>)
}

