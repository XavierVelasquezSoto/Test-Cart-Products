import { useState } from 'react';
import { StyledButtonFilters } from './products-filter.styles';

const ProductsFilter = () => {
	const [activeButton, setActiveButton] = useState('Default');

	const buttonClick = buttonName => {
		setActiveButton(buttonName);
	};

	return (
		<>
			<StyledButtonFilters
				$active={activeButton === 'Default'}
				onClick={() => buttonClick('Default')}
			>
				Default
			</StyledButtonFilters>
			<StyledButtonFilters
				$active={activeButton === 'Name'}
				onClick={() => buttonClick('Name')}
			>
				Name
			</StyledButtonFilters>
			<StyledButtonFilters
				$active={activeButton === 'Price'}
				onClick={() => buttonClick('Price')}
			>
				Price
			</StyledButtonFilters>
		</>
	);
};

export default ProductsFilter;
