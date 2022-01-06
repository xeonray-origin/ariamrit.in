import { Container, Grid, Typography } from '@material-ui/core';
import { appConfig } from 'config';
import { products } from 'config';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductViewPage = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const result = products.find((product) => product.id === Number(id));
    setProduct(result);
  }, [id]);

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
    </Container>
  );
};

export default ProductViewPage;
