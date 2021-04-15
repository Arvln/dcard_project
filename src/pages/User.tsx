import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

function UserConfigs() {
  return <h4>configs</h4>
}

function User() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h3>User Page</h3>

      <Route path={`${path}/configs`} children={<UserConfigs />} />
    </div>
  )
}

export default User
