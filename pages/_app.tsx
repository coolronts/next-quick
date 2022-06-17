import '../styles/globals.css'

import type { AppProps } from 'next/app'
import OnLoad from './OnLoad'
import { RecoilRoot } from 'recoil';
import {useState} from 'react';

function MyApp({ Component, pageProps }: AppProps) {
const[isLoading, setIsLoading] = useState(true);
return (
  <RecoilRoot>
    <OnLoad setIsLoading={setIsLoading} />
    {isLoading ? <div>Loading...</div> : <Component {...pageProps} />}
    </RecoilRoot>
  )
}

export default MyApp
