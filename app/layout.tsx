import './globals.css';
import { Jost } from 'next/font/google';

const inter = Jost({ subsets: ['latin'] });

export const metadata = {
	title: 'Gun Mockuper',
	description: 'Inspect and Mockup gun models free.',
	icons: [
		{
			rel: 'icon',
			sizes: 'any',
			url: '/favicon.ico',
		},
	],
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
