import ObjectProducts from '../object-product/Object-Products';
import { StyledGrid } from './print-product.styles';

const PrintProducts = ({ filterProducts }) => {
	// console.log(filterProducts);
	return (
		<StyledGrid>
			{filterProducts.map(infoProduct => {
				return (
					<ObjectProducts
						key={infoProduct.id}
						imgMobile={infoProduct.images.mobile}
						imgTablet={infoProduct.images.tablet}
						imgDesktop={infoProduct.images.desktop}
						product={infoProduct.product}
						descriptionProduct={infoProduct.descriptionProduct}
						price={infoProduct.price}
					/>
				);
			})}
		</StyledGrid>
	);
};

export default PrintProducts;
