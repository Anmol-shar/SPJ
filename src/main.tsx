import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'; // ✅ import ChakraProvider
import './index.css';
import App from './App.tsx';
import theme from './theme';
// import { Nunito } from 'next/font/google';

// const nunito = Nunito({
//   variable: '--font-Nunito',
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['500', '700'],
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ChakraProvider value={theme}>
  {/* <main className={nunito.className}> */}
  <App />
{/* </main> */}
</ChakraProvider>
  </StrictMode>
);
