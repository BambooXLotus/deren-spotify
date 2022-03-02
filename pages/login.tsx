import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import spotify from '../assets/images/spotify-logo.png';

const Login = ({ providers }) => {
	return (
		<div className='flex flex-col items-center bg-black min-h-screen justify-center'>
			<img className='w-52 mb-5' src={spotify.src} alt='Spotify'></img>
			{Object.values(providers).map((p) => (
				<div key={p.name}>
					<button
						className='bg-green-500 text-white p-5 rounded-full'
						onClick={() => {
							signIn(p.id, { callbackUrl: '/' });
						}}
					>
						Login with {p.name}
					</button>
				</div>
			))}
		</div>
	);
};

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
