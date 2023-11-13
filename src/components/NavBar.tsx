import { NavBarProps } from '../types';
import { Box, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';


export function NavBar(props: NavBarProps) {
	const { pages } = props;

	return (
		<Toolbar disableGutters>
			<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
				{pages.map((page) => (
					<Button style={{ textTransform: 'capitalize' }} onClick={ page.onClick }
						key={ page.title }
						sx={{ my: 2, color: 'black', display: 'block' }}
					>
						{ page.title }
					</Button>
				))}
			</Box>
		</Toolbar>
	);
}