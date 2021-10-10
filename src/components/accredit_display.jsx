import {
  withStyles,
  Container,
  Icon,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { AccreditDisplayStyles } from 'styles';

const AccreditDisplay = (props) => {
  const { isIcon, text, image, stat } = props;
  return (
    <>
      <Grid
        justifyContent='center'
        alignContent='center'
        align='center'
        direnction='row'
        container
      >
        <Grid item>
          <Container>
            {isIcon ? (
              <Icon style={{ fontSize: '4rem', color: '#6B6B6B' }}>
                {image}
              </Icon>
            ) : (
              <img height={80} src={process.env.PUBLIC_URL + image} alt='...' />
            )}
          </Container>
          <Typography variant='h4'>{stat ?? stat}</Typography>
          <Typography variant='h6'>{text}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(AccreditDisplayStyles)(AccreditDisplay);
