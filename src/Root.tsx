import {Composition} from 'remotion';
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import {HelloWorld, myCompSchema} from './HelloWorld';
import {Logo, myCompSchema2} from './HelloWorld/Logo';
import {SongTweet} from './SongTweet';
import './style.css';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="SongTweet"
				component={SongTweet}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				schema={myCompSchema}
				defaultProps={{
					audio:
						'https://galamusic-ipfs.gala.com/ipfs/QmdXND4rJonXT4Zcse78f5BWPiM1cb5XVzbVDdLz6fChSi/track.mp3',
					thumbnail:
						'https://tokens.gala.games/assets/gala-music/gala-music/s2art/hexcode-(feat.-rhythm)/e91953a0c04763a6d946e73c4080c71efa8a5004-512x512.png',
				}}
				calculateMetadata={async ({props}) => {
					const audioSeconds = await getAudioDurationInSeconds(props.audio);
					console.log(audioSeconds);
					return {
						durationInFrames: Math.floor(audioSeconds * 30),
					};
				}}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: '#000000',
					logoColor1: '#91EAE4',
					logoColor2: '#86A8E7',
				}}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				schema={myCompSchema2}
				defaultProps={{
					logoColor1: '#91dAE2' as const,
					logoColor2: '#86A8E7' as const,
				}}
			/>
		</>
	);
};
