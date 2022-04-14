import {
  Container,
  Icon,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import { ResearchCardStyles } from 'styles';
import { withStyles } from '@mui/styles';

const ResearchCards = (props) => {
  const { classes, title, subtitle, text, image } = props;
  return (
    <Card className={classes.card} elevation={3}>
      <CardMedia
        component='img'
        className={classes.image}
        image={image}
        alt='Live from space album cover'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
          <Typography className={classes.body}>{text}</Typography>
          <Button
            className={classes.exploreBtn}
            startIcon={<Icon>explore_icon</Icon>}
            variant='contained'
          >
            Explore{' '}
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default withStyles(ResearchCardStyles)(ResearchCards);
