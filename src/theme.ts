import { createSystem, defaultConfig } from "@chakra-ui/react";

const customConfig = {
  ...defaultConfig,
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: "#f7fafc" },
          900: { value: "#1a202c" },
        },
      },
    },
  },
};

const system = createSystem(customConfig);

export default system;