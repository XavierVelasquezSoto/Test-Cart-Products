import { useState } from 'react';
import {
	StyledDivProduct,
	StyledImg,
	StyledAddToCart,
	StyledImgDecrement,
	StyledImgIncrement,
	StyledAddMoreProducts,
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
	const [active, setActive] = useState(false);
	const [quantityProducts, setQuantityProducts] = useState([]);

	return (
		<StyledDivProduct>
			<picture>
				<source media='(min-width: 1024px)' srcSet={imgDesktop} />
				<source media='(min-width: 768px)' srcSet={imgTablet} />
				<source media='(min-width: 360px)' srcSet={imgMobile} />
				<StyledImg media={imgMobile} alt='' />
			</picture>

			{!active && (
				<StyledAddToCart onClick={() => setActive(!active)}>
					Add to cart
				</StyledAddToCart>
			)}

			{active && (
				<>
					<StyledAddMoreProducts>
						<StyledImgDecrement
							src='/assets/images/icon-decrement-quantity.svg'
							onClick={setQuantityProducts => {}}
						/>
						1
						<StyledImgIncrement src='/assets/images/icon-increment-quantity.svg' />
					</StyledAddMoreProducts>
				</>
			)}

			<StyledProduct>{product}</StyledProduct>
			<StyledDescriptionProduct>{descriptionProduct}</StyledDescriptionProduct>
			<StyledPrice>${price.toFixed(2)}</StyledPrice>
		</StyledDivProduct>
	);
};

export default ObjectProducts;
