import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, ProfileOutlined } from "@ant-design/icons";

import { Hub } from "aws-amplify";
import { checkUser } from "./checkUser";

export const Nav = () => {
    const loc = useLocation();
    console.log(loc);
    const splitLoc = loc.pathname.split("/");
    console.log(splitLoc);
    const key = splitLoc[1] && splitLoc[1].length > 0 ? splitLoc[1] : "home";
    console.log(key);

    const [user, updateUser] = useState({});

    useEffect(() => {
        checkUser(updateUser);

        Hub.listen("auth", (data) => {
            // Another example of nested destructuring...
            const {
                payload: { event },
            } = data;

            console.log("event: ", event);
            if (event === "signIn" || event === "signOut") {
                checkUser(updateUser);
            }
        });
    }, []);

    return (
        <div>
            <Menu selectedKeys={[key]} mode="horizontal">
                <Menu.Item key="home">
                    <Link to={`/`}>
                        <HomeOutlined />
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link to="/profile">
                        <UserOutlined />
                        Profile
                    </Link>
                </Menu.Item>
                {user.isAuthorized && (
                    <Menu.Item key="admin">
                        <Link to="/admin">
                            <ProfileOutlined />
                            Admin
                        </Link>
                    </Menu.Item>
                )}
            </Menu>
        </div>
    );
};
