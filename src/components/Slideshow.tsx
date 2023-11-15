import * as React from 'react';
import Box from '@mui/material/Box';
import { ISlideshow } from '../types';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Slideshow(props: ISlideshow) {
	const { content } = props;
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = content.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{ maxWidth: 400, flexGrow: 1 }}>
			<Paper
				square
				elevation={ 0 }
				sx={{
					display: 'flex',
					height: 90,
					pl: 2
				}}
			>
				<Typography sx={{ fontSize: '17px' }}>
					{ content[activeStep].content }
				</Typography>
			</Paper>
			<AutoPlaySwipeableViews
				index={ activeStep }
				onChangeIndex={ handleStepChange }
				enableMouseEvents
			>
				{content.map((step, index) => (
				<div key={ step.content }>
					{Math.abs(activeStep - index) <= 2 ? (
					<Box
						component='img'
						sx={{
							objectFit: 'fill',
							display: 'block',
							maxWidth: 400,
							overflow: 'hidden',
							width: '100%'
						}}
						src={ step.imgPath as string }
					/>
					) : null}
				</div>
				))}
			</AutoPlaySwipeableViews>

			<MobileStepper
				steps={ maxSteps }
				position='static'
				activeStep={ activeStep }
				nextButton={
				<Button
					size='small'
					onClick={ handleNext }
					disabled={ activeStep === maxSteps - 1 }
				>
					Next
					{theme.direction === 'rtl' ? (
					<KeyboardArrowLeft />
					) : (
					<KeyboardArrowRight />
					)}
				</Button>
				}
				backButton={
				<Button size='small' onClick={ handleBack } disabled={ activeStep === 0 }>
					{ theme.direction === 'rtl' ? (
					<KeyboardArrowRight />
					) : (
					<KeyboardArrowLeft />
					)}
					Back
				</Button>
				}
			/>
		</Box>
	);
}