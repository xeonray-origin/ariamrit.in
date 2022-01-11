import { Container, Icon, Grid, Typography, Stack } from '@mui/material';
import { AccreditDisplayStyles } from 'styles';
import { withStyles } from '@mui/styles';

const AccreditDisplay = (props) => {
  const { isIcon, text, image, stat } = props;
  return (
    <>
      <Stack
        justifyContent={'space-evenly'}
        alignItems={'center'}
        direction={'row'}
        spacing={8}
      >
        {isIcon ? (
          <Icon style={{ fontSize: '4rem', color: '#6B6B6B' }}>{image}</Icon>
        ) : (
          <img height={80} src={process.env.PUBLIC_URL + image} alt='...' />
        )}
        {/* <Typography variant='h4'>{}</Typography> */}
      </Stack>
    </>
  );
};

export default withStyles(AccreditDisplayStyles)(AccreditDisplay);
