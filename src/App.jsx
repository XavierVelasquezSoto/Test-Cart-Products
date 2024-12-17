import { StyledCardFlex } from './components/card-flex/card-flex.styles';
import PrintProducts from './components/print-products/Print-Products';
import ProductsFilter from './components/products/Products-Filter';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	// const [userAccount, setUserAccount] = useState(0);
	// console.log(userAccount);
	return (
		<div>
			<GlobalStyles />
			<header>
				<h1>Desserts</h1>
				<ProductsFilter />
			</header>
			<main>
				<StyledCardFlex>
					<PrintProducts />
				</StyledCardFlex>
			</main>
		</div>
	);
};

export default App;
