import {
  Grid,
  Typography,
  withStyles,
  Container,
  Button,
} from '@material-ui/core';
import { AboutSectionStyles } from 'styles';
import { homePageContent } from 'config';

const content = {
  aboutImage: `${process.env.PUBLIC_URL}/resources/products/skyjacker/4.png`,
};

const AboutSection = (props) => {
  const { classes } = props;
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={6}>
          <img className={classes.aboutImage} src={content.aboutImage} alt='' />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.title} variant='h1' wrap>
            {homePageContent.aboutSection.title}
          </Typography>
          <Typography className={classes.about} variant='body1' wrap>
            {homePageContent.aboutSection.about}
          </Typography>
          <Button className={classes.learnMoreBtn} variant='outlined'>
            {homePageContent.aboutSection.learnMoreBtn}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(AboutSectionStyles)(AboutSection);
