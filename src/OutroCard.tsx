import {AbsoluteFill, Img, staticFile} from 'remotion';

export const OutroCard = () => {
	return (
		<AbsoluteFill className="flex justify-center items-center bg-white">
			<div style={{display: 'flex', alignItems: 'center'}}>
				<Img src={staticFile('hottoshotto-logo.png')} />
				<h1 className="mx-10 text-8xl">HottoShotto</h1>
			</div>
		</AbsoluteFill>
	);
};
