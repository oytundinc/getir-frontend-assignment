import React from "react";
import { HeaderLogo } from "../../components/header/header-logo";
import { HeaderStyled } from "./header.styles";

export const WrappedHeader = () => {
  return (
    <HeaderStyled>
      <div className="header-container">
        <HeaderLogo />
      </div>
    </HeaderStyled>
  );
};

export const Header = React.memo(WrappedHeader);
