import styled from "styled-components";

const getPercentageColor = props => {
   // const red = 65280;
   // const green = 187;
   // const color = `#${Math.round((red - (red-green)*props.children[4].props.positivepercentage / 100))
   //    .toString(16)
   //    .padStart(4, 0)}00`;
   //    return color
   const hue=((props.children[4].props.positivepercentage / 100)*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
 };

export const Wrapper = styled.div`
   margin: 0 auto ${props => props.theme.spacing(8)};
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Title = styled.h2`
   margin: ${props => props.theme.spacing(4)} auto ${props => props.theme.spacing(3)};
   font-size: 32px;
`

export const List = styled.ul`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 0;
   width: 100%;
   
  li:nth-child(1){      
      color: ${props => props.theme.colors.green};
   }
   li:nth-child(2){      
      color: ${props => props.theme.colors.blue};
   }
   li:nth-child(3){      
      color: ${props => props.theme.colors.red};
   }
   li:nth-child(4){      
      font-weight: 500;
   }
   li:nth-child(5){
      letter-spacing: 1.5px;
      color: ${getPercentageColor};
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
   }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing(2)};
  margin: 0;
  padding: ${props => props.theme.spacing(2)};
  width: 230px;
  
`

export const Label = styled.span`
text-align: left;
`

export const Percent = styled.span`
   font-weight: 700;
`
