import { AppProps } from 'next/app';

// can add state and global styles here
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}