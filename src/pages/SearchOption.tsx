import { useRouteMatch } from "react-router-dom"

import { Wrapper } from "./style/SearchOptionWrapper";


function SearchOption() {
  const { url } = useRouteMatch();
  
  return (
    <Wrapper>
      
    </Wrapper>
  )
}

export default SearchOption

