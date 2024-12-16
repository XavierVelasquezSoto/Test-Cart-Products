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

// <img src={USERS[userAccount].profileImage} alt='' />
// <h1>
// 	Name: {USERS[userAccount].title} {USERS[userAccount].name}
// </h1>
// <p>Username: {USERS[userAccount].username}</p>
// <p>Email: {USERS[userAccount].email}</p>
// <MyButton
// 	// disabled={!userAccount} // disabled={userAccount === 0}
// 	direction='Previous'
// 	USERS={USERS}
// 	userAccount={userAccount}
// 	setUserAccount={setUserAccount}
// >
// 	Previous
// </MyButton>
// <MyButton
// 	// disabled={userAccount === USERS.length - 1}  //disabled={userAccount <= USERS.length - 1}
// 	direction='Next'
// 	USERS={USERS}
// 	userAccount={userAccount}
// 	setUserAccount={setUserAccount}
// >
// 	Next
// </MyButton>

////

// <button
// 				// disabled={userAccount === 0}
// 				disabled={!userAccount}
// 				onClick={() => {
// 					if (userAccount > 0) {
// 						setUserAccount(userAccount - 1);
// 					}
// 				}}
// 			>
// 				Previous
// 			</button>
// 			<button
// 				disabled={userAccount >= USERS.length - 1}
// 				onClick={() => {
// 					if (userAccount < USERS.length - 1) {
// 						setUserAccount(userAccount + 1);
// 					}
// 				}}
// 			>
// 				Next
// 			</button>
