import ObjectProducts from '../object-product/Object-Products';
import { StyledGrid } from './print-product.styles';

const PrintProducts = ({ filterProducts, cart, setCart, removeProduct }) => {
	// console.log(filterProducts);
	return (
		<StyledGrid>
			{filterProducts.map(infoProduct => {
				return (
					<ObjectProducts
						key={infoProduct.id}
						product={infoProduct}
						cart={cart}
						setCart={setCart}
						removeProduct={removeProduct}
					/>
				);
			})}
		</StyledGrid>
	);
};

export default PrintProducts;
