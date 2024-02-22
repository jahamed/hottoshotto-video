import {AbsoluteFill, Audio, staticFile} from 'remotion';
import {z} from 'zod';
import {VinylArt} from './VinylArt';

export const songTweetSchema = z.object({
	audio: z.string(),
	thumbnail: z.string(),
});

export const SongTweet = ({audio, thumbnail}) => {
	return (
		<AbsoluteFill className="bg-slate-100">
			{/* <Audio src={staticFile('track.mp3')} /> */}
			<h1 className="text-3xl">Hello there!</h1>
			<AbsoluteFill className="justify-center px-40">
				<VinylArt />
			</AbsoluteFill>
			<Audio src={audio} />
		</AbsoluteFill>
	);
};
