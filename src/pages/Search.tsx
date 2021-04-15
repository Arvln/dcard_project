import { Link, useRouteMatch } from "react-router-dom";
import SearchRouter from "../router/SearchRouter";


function Search() {
  const { url } = useRouteMatch();
  return (
    <div>
      <SearchRouter />
    </div>
  );
}

export default Search;
