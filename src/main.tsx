import React from 'react';
import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

import { worker } from './mocks/browser';

/**
 * 프로젝트 시작할 때 products mock data 준비하도록 설정
 */

// if (process.env.NODE_ENV === 'development') {
//   worker.start({
//     serviceWorker: {
//       url: '/react-shopping-cart/mockServiceWorker.js',
//     },
//   });
// }

// async function main() {
//   await worker.start({
//     serviceWorker: {
//       url: '/react-shopping-cart-prod/mockServiceWorker.js',
//     },
//   });
// }
// main();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
