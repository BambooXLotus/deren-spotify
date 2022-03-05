import Head from 'next/head';

import Center from '../components/Center';
import Sidebar from '../components/Sidebar';

import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Player from '../components/Player';

const Home: NextPage = () => {
	return (
		<div className='bg-black h-screen overflow-hidden'>
			<Head>
				<title>Deren Spotify Remote</title>
				<meta name='description' content='Deren Spotify' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='flex'>
				<Sidebar />
				<Center />
			</main>

			<div className='sticky bottom-0'>
				<Player />
			</div>
		</div>
	);
};

export default Home;

export const getServerSideProps = async (context) => {
	const session = await getSession(context);

	return {
		props: {
			session,
		},
	};
};
