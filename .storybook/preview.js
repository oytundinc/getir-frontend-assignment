import { GlobalStyle } from "../src/common/theme/global-style";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyle />
        <Story />
      </>
    );
  },
];
