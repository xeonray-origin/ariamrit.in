import {
  Container,
  Grid,
  Icon,
  IconButton,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { FooterStyles } from 'styles';
import { footerContent } from 'config';
import { withStyles } from '@mui/styles';
const FooterDiv = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.footer}>
        <Container>
          <Grid container spacing={7}>
            <Grid item xs={3}>
              <IconButton
                disabled
                size={'small'}
                edge='start'
                aria-label='open drawer'
              >
                <img
                  height={20}
                  src={`${process.env.PUBLIC_URL}/resources/icons/logo_white.png`}
                  alt='not found'
                />
                <Typography
                  sx={{
                    color: '#f1f1f2',
                    paddingLeft: '1rem',
                  }}
                  variant='subtitle'
                >
                  AAEL
                </Typography>
              </IconButton>
              <Typography variant='subtitle1' sx={{ fontSize: '.7rem' }}>
                Promoting Efficiency
              </Typography>
              <Typography
                variant='body1'
                sx={{ fontSize: '.8rem', paddingTop: '1rem' }}
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.It has roots in a piece of. Contrary to popular belief,
                Lorem Ipsum is not simply random text.It has roots in a piece
                of.
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='subtitle'>Products</Typography>
              <List textAlign='center' dense={true}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant='body1' sx={{ fontSize: '.8rem' }}>
                        Cesspool Cleaner
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant='body1' sx={{ fontSize: '.8rem' }}>
                        Sky Jacker
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant='body1' sx={{ fontSize: '.8rem' }}>
                        WaterTanker
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <Typography variant='subtitle'>Useful Links</Typography>
              <List textAlign='center' dense={true}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant='body1' sx={{ fontSize: '.8rem' }}>
                        Cesspool Cleaner
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography variant='body1' sx={{ fontSize: '.8rem' }}>
                        Sky Jacker
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{
                          fontSize: '.8rem',
                          padding: '0!important',
                          margin: '0!important',
                          textDecoration: 'none',
                        }}
                      >
                        WaterTanker
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid textAlign={'right'} item xs={3}>
              <List textAlign='right' dense={true}>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{ fontSize: '.8rem', textAlign: 'right' }}
                      >
                        17G, Dover Terrace, Kolkata 700019, WB.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{
                          fontSize: '.8rem',
                          textAlign: 'right',
                        }}
                      >
                        ariamrit@gmail.com
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{ fontSize: '.8rem', textAlign: 'right' }}
                      >
                        9836768842
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footerDark}>
        <Container>
          <Grid sx={{ paddingTop: '.8rem' }} container alignItems={'center'}>
            <Grid item sm={4}></Grid>
            <Grid item sm={4}>
              <Typography className={classes.copy}>
                &copy; Ariamrit Engineering Limited
              </Typography>
            </Grid>
            <Grid className={classes.iconContainer} item sm={4}>
              <IconButton className={classes.footerSIcon} size='small'>
                <Icon>facebook</Icon>
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default withStyles(FooterStyles)(FooterDiv);
