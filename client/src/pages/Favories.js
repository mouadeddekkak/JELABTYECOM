import React from 'react'
import styled from 'styled-components'
import Announcement from '../composants/Announcement'
import { useSelector, useDispatch  } from "react-redux";
import Footer from '../composants/Footer'
import Navbar from '../composants/Navbar'
import {  Close } from '@material-ui/icons'

import { Link } from "react-router-dom";
//import { viderPanier } from "../redux/FontionAPI"
import mobile from '../responsive';
//import { supprimerProduitPanier } from '../redux/panierRedux';
import { useHistory } from "react-router";
import {suppFavori, supprimerproduitFavori} from "../redux/FavoriteRedux";




const Container = styled.div`

`
const Wrapper = styled.div`
   padding: 20px;   
   ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
   font-weight: 600;
   text-align: center;
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px;   

`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;border-radius: 20px;
  border: ${(props) => props.type === "check" && "none"};
  background-color: ${(props) =>props.type === "check" ? "black" : "transparent"};
  color: ${(props) => props.type === "check" && "white"};
  border-radius: 20px;
  &:hover{
    background-color: ${(props) =>props.type === "check" ? "#282828" : "#E0E0E0"};
    }     
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F8F8F8	;
  ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid white;

  &:hover {
    background-color: #ececec;
    cursor: pointer;
  }

  ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
`;



const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  margin-left: 110 px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;  
  ${mobile({ marginTop:"20px" })}
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-left: 222px;
`




export default function Favories() {
      // Accessing state from Redux store

    const panier = useSelector((state) => state.wishlist);
        // Accessing the history object from React Router

    const history = useHistory();
    // Function to dispatch 'suppFavori' action

    const dispatch = useDispatch();

    const Click = () => {
        dispatch(suppFavori());
    };
    // Function to navigate to a specific product page

    const clickProduit = (id) => {
     history.push(`/produit/${id}`)
    }
    // Function to dispatch delete favorite product action

    const fermer = (produit) =>{
        dispatch(supprimerproduitFavori({produit}));
    }


    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Top>
                    <Link to={`/produits`}>
                           {/* Link to continue shopping */}
                        <TopButton> Continue Shopping </TopButton>
                    </Link>
                    {/* Button to empty the cart */}
                    <TopButton type="check" onClick={Click}> empty Your Selection</TopButton>
                </Top>
                <Bottom>
                    <Info>
                      {/* Render each product in the cart */}
                        { panier.produits.map((produit) => (
                            <Product onClick={() => clickProduit(produit._id)}>
                                <ProductDetail>
                                    <Image src={produit.img} />
                                    <Details>
                                      {/* Product name */}
                                        <ProductName>
                                            <b>Product:</b> {produit.title}
                                        </ProductName>
                                        {/* Product color */}
                                        <ProductColor color={produit.color} />
                                        {/* Product size */}
                                        <ProductSize>
                                            <b>Size:</b> {produit.size}
                                        </ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                      {/* Product quantity */}
                                        <ProductAmount>{produit.quantite} </ProductAmount>
                                    </ProductAmountContainer>
                                        {/* Product price */}
                                    <ProductPrice>{produit.price}.00 €</ProductPrice>
                                </PriceDetail>
                                {/* Button to remove the product from favorites */}
                                <Close onClick={()=>fermer(produit)}  style={{cursor: "pointer" , marginRight:"10px"}}/>
                            </Product> ))}
                    </Info>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}
