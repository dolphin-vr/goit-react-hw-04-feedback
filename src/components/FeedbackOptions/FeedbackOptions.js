import { Btn, Wrapper } from "./FeedbackOptions.styled"


export const FeedbackOptions = ({options, onLeaveFeedback})=>{
   return (
      <Wrapper>
         {options.map((el, ix) => <Btn key={ix} name={el} onClick={ev=>onLeaveFeedback(ev)}>{el}</Btn>)}
      </Wrapper>
   )
}
