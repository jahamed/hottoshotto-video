import {AbsoluteFill, Img, staticFile} from 'remotion';

export const IntroCard = ({date, topSongs}) => {
	return (
		<AbsoluteFill className="flex bg-white">
			<h1 className="text-4xl text-white">Top 10 Daily Rewards for {date}</h1>

			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<h1 className="text-4xl">Top 10 Songs</h1>
				<div style={{marginTop: '20px', width: '80%', overflowX: 'auto'}}>
					<table style={{width: '100%', borderCollapse: 'collapse'}}>
						<thead>
							<tr>
								<th style={{padding: '8px', borderBottom: '1px solid #ddd'}}>
									#
								</th>
								<th style={{padding: '8px', borderBottom: '1px solid #ddd'}}>
									Song Name
								</th>
								<th style={{padding: '8px', borderBottom: '1px solid #ddd'}}>
									Artist
								</th>
								<th style={{padding: '8px', borderBottom: '1px solid #ddd'}}>
									Emitted Rewards
								</th>
							</tr>
						</thead>
						<tbody>
							{topSongs.slice(0, 10).map((song, index) => (
								<tr
									key={index}
									style={{
										backgroundColor:
											index % 2 === 0 ? '#f2f2f2' : 'transparent',
									}}
								>
									<td style={{padding: '8px', border: '1px solid #ddd'}}>
										{index + 1}
									</td>
									<td style={{padding: '8px', border: '1px solid #ddd'}}>
										{song.name}
									</td>
									<td style={{padding: '8px', border: '1px solid #ddd'}}>
										{song.artist}
									</td>
									<td style={{padding: '8px', border: '1px solid #ddd'}}>
										{song.emittedRewards}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
