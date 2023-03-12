'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import extendTheme from '@/theme/index';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={extendTheme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
