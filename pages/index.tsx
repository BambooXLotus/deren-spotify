import Head from 'next/head';

import type { NextPage } from 'next';
import Sidebar from '../components/Sidebar';
const Home: NextPage = () => {
	return (
		<div className=''>
			<Head>
				<title>Deren Spotify Remote</title>
				<meta name='description' content='Deren Spotify' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>Deren Spotify Remote</h1>

			<main>
				<Sidebar />
				{/* Center */}
			</main>

			<div>{/* Player */}</div>
		</div>
	);
};

export default Home;
