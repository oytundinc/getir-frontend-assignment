import { WrappedHeaderLogo } from "../../components/header/header-logo";
import { HeaderStyled } from "./header.styles";

export const WrappedHeader = () => {
  return (
    <HeaderStyled>
      <div className="header-container">
        <WrappedHeaderLogo />
      </div>
    </HeaderStyled>
  );
};

export const Header = WrappedHeader;
