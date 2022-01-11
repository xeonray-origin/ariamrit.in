import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { FeedCardStyles } from 'styles';
import { withStyles } from '@mui/styles';

const FeedCard = (props) => {
  const { classes, title, subtitle, text, image } = props;
  return (
    <Card className={classes.card}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant='body' component='div'>
            {title}
          </Typography>
          <Typography component='p' variant='body1'>
            {text}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia
        component='img'
        className={classes.image}
        image={image}
        alt='Live from space album cover'
      />
    </Card>
  );
};

export default withStyles(FeedCardStyles)(FeedCard);
