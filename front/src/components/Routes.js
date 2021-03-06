import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import Home from '../scenes/home/Home';
import Profile from '../scenes/user/profile/Profile';
import ShowProfile from '../scenes/user/profile/ShowProfile';
import Method from "../scenes/user/selectTarget/selectTarget";
import Methods from "../components/methods/Methods";
import TargetList from '../scenes/user/targetList/TargetList';
import MethodInfo from '../scenes/home/Methods/methodInfo/MethodInfo';
import Personal from '../scenes/user/Personal'
import NewTarget from '../scenes/user/selectTarget/NewTarget';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/user/profile">
                <ShowProfile />
            </Route>
            <Route exact path="/user/profile/edit">
                <Profile />
            </Route>
            <Route exact path="/newMethod">
                <Method />
            </Route>

            <Route exact path="/newTarget">
                <NewTarget />
            </Route>
            <Route exact path="/methods">
                <Methods />
            </Route>
            <Route exact path="/user">
                <Personal />
            </Route>
            <Route path="/target/:id">
                <TargetList />
            </Route>
            <Route path="/method/:id">
                <MethodInfo />
            </Route>
        </Switch>
    )

}

export default connect()(Routes)
