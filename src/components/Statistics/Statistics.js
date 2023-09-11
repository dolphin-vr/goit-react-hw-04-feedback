import { Notification } from "components/Notification/Notification";
import { List, ListItem, Label, Percent, Wrapper } from "./Statistics.styled"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
   if (total === 0) {
      return(
         <Wrapper>
            <Notification message="There is no feedback" />
         </Wrapper>
      )
   };
   return(
      <Wrapper>
         <List>
            <ListItem key='1' >
               <Label>Good: </Label>
               <Percent>{good}</Percent>
            </ListItem>
            <ListItem key='2' >
               <Label>Neutral: </Label>
               <Percent>{neutral}</Percent>
            </ListItem>
            <ListItem key='3' >
               <Label>Bad: </Label>
               <Percent>{bad}</Percent>
            </ListItem>
            <ListItem key='4' >
               <Label>Total: </Label>
               <Percent>{total || 0}</Percent>
            </ListItem>
            <ListItem key='5' positivepercentage={positivePercentage}>
               <Label>Positive feedback: </Label>
               <Percent>{positivePercentage}%</Percent>
            </ListItem>
         </List>
      </Wrapper>
   )
}