import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core'; // Import MantineProvider
// const theme = createTheme({
//   colors: {
//     // Add your color
//     deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
//     // or replace default theme color
//     blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
//   },

//   shadows: {
//     md: '1px 1px 3px rgba(0, 0, 0, .25)',
//     xl: '5px 5px 3px rgba(0, 0, 0, .25)',
//   },

//   headings: {
//     fontFamily: 'Roboto, sans-serif',
//     sizes: {
//       h1: { fontSize: rem(36) },
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
    <App />
    </MantineProvider>
  </React.StrictMode>
);


