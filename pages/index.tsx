import Head from 'next/head';

import type { NextPage } from 'next';
import Sidebar from '../components/Sidebar';
const Home: NextPage = () => {
	return (
		<div className='bg-black h-screen overflow-hidden'>
			<Head>
				<title>Deren Spotify Remote</title>
				<meta name='description' content='Deren Spotify' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Sidebar />
				{/* Center */}
			</main>

			<div>{/* Player */}</div>
		</div>
	);
};

export default Home;
