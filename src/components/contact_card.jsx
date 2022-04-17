import { Card, Grid } from '@mui/material';
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
          raised={true}
          ref={measureRef}
          sx={width < 760 ? { height: '90rem' } : { height: '40rem' }}
        >
          <Grid container>
            <Grid item sx={{ padding: '1rem' }} md={6} xs={12} sm={12}>
              <ContactForm />
            </Grid>
            <Grid item md={6} xs={12} sm={12}>
              <div className={classes.map}>
                <Map width={width} height={height} />
              </div>
            </Grid>
          </Grid>
        </Card>
      )}
    </Measure>
  );
};

export default withStyles(ContactCardStyle)(ContactCard);
