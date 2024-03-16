import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


function SignUp() {
  return (
    <div>
      <GoogleOAuthProvider clientId="591392071556-7qdrth38i5t6g4is1tbrt5v4u3akmorj.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default SignUp;