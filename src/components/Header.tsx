import { NavBar } from './NavBar';
import { HeaderProps } from '../types';
import bullet from '../assets/bullet.png';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Header(props: HeaderProps) {
	const { title, subtitle } = props;

	return (
		<>
			<Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Typography
					component='h2'
					variant='h5'
					color='inherit'
					align='center'
					noWrap
					sx={{ flex: 1 }}
				>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<img src={ bullet } style={{ width: '125px', height: '125px' }} />

						<div style={{ fontSize: '18px' }}>
							<h1 style={{
								marginTop: '20px',
								marginBottom: '0px',
								textAlign:'left'
								}}>{ title }</h1>

							<p style={{ marginTop: '10px', fontSize: '19px' }}>{ subtitle }</p>
						</div>
					</div>
				</Typography>
			</Toolbar>

			<NavBar pages={props.pages} />
		</>
	);
}