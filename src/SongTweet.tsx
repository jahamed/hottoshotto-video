import {
	AbsoluteFill,
	Audio,
	staticFile,
	Img,
	delayRender,
	continueRender,
} from 'remotion';
import {z} from 'zod';
import {VinylArt} from './VinylArt';

import {loadFont} from '@remotion/google-fonts/ConcertOne';
const {fontFamily} = loadFont();

export const songTweetSchema = z.object({
	audio: z.string(),
	thumbnail: z.string(),
	name: z.string(),
	artist: z.string(),
	streams: z.string(),
});

export const SongTweet = ({audio, thumbnail, name, artist, streams}) => {
	return (
		<AbsoluteFill
			className="bg-white text-stone-400-600 uppercase"
			style={{fontFamily: fontFamily}}
		>
			{/* Background Image */}
			<AbsoluteFill>
				<Img
					style={{
						backgroundSize: 'contain',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						height: '100vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						opacity: 0.8,
						filter: 'blur(50px)', // Adjust the blur strength as per your preference
					}}
					src={thumbnail}
				/>
			</AbsoluteFill>

			{/* Vinyl Animation */}
			<AbsoluteFill className="items-start justify-center px-40 ">
				<VinylArt thumbnail={thumbnail} />
			</AbsoluteFill>

			<AbsoluteFill
				className="justify-center text-left"
				style={{position: 'absolute', left: '750px'}}
			>
				<p className="text-4xl font-bold">{name}</p>
				<p className="text-3xl">Artist: {artist}</p>
				<p className="text-2xl">Streams: {streams}</p>
			</AbsoluteFill>

			{/* Audio */}
			<Audio src={audio} />
		</AbsoluteFill>
	);
};
