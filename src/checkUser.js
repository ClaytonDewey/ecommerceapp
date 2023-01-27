import { Auth } from "aws-amplify";

const checkUser = async (updateUser) => {
  const userData = await Auth
    .currentSession()
    .catch(err => console.error('error: ', err))
  if (!userData) {
    console.log('userData: ', userData)
    updateUser({})
    return
  }
  const { idToken: { payload } } = userData
  const isAuthorized = payload['cognito:groups'] && payload['cognito:groups'].includes('Admin')
  updateUser({
    username: payload['cognito:username'],
    isAuthorized
  })
}

export default checkUser;