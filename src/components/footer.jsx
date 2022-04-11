import {
  Container,
  Grid,
  Icon,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { FooterStyles } from 'styles';
import { footerContent } from 'config';
import { withStyles } from '@mui/styles';
const FooterDiv = (props) => {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <Grid container display={'flex'} alignItems='center'>
        <Grid item md={4}>
          {footerContent.social.map((btn, index) => {
            return (
              <IconButton key={index}>
                <Icon className={classes.social}>{btn.icon}</Icon>
              </IconButton>
            );
          })}
        </Grid>
        <Grid
          alignContent={'center'}
          justifyContent={'center'}
          textAlign='center'
          md={4}
        >
          <Typography className={classes.footerTitle}>
            {footerContent.copyrights}
          </Typography>
        </Grid>
        <Grid textAlign={'right'} md={4}>
          <Typography className={classes.footerSmallText}>
            {footerContent.address1}
          </Typography>
          <Typography className={classes.footerSmallText}>
            {footerContent.address2}
          </Typography>
          <Typography className={classes.footerSmallText}>
            {`${footerContent.city} ${footerContent.pin}`}
          </Typography>
          <Typography className={classes.footerSmallText}>
            {footerContent.phone}
          </Typography>
          <Typography className={classes.footerSmallText}>
            {footerContent.email}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(FooterStyles)(FooterDiv);
