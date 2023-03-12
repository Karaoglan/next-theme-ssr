import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const Button = {
  baseStyle: {
    fontWeight: 'bold',
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: mode('red.100', 'primary')(props),
    }),
  },
};

export default Button;
