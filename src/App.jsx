import { useState } from 'react';
import { StyledCardFlex } from './components/card-flex/card-flex.styles';
import PrintProducts from './components/print-products/Print-Products';
import ProductsFilter from './components/products/Products-Filter';
import { PRODUCTS } from './constants/infoProducts';
import { GlobalStyles } from './styles/GlobalStyles';
import {
	StyledAppProductTitle,
	StyledYourCart,
	StyledDivYourCart,
	StyledImgYourCart,
	StyledTextYourCart,
	StyledCartProductMainDiv,
	StyledCartProductDiv,
	StyledCartProductName,
	StyledCartProductQuantity,
	StyledCartProductPrice,
	StyledCartProductTotalPrice,
	StyledCartProductRemove,
	StyledTotalDiv,
	StyledTotalSpan1,
	StyledTotalSpan2,
	StyledOrderDiv,
	StyledOrderImg,
	StyledOrderSpan,
	StyledOrderSpanNeutral,
	StyledOrderButton
} from './app.styles';
import Modal from './components/modal-product/Modal-Product';

const App = () => {
	const [filterProducts, setFilterProducts] = useState('');
	const selectProducts = sortProducts(PRODUCTS, filterProducts);

	//
	const [cart, setCart] = useState([]);
	// console.log('cart', cart);
	// const addToCart = ()=>{}
	const orderTotal = cart
		.reduce((acc, cartProduct) => {
			return acc + cartProduct.price * cartProduct.quantity;
		}, 0)
		.toFixed(2);

	const [openModal, setOpenModal] = useState(false);

	return (
		<div>
			<GlobalStyles />
			<header>
				<StyledAppProductTitle>Desserts</StyledAppProductTitle>
				<ProductsFilter buttonFilter={setFilterProducts} />
			</header>
			<main>
				<StyledCardFlex>
					<PrintProducts
						filterProducts={selectProducts}
						cart={cart}
						setCart={setCart}
						removeProduct={removeProduct}
					/>
					<StyledYourCart>
						Your Cart ({cart.length})
						{cart.length === 0 && (
							<StyledDivYourCart>
								<StyledImgYourCart
									src='/assets/images/illustration-empty-cart.svg'
									alt=''
								/>
								<StyledTextYourCart>
									Your added items will appear here
								</StyledTextYourCart>
							</StyledDivYourCart>
						)}
						{cart &&
							cart.map(cartProduct => {
								const totalProduct = (
									cartProduct.price * cartProduct.quantity
								).toFixed(2);
								return (
									<StyledCartProductMainDiv key={cartProduct.id}>
										<StyledCartProductDiv>
											<StyledCartProductName>
												{cartProduct.name}
											</StyledCartProductName>
											<StyledCartProductQuantity>
												{cartProduct.quantity}x
											</StyledCartProductQuantity>
											<StyledCartProductPrice>
												@ €{cartProduct.price.toFixed(2)}
											</StyledCartProductPrice>
											<StyledCartProductTotalPrice>
												€{totalProduct}
											</StyledCartProductTotalPrice>
										</StyledCartProductDiv>
										<StyledCartProductRemove
											src='/assets/images/icon-remove-item.svg'
											alt=''
											onClick={() => removeProduct(cartProduct, cart, setCart)}
										/>
									</StyledCartProductMainDiv>
								);
							})}
						{cart.length > 0 && (
							<>
								<StyledTotalDiv>
									<StyledTotalSpan1>Order Total: </StyledTotalSpan1>
									<StyledTotalSpan2>€{orderTotal}</StyledTotalSpan2>
								</StyledTotalDiv>
								<StyledOrderDiv>
									<StyledOrderImg
										src='public/assets/images/icon-carbon-neutral.svg'
										alt=''
									/>
									<StyledOrderSpan>
										This is a
										<StyledOrderSpanNeutral>
											carbon-neutral
										</StyledOrderSpanNeutral>
										delivery
									</StyledOrderSpan>
								</StyledOrderDiv>
								<StyledOrderButton onClick={() => setOpenModal(true)}>
									Confirm Order
								</StyledOrderButton>
							</>
						)}
						{openModal && <Modal setOpenModal={setOpenModal} cart={cart} />}
					</StyledYourCart>
				</StyledCardFlex>
			</main>
		</div>
	);
};

export default App;

const sortProducts = (product, searchProduct) => {
	if (!searchProduct) return product;

	const sortCartProducts = [...product].sort((a, b) => {
		if (searchProduct === 'Name') {
			return a.name.localeCompare(b.name);
		} else if (searchProduct === 'Price') {
			return a.price - b.price;
		}
		return 0;
	});
	return sortCartProducts;
};

const removeProduct = (product, cart, setCart) => {
	const filterCart = cart.filter(itemProduct => itemProduct.id !== product.id);
	setCart(filterCart);
};

/* <button onClick={e => addToCart(e.target.value)}>test product</button> */
