import {Img, staticFile, useCurrentFrame} from 'remotion';

export const VinylArt = ({thumbnail}) => {
	const vinyl = staticFile('vinyl.webp');
	const cover1 = thumbnail;

	const frame = useCurrentFrame();

	// vinyl rotation speed control
	const rotationDegrees = frame * 10;

	return (
		<div
			id="Art"
			style={{
				position: 'relative',
				width: 470,
				height: 300,
				transform: 'scale(1.4)',
			}}
		>
			<Img
				id="vinyl"
				style={{
					width: 290,
					position: 'absolute',
					top: 5,
					left: 180,
					transform: `rotateZ(${rotationDegrees}deg)`,
				}}
				src={vinyl}
			/>
			<Img
				id="vinylArt"
				src={cover1}
				style={{
					width: 80,
					position: 'absolute',
					top: 110,
					left: 285,
					borderRadius: 500,
					transform: `rotateZ(${rotationDegrees}deg)`,
				}}
			/>
			<Img
				id="coverArt"
				src={cover1}
				style={{
					backgroundSize: 'cover',
					width: 300,
					height: 300,
					position: 'absolute',
					borderRadius: 10,
					filter: 'drop-shadow(5px 0px 0.5rem rgba(0,0,0,0.5))',
				}}
			/>
		</div>
	);
};
