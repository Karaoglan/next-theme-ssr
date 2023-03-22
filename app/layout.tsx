'use client';
import '@/styles/reset.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import extendTheme from '@/theme/index';
import { Navbar } from '@/components/Navbar';
import { useState } from 'react';
import { AppContext } from '@/context/context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [termContext, setTermContext] = useState('');

  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={extendTheme}>
            <AppContext.Provider value={{ termContext, setTermContext }}>
              <Box bg={'blue.900'}>
                <Navbar />
              </Box>
              <Box bg={'blue.100'}>{children}</Box>
            </AppContext.Provider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
