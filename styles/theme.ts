import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {},
  components: {
    Skeleton: {
      defaultProps: {
        startColor: "#F7F8FA",
        endColor: "#DFE1E6",
      },
    },
  },
  fonts: {
    body: `'Inter','system-ui','open-sans'`,
  },
});
