import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Nav } from "./Nav";
import { Admin } from "./Admin";
import { Main } from "./Main";
import { Profile } from "./Profile";

export const Router = () => {
    return (
        <HashRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/admin" component={Admin} />
                <Route path="/profile" component={Profile} />
                <Route component={Main} />
            </Switch>
        </HashRouter>
    );
};
