import {Composition, staticFile} from 'remotion';
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
				fps={fps}
				width={1280}
				height={720}
				schema={songTweetSchema}
				calculateMetadata={async ({props}) => {
					// Getting data from JSON now, but might have to get from DB later?
					const data = await fetch(staticFile('data.json'));
					const json = await data.json();

					// get top 10 highest performing songs
					json.sort((a, b) => b.music - a.music);
					const topSongs = json.slice(0, numSongs);

					return {
						durationInFrames:
							titleDuration * fps +
							songDurations * numSongs * fps +
							endDuration * fps -
							330,
						// transitions mess with durationsInFrames
						// https://www.remotion.dev/docs/transitions/transitionseries#duration-of-a-transitionseries
						props: {
							...props,
							topSongs,
						},
					};
				}}
			/>
		</>
	);
};
