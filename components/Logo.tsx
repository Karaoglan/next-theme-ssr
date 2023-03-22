import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Logo = (props: any) => {
  return (
    <Box {...props}>
      <Link href={'/'}>
        <Text fontSize="lg" fontWeight="bold">
          Logo
        </Text>
      </Link>
    </Box>
  );
};
