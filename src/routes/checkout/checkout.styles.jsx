import styled from "styled-components";

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const Empty = styled.div`
  margin-top: 163px;
  font-size: 1.3rem;
`;

// .checkout-container {
//     width: 55%;
//     min-height: 90vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 50px auto 0;
  
//     .checkout-header {
//       width: 100%;
//       padding: 10px 0;
//       display: flex;
//       justify-content: space-between;
//       border-bottom: 1px solid darkgrey;
  
//       .header-block {
//         text-transform: capitalize;
//         width: 23%;
  
//         &:last-child {
//           width: 8%;
//         }
//       }
//     }
  
//     .total {
//       margin-top: 30px;
//       margin-left: auto;
//       font-size: 36px;
//     }
//   }
  