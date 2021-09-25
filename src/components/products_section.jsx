import { withStyles, Container, Icon } from '@material-ui/core';
import { ProductsSectionStyles } from 'styles';
import { homePageContent } from 'config';
import cx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import DotIndicator from '@mui-treasury/components/indicator/dot';
import { useArrowDarkButtonStyles } from '@mui-treasury/styles/button/arrowDark';

const ProductsSection = (props) => {
  const { classes } = props;
  const data = homePageContent.productSection.data;
  const arrowStyles = useArrowDarkButtonStyles();
  const createStyle = (slideIndex, fineIndex) => {
    const diff = slideIndex - fineIndex;
    if (Math.abs(diff) > 1) return {};
    return {
      transform: `rotateY(${(-diff + 1) * 45}deg)`,
    };
  };
  // eslint-disable-next-line react/prop-types
  const renderElements = ({ index, onChangeIndex }) => (
    <>
      <Button
        className={cx(classes.arrow, classes.arrowLeft)}
        classes={arrowStyles}
        disabled={index === 0}
        onClick={() => onChangeIndex(index - 1)}
      >
        <Icon>keyboard_arrow_left</Icon>
      </Button>
      <Button
        className={cx(classes.arrow, classes.arrowRight)}
        classes={arrowStyles}
        disabled={index === data.length - 1}
        onClick={() => onChangeIndex(index + 1)}
      >
        <Icon>keyboard_arrow_right</Icon>
      </Button>
      <div className={classes.indicatorContainer}>
        {data.map(({ id }, i) => (
          <DotIndicator
            key={id}
            active={i === index}
            onClick={() => onChangeIndex(i)}
          />
        ))}
      </div>
    </>
  );
  const renderChildren = ({ injectStyle, fineIndex }) =>
    data.map(({ id, title, subtitle, image }, i) => (
      <div key={id} className={classes.slide}>
        <Typography
          noWrap
          className={cx(classes.text, classes.title)}
          style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}
        >
          {title}
        </Typography>
        <Typography
          noWrap
          className={cx(classes.text, classes.subtitle)}
          style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}
        >
          {subtitle}
        </Typography>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={process.env.PUBLIC_URL + image}
            alt={'slide'}
          />
        </div>
      </div>
    ));
  return (
    <Container>
      <div className={classes.root}>
        <ParallaxSlide renderElements={renderElements}>
          {renderChildren}
        </ParallaxSlide>
      </div>
    </Container>
  );
};

export default withStyles(ProductsSectionStyles)(ProductsSection);
