import "@/styles/globals.scss"
import { Inter } from "@next/font/google"
import { SessionProvider } from "next-auth/react"

const inter = Inter({
	subsets: ["latin"],
})

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<main className={inter.className}>
				<Component {...pageProps} />
			</main>
		</SessionProvider>
	)
}
