import ObjectProducts from '../object-product/Object-Products';

const PrintProducts = ({ filterProducts }) => {
	// console.log(filterProducts);
	return (
		<>
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
		</>
	);
};

export default PrintProducts;
