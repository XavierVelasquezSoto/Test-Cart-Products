import { PRODUCTS } from '../../constants/infoProducts';
import ObjectProducts from './object-products/Object-Products';

const PrintProducts = () => {
	return (
		<>
			{PRODUCTS.map(infoProduct => {
				return (
					<ObjectProducts
						key={infoProduct.id}
						images={infoProduct.images.mobile}
					></ObjectProducts>
				);
			})}
		</>
	);
};

export default PrintProducts;
