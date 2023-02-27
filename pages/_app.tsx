import '@/styles/globals.css';
import { Ubuntu } from '@next/font/google';
import type { AppProps } from 'next/app';
import Layout from './components/layout';

const ubuntu = Ubuntu({ weight: '400' });
export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={ubuntu.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</main>
	);
}
