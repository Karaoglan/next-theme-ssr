// theme/index.js
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
//import styles from './styles'

// Foundational style overrides
//import borders from './foundations/borders'

// Component style overrides
import Button from './components/button';
import { config, colors, fonts, fontWeights } from './foundations';

const overrides = {
  config,
  colors,
  fonts,
  fontWeights,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
