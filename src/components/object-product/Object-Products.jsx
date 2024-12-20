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

const ObjectProducts = ({ product, cart, setCart, removeProduct }) => {
	// const [active, setActive] = useState(false);

	const findProduct = cart.find(itemProduct => itemProduct.id === product.id);
	// console.log('product', findProduct);

	const addToCart = (product, cart, setCart) => {
		// console.log(product.name);
		const infoProductCart = { ...product, quantity: 1 };
		setCart([...cart, infoProductCart]);
	};

	const incrementProduct = (product, cart, setCart) => {
		const positiveProduct = cart.find(
			checkProduct => product.id === checkProduct.id
		);
		positiveProduct.quantity++;
		setCart([...cart]);
		// console.log('remove items', `${positiveProduct.quantity}`);
		// console.log('remove items', `${negativeProduct.price}`);
	};

	const decrementProduct = (product, cart, setCart) => {
		const negativeProduct = cart.find(
			checkProduct => product.id === checkProduct.id
		);
		negativeProduct.quantity--;
		if (negativeProduct.quantity === 0) {
			removeProduct(product, cart, setCart);
			// console.log('remove items', `${negativeProduct.quantity}`);
			// console.log('remove items', `${negativeProduct.price}`);
		} else {
			setCart([...cart]);
		}
	};
	return (
		<StyledDivProduct>
			<picture>
				<source media='(min-width: 1024px)' srcSet={product.images.desktop} />
				<source media='(min-width: 768px)' srcSet={product.images.tablet} />
				<source media='(min-width: 360px)' srcSet={product.images.mobile} />
				<StyledImg src={product.images.mobile} alt='' />
			</picture>

			{!findProduct && (
				<StyledAddToCart
					onClick={() => {
						addToCart(product, cart, setCart);
					}}
				>
					Add to cart
				</StyledAddToCart>
			)}

			{findProduct && (
				<>
					<StyledAddMoreProducts>
						<StyledImgDecrement
							src='/assets/images/icon-decrement-quantity.svg'
							onClick={() => {
								decrementProduct(product, cart, setCart);
							}}
						/>
						{findProduct.quantity}
						<StyledImgIncrement
							src='/assets/images/icon-increment-quantity.svg'
							onClick={() => {
								incrementProduct(product, cart, setCart);
							}}
						/>
					</StyledAddMoreProducts>
				</>
			)}

			<StyledProduct>{product.name}</StyledProduct>
			<StyledDescriptionProduct>
				{product.descriptionProduct}
			</StyledDescriptionProduct>
			<StyledPrice>€{product.price.toFixed(2)}</StyledPrice>
		</StyledDivProduct>
	);
};

export default ObjectProducts;

// const ObjectProducts = ({
// 	imgMobile,
// 	imgTablet,
// 	imgDesktop,
// 	name,
// 	descriptionProduct,
// 	price,
// 	addProducts
// }) => {
// 	const [active, setActive] = useState(false);

// 	return (
// 		<StyledDivProduct>
// 			<picture>
// 				<source media='(min-width: 1024px)' srcSet={imgDesktop} />
// 				<source media='(min-width: 768px)' srcSet={imgTablet} />
// 				<source media='(min-width: 360px)' srcSet={imgMobile} />
// 				<StyledImg media={imgMobile} alt='' />
// 			</picture>

// 			{!active && (
// 				<StyledAddToCart
// 					onClick={() => {
// 						setActive(!active);
// 						setQuantity(1);
// 					}}
// 				>
// 					Add to cart
// 				</StyledAddToCart>
// 			)}

// 			{active && quantity > 0 && (
// 				<>
// 					<StyledAddMoreProducts>
// 						<StyledImgDecrement
// 							src='/assets/images/icon-decrement-quantity.svg'
// 							onClick={decrementQuantity}
// 						/>
// 						{quantity}
// 						<StyledImgIncrement
// 							src='/assets/images/icon-increment-quantity.svg'
// 							onClick={incrementQuantity}
// 						/>
// 					</StyledAddMoreProducts>
// 				</>
// 			)}

// 			<StyledProduct>{name}</StyledProduct>
// 			<StyledDescriptionProduct>{descriptionProduct}</StyledDescriptionProduct>
// 			<StyledPrice>${price.toFixed(2)}</StyledPrice>
// 		</StyledDivProduct>
// 	);
// };

// export default ObjectProducts;
