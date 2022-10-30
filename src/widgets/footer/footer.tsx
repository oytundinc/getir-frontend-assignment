import { FooterStyled } from "./footer.styles";

export const WrappedHeader = () => {
  return (
    <FooterStyled>
      <div className="footer-container">
        <span className="first-text">©2019 Market</span>
        <span className="second-text"> • </span>
        <span className="third-text">Privacy Policy</span>
      </div>
    </FooterStyled>
  );
};

export const Footer = WrappedHeader;