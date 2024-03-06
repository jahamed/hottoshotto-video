import {AbsoluteFill, Img, staticFile} from 'remotion';

export const IntroCard = ({date}) => {
	return (
		<AbsoluteFill className="flex" style={{backgroundColor: 'rgb(15, 8, 35)'}}>
			<Img
				style={{height: '350px', width: '350px'}}
				src={staticFile('hottoshotto-logo.png')}
			/>
			<h1 className="text-4xl text-white">Top 10 Daily Rewards for {date}</h1>
		</AbsoluteFill>
	);
};
