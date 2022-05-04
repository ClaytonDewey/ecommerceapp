import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Nav } from "./Nav";
import Admin from "./Admin";
import { Main } from "./Main";
import { Profile } from "./Profile";

export const Router = () => {
    return (
        <HashRouter>
            <Nav />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Main />}
                />
                <Route
                    path="/admin"
                    element={<Admin />}
                />
                <Route
                    path="/profile"
                    element={<Profile />}
                />
                <Route element={<Main />} />
            </Routes>
        </HashRouter>
    );
};
