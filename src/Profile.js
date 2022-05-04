import React from "react";
import "./App.css";

import { Authenticator } from "@aws-amplify/ui-react";

export const Profile = () => {
    return (
        <div style={containerStyle}>
            <Authenticator>
                {({ signOut, user }) => (
                    <main>
                        <h1>Hello {user.username}</h1>
                        {console.log(user)}
                        <h2>Email: {user.attributes.email}</h2>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        </div>
    );
};

const containerStyle = {
    width: 400,
    margin: "20px auto",
};
