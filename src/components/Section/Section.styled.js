import styled from "styled-components";

export const SectionWrapper = styled.div`
   max-width: calc(100% /3);
   margin: 0 auto;
   padding: 20px;
   border-radius: ${props => props.theme.radii.md};
   background-color: ${props => props.theme.colors.white};
`

export const Title = styled.h2`
   margin: 0 auto ${props => props.theme.spacing(5)};
   text-align: center;
   font-size: 28px;
`