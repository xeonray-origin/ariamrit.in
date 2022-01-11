import { Grid, Typography, Container, Button } from '@mui/material';
import { AboutSectionStyles } from 'styles';
import { homePageContent } from 'config';
import { withStyles } from '@mui/styles';

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
          <Typography variant='h1' wrap>
            {homePageContent.aboutSection.title}
          </Typography>
          <Typography variant='body1' wrap>
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
