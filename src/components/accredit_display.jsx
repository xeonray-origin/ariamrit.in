import { Container, Icon, Grid, Typography, Stack } from '@mui/material';
import { AccreditDisplayStyles } from 'styles';
import { withStyles } from '@mui/styles';

const AccreditDisplay = (props) => {
  const { isIcon, text, image, stat } = props;
  return (
    <>
      {isIcon ? (
        <>
          <Icon
            sx={{
              fontSize: '4rem',
              color: '#6B6B6B',
              textAlign: 'center',
            }}
          >
            {image}
          </Icon>
          <Typography
            sx={{
              paddingTop: '2.5rem',
              textAlign: 'center',
            }}
          >
            {text}
          </Typography>
        </>
      ) : (
        <>
          <img height={65} src={process.env.PUBLIC_URL + image} alt='...' />
          <Typography
            sx={{
              paddingTop: '2.5rem',
              textAlign: 'center',
            }}
          >
            {text}
          </Typography>
        </>
      )}
      {/* <Typography variant='h4'>{}</Typography> */}
    </>
  );
};

export default withStyles(AccreditDisplayStyles)(AccreditDisplay);
