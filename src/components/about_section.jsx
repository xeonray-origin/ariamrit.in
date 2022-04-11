import { Grid, Typography, Container, Button } from '@mui/material';
import { AboutSectionStyles } from 'styles';
import { homePageContent } from 'config';
import { withStyles } from '@mui/styles';

const content = {
  aboutImage: `${process.env.PUBLIC_URL}/resources/icons/about_us_img.svg`,
};

const AboutSection = (props) => {
  const { classes } = props;
  return (
    <Grid container spacing={5} alignItems='center'>
      <Grid item xs={4}>
        <object
          className={classes.aboutImage}
          data={content.aboutImage}
          alt='asda'
        >
          asd
        </object>
      </Grid>
      <Grid alignItems={'center'} item xs={8}>
        <div className={classes.sectionTitle}>
          <Typography className={classes.sectionTitleText}>
            {homePageContent.aboutSection.title}
          </Typography>
        </div>
        <div className={classes.about}>
          <Typography align='justify' variant='body1'>
            {homePageContent.aboutSection.about}
          </Typography>
        </div>

        <Button className={classes.learnMoreBtn} variant='outlined'>
          {homePageContent.aboutSection.learnMoreBtn}
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(AboutSectionStyles)(AboutSection);
