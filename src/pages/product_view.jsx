import {
  Container,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { appConfig, products } from 'config';
import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

const ProductViewPage = (props) => {
  const { id } = useParams();

  const product = useMemo(
    () => products.find((product) => product.id === Number(id)),
    [id]
  );

  console.log(product);
  if (product) {
    return (
      <Container>
        <Grid
          container
          spacing={1}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item md={6} xs={12}>
            <img src={appConfig.appUrl + product.image} alt='not found' />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant='h2'>{product.title}</Typography>
            <Typography variant='h5'>{product.shortText}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item>
            <Typography variant='body2'>{product.longDescription}</Typography>
          </Grid>
        </Grid>

        <ImageList
          sx={{ width: 500, height: 450 }}
          variant='woven'
          cols={3}
          gap={8}
        >
          {product.gallery.map((item) => (
            <ImageListItem key={item}>
              <img
                src={process.env.PUBLIC_URL + item}
                srcSet={`${
                  process.env.PUBLIC_URL + item
                }?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={'not found'}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    );
  }
  return 'loading...';
};

export default ProductViewPage;
