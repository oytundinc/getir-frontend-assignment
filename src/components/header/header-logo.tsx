import React from "react";
import Logo from "../../assets/Logo.png";


export const WrappedHeaderLogo = () => {
  return <img src={Logo} alt="Logo" className="header-logo"/>;
};

export const HeaderLogo = React.memo(WrappedHeaderLogo);
