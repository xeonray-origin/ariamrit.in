import {
  Container,
  Grid,
  Icon,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { FooterStyles } from 'styles';
import { withStyles } from '@mui/styles';
const FooterDiv = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.footer}>
        {/* <Container> */}
        <Grid container alignItems={'top'}>
          <Grid item md={3} sm={12}>
            <List s dense={true}>
              <ListItem>
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
              </ListItem>
              <ListItem>
                <Typography variant='subtitle1' sx={{ fontSize: '.7rem' }}>
                  Promoting Efficiency
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  variant='body1'
                  sx={{ fontSize: '.8rem', paddingTop: '1rem' }}
                >
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.It has roots in a piece of. Contrary to popular belief,
                  Lorem Ipsum is not simply random text.It has roots in a piece
                  of.
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={2} sm={12}>
            <List dense={true}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        color: '#f1f1f2',
                        paddingTop: 0,
                      }}
                      variant='subtitle'
                    >
                      Products
                    </Typography>
                  }
                />
              </ListItem>
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
          <Grid md={2} sm={12}>
            <List dense={true}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant='subtitle'>Useful Links</Typography>
                  }
                />
              </ListItem>
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
          <Grid textAlign={'right'} item md={5} sm={12}>
            <List textAlign='right' dense={true}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography
                      variant='body1'
                      sx={{ fontSize: '1rem', textAlign: 'right' }}
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
                        fontSize: '1rem',
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
                      sx={{ fontSize: '1rem', textAlign: 'right' }}
                    >
                      9836768842
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        {/* </Container> */}
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
