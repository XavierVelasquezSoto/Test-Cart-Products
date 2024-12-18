import { useState } from 'react';
import { StyledCardFlex } from './components/card-flex/card-flex.styles';
import PrintProducts from './components/print-products/Print-Products';
import ProductsFilter from './components/products/Products-Filter';
import { PRODUCTS } from './constants/infoProducts';
import { GlobalStyles } from './styles/GlobalStyles';
import { StyledAppProductTitle, StyledYourCart } from './app.styles';

const App = () => {
	// const [userAccount, setUserAccount] = useState(0);
	// console.log(userAccount);

	const [filterProducts, setFilterProducts] = useState('');
	const [filterCart, setFilterCart] = useState([]);

	const selectProducts = sortProducts(PRODUCTS, filterProducts);

	// const addProduct = addToCart(PRODUCTS, filterCart);

	return (
		<div>
			<GlobalStyles />
			<header>
				<StyledAppProductTitle>Desserts</StyledAppProductTitle>
				<ProductsFilter
					buttonFilter={setFilterProducts}
					// console.log(event);
				/>
			</header>
			<main>
				<StyledCardFlex>
					<PrintProducts filterProducts={selectProducts} />
					<StyledYourCart>
						Your Cart (0)
						<div>
							<img
								src='public/assets/images/illustration-empty-cart.svg'
								alt=''
							/>
							<p>Your added items will appear here</p>
						</div>
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
			return a.product.localeCompare(b.product);
		} else if (searchProduct === 'Price') {
			return a.price - b.price;
		}
		return 0;
	});
	return sortCartProducts;
};

const addToCart = (product, price) => {
	cartContainer.push({ name: product, price: price, quantity: 1 });
};
