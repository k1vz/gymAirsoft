import { VideoProps } from '../types';


export function Video(props: VideoProps) {
	const { thumbnail, main, backup, youtube, drive } = props.content;

	return (
		<>
			<video width = '1280' height = '720' controls poster = { thumbnail }>
				<source src = { main } type = 'video/mp4' />
				<source src = { backup } type = 'video/mp4' />
				<source src = { youtube } type = 'video/mp4' />
				<source src = { drive } type = 'video/mp4' />
			</video>
		</>
	)
}