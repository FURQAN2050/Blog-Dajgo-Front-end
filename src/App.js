import Home from "./homeScreen/home";
import Login from "./login/Login";
import Signup from "./signup/signup";
import Info from "./personal-info/info";
import Main from "./blogsmain/main";
import Favorites from "./favorite/favorites";
import Detail from "./blogdetail/detail";
import Post from "./newpost/post";
import Profile from "./authprofile/profile"

import "./css/front-styles.css"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/personal-info">
          <Info />
        </Route>
        <Route path="/blogsmain" component={Main} />
        <Route path="/favorite">
          <Favorites />
        </Route>
        <Route path="/blogdetail">
          <Detail />
        </Route>
        <Route path="/newpost" component={Post} />
        <Route path="/authprofile">
          <Profile />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
