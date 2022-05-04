import { Auth } from "aws-amplify";

export const checkUser = async (updateUser) => {
    const userData = await Auth.currentSession().catch((err) =>
        console.error("error: ", err)
    );

    if (!userData) {
        updateUser({});
        return;
    }

    // Nested destructuring of a payload const.
    const {
        idToken: { payload },
    } = userData;

    const isAuthorized =
        payload["cognito:groups"] &&
        payload["cognito:groups"].includes("Admin");

    updateUser({
        username: payload["cognito:username"],
        isAuthorized,
    });
};
