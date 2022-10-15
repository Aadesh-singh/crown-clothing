import styled from "styled-components";
import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton
} from "../button/button.styles"

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
    ${InvertedButton},
    ${GoogleSignInButton}{
      margin-top: auto;
      font-size: 12px;
    }
`;

export const EmptyMsg = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  // overflow: scroll;
  overflow-y: auto;
`;




// .cart-dropdown-container {
//     position: absolute;
//     width: 240px;
//     height: 340px;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background-color: white;
//     top: 90px;
//     right: 40px;
//     z-index: 5;
  
//     .empty-message {
//       font-size: 18px;
//       margin: 50px auto;
//     }
  
//     .cart-items {
//       height: 240px;
//       display: flex;
//       flex-direction: column;
//       // overflow: scroll;
//       overflow-y: auto;
//     }
  
//     button {
//       margin-top: auto;
//       font-size: 12px;
//     }
//   }
  