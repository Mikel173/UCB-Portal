import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SV005 from '../imagenes/SV005.png';
import '../SistemasVirtuales.css';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="new-button" onClick={() => loginWithRedirect()}>
        <img src={SV005} alt="Login" />
      </button>
    );
};
