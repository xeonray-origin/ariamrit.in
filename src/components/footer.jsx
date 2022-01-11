import { Container, Stack, Typography } from '@mui/material';
import { FooterStyles } from 'styles';
import { footerContent } from 'config';
import { withStyles } from '@mui/styles';

const FooterDiv = (props) => {
  const { classes } = props;
  return (
    <div className={classes.footer}>
      <Container>
        <Stack justifyContent={'space-between'} direction='row' spacing={5}>
          <Typography>{footerContent.website}</Typography>
          <Typography>{footerContent.website}</Typography>
          <Typography>{footerContent.website}</Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default withStyles(FooterStyles)(FooterDiv);
