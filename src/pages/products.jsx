import { products } from 'config';
import { ProductsCards } from 'components';
import { Grid, Container } from '@material-ui/core';

const ProductPage = () => {
  return (
    <Container style={{ marginTop: '5rem', marginBottom: '5rem' }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid md={4} item key={product.id}>
            <ProductsCards
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.shortText}
              subtitle={product.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
