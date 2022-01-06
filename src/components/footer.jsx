import { withStyles, Container, Grid, Typography } from '@material-ui/core';
import { FooterStyles } from 'styles';
import { footerContent } from 'config';

const FooterDiv = (props) => {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='center'
          spacing={3}
          justify='center'
        >
          <Grid item>
            <Typography>{footerContent.website}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default withStyles(FooterStyles)(FooterDiv);
