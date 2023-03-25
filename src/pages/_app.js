import 'styles/globals.scss'
import { Inter } from '@next/font/google'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

const inter = Inter({
	subsets: ['latin'],
})

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#2b2b2b"
				/>
				<meta name="msapplication-TileColor" content="#222222" />
				<meta name="theme-color" content="#2c2c2c" />
			</Head>
			<SessionProvider session={session}>
				<main className={inter.className}>
					<Component {...pageProps} />
				</main>
			</SessionProvider>
		</>
	)
}
