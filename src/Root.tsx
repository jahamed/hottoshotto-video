import {Composition, staticFile} from 'remotion';
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import {HelloWorld, myCompSchema} from './HelloWorld';
import {Logo, myCompSchema2} from './HelloWorld/Logo';
import {SongTweet, songTweetSchema} from './SongTweet';
import './style.css';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	const fps = 60;

	// in seconds
	const titleDuration = 5;
	const songDurations = 5;
	const endDuration = 5;
	const numSongs = 10;

	return (
		<>
			<Composition
				id="SongTweet"
				component={SongTweet}
				fps={60}
				width={1280}
				height={720}
				schema={songTweetSchema}
				calculateMetadata={async ({props}) => {
					// Getting data from JSON now, but might have to get from DB later?
					const data = await fetch(staticFile('data.json'));
					const json = await data.json();

					// Get 1st track for testing
					// const song = json[3];
					// const audio = song.m3u8.replace('playlist.m3u8', 'track.mp3');
					// const audioSeconds = await getAudioDurationInSeconds(audio);

					// get top 10 highest performing songs
					json.sort((a, b) => b.music - a.music);
					const topSongs = json.slice(0, numSongs);

					return {
						// TODO: capping video at 1 minute for now...
						// durationInFrames: Math.min(60 * 60, Math.floor(audioSeconds * 60)),
						durationInFrames:
							titleDuration * fps +
							songDurations * numSongs * fps +
							endDuration * fps,
						props: {
							...props,
							topSongs,
							// audio,
							// artist: song.artist,
							// emittedRewards: song.emittedRewards,
							// thumbnail: song.image,
							// name: song.name,
							// streams: song.streams,
							// released: song.released,
						},
					};
				}}
			/>
		</>
	);
};
