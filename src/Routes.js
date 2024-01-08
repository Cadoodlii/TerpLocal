import {BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Home from "./components/Home";
// import Profile component
import Profile from "./components/Profile";
// import Rewards component
import Rewards from "./components/Rewards";

export const Routes= () => {

    return (
            <Routes>
                <Route exact path="/"
                    element={<Home />}
                />
                <Route path="/Profile"
                element={<Profile />} 
                />

                <Route path="/Rewards"
                element={<Rewards />} 
                />
            </Routes>
    )
}