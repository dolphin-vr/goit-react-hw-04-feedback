import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0 auto ${props => props.theme.spacing(8)};
   display: flex;
   justify-content: center;
   gap: ${props => props.theme.spacing(5)};
   align-items: center;

   button:nth-child(1){      
      color: ${props => props.theme.colors.green};
   }
   button:nth-child(2){      
      color: ${props => props.theme.colors.blue};
   }
   button:nth-child(3){      
      color: ${props => props.theme.colors.red};
   }
`

export const Btn = styled.button`
   padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};   
   border-radius: ${props => props.theme.radii.sm};
   text-transform: capitalize;
   font-weight: 500;
`