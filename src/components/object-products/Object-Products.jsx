import { StyledDivProduct, StyledImg } from './Object-Products';

const ObjectProducts = ({ images }) => {
	return (
		<StyledDivProduct>
			<StyledImg src={images} />
		</StyledDivProduct>
	);
};

export default ObjectProducts;
