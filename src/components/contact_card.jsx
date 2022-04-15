import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  Box,
} from '@mui/material';
import { Map, ContactForm } from 'components';
import Measure from 'react-measure';
import { useState } from 'react';
import { ContactCardStyle } from 'styles';
import { withStyles } from '@mui/styles';

const ContactCard = (props) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const { classes } = props;

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setHeight(contentRect.bounds.height);
        setWidth(contentRect.bounds.width);
      }}
    >
      {({ measureRef }) => (
        <Card
          ref={measureRef}
          sx={{ width: '100%', height: '40rem', borderRadius: '.5rem' }}
        >
          <Grid container>
            <Grid item sx={{ padding: '1rem' }} md={6} xs={12} sm={12}>
              <ContactForm />
            </Grid>
            <Grid item md={6} xs={12} sm={12}>
              <div
                className={classes.map}
                style={{
                  position: 'relative',
                  width: '100%',
                  heightt: 'auto',
                }}
              >
                <Map height={height} />
              </div>
            </Grid>
          </Grid>
        </Card>
      )}
    </Measure>
  );
};

export default withStyles(ContactCardStyle)(ContactCard);
