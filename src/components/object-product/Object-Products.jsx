import {
	StyledDivProduct,
	StyledImg,
	StyledText
} from './object-products.styles';

const ObjectProducts = ({
	imgMobile,
	imgTablet,
	imgDesktop,
	product,
	descriptionProduct,
	price
}) => {
	return (
		<StyledDivProduct>
			<picture>
				<source media='(min-width: 1024px)' srcSet={imgDesktop} />
				<source media='(min-width: 768px)' srcSet={imgTablet} />
				<source media='(min-width: 360px)' srcSet={imgMobile} />
				<StyledImg alt='' />
			</picture>
			<StyledText>{product}</StyledText>
			<p>{descriptionProduct}</p>
			<p>{price}</p>
		</StyledDivProduct>
	);
};

export default ObjectProducts;
