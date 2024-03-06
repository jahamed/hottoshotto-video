import {
	AbsoluteFill,
	Audio,
	staticFile,
	Img,
	delayRender,
	continueRender,
} from 'remotion';

import {
	linearTiming,
	springTiming,
	TransitionSeries,
} from '@remotion/transitions';

import {fade} from '@remotion/transitions/fade';
import {wipe} from '@remotion/transitions/wipe';

import {z} from 'zod';
import {VinylArt} from './VinylArt';

import {loadFont} from '@remotion/google-fonts/ConcertOne';
import {IntroCard} from './IntroCard';
import {Gif} from '@remotion/gif';
const {fontFamily} = loadFont();

export const songTweetSchema = z.object({
	audio: z.string(),
	thumbnail: z.string(),
	name: z.string(),
	artist: z.string(),
	streams: z.string(),
});

// {audio, thumbnail, name, artist, streams}

export const SongTweet = ({topSongs}) => {
	console.log(topSongs);
	return (
		<>
			<TransitionSeries>
				<TransitionSeries.Sequence durationInFrames={60 * 5}>
					<IntroCard date="today" />
				</TransitionSeries.Sequence>

				<TransitionSeries.Transition
					presentation={wipe({direction: 'from-top-left'})}
					timing={linearTiming({durationInFrames: 30})}
				/>

				{topSongs.map((data, i) => (
					<>
						<TransitionSeries.Sequence durationInFrames={300}>
							{/* starting audio at 20 seconds */}
							<Audio
								src={data.m3u8.replace('playlist.m3u8', 'track.mp3')}
								startFrom={1200}
								loop
							/>
							<AbsoluteFill
								className="bg-white text-stone-400-600 uppercase"
								style={{fontFamily}}
							>
								{/* Background Image */}
								<AbsoluteFill>
									{data.image.endsWith('.gif') ? (
										<Gif
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
											src={data.image}
										/>
									) : (
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
											src={data.image}
										/>
									)}
								</AbsoluteFill>

								{/* Vinyl Animation */}
								<AbsoluteFill className="items-start justify-center px-40 ">
									<VinylArt thumbnail={data.image} />
								</AbsoluteFill>

								<AbsoluteFill
									className="justify-center text-left"
									style={{position: 'absolute', left: '750px'}}
								>
									<p className="text-4xl font-bold">{data.name}</p>
									<p className="text-3xl">Artist: {data.artist}</p>
									<p className="text-2xl">Streams: {data.streams}</p>
								</AbsoluteFill>
							</AbsoluteFill>
						</TransitionSeries.Sequence>
						<TransitionSeries.Transition
							presentation={wipe()}
							timing={linearTiming({durationInFrames: 30})}
						/>
					</>
				))}
			</TransitionSeries>
		</>
	);
};
