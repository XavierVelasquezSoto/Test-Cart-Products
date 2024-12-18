import {
	StyledDivProduct,
	StyledImg,
	StyledProduct,
	StyledDescriptionProduct,
	StyledPrice
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
				<StyledImg media={imgMobile} alt='' />
			</picture>
			<StyledProduct>{product}</StyledProduct>
			<StyledDescriptionProduct>{descriptionProduct}</StyledDescriptionProduct>
			<StyledPrice>${price}</StyledPrice>
		</StyledDivProduct>
	);
};

export default ObjectProducts;
