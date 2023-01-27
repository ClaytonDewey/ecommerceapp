import React from 'react';
import './App.css'

import { Authenticator } from '@aws-amplify/ui-react';

const Profile = () => (
  <Authenticator>
    {({signOut}) => (
      <div style={containerStyle}>
        <button type='button' onClick={signOut}>Sign out</button>
    </div>
    )}
  </Authenticator>
)

const containerStyle = {
  width: 400,
  margin: '20px auto'
}

export default Profile