import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.div`
  width: 23%;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 23%;
`;

export const Price = styled(Name)``;

export const Arrow = styled.div`
  cursor: pointer;
  font-weight: 600;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  font-weight: 600;
`;

// .checkout-item-container {
//     width: 100%;
//     display: flex;
//     min-height: 100px;
//     border-bottom: 1px solid darkgrey;
//     padding: 15px 0;
//     font-size: 20px;
//     align-items: center;
  
//     .image-container {
//       width: 23%;
//       padding-right: 15px;
  
//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//     .name,
//     .quantity,
//     .price {
//       width: 23%;
//     }
  
//     .quantity {
//       display: flex;
//       align-items: center;
//       .arrow {
//         cursor: pointer;
//         font-weight: 600;
//       }
  
//       .value {
//         margin: 0 10px;
//       }
//     }
  
//     .remove-button {
//       padding-left: 12px;
//       cursor: pointer;
//       font-weight: 600;
//     }
//   }
  