import React from 'react' 

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';


import '../styles/globals.css';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

