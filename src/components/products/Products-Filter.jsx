import { useState } from 'react';
import { StyledButtonFilters } from './products-filter.styles';

const ProductsFilter = () => {
	const [activeButton, setActiveButton] = useState('Default');

	const handleButtonClick = buttonName => {
		setActiveButton(buttonName); // Establece el botón activo
	};

	return (
		<>
			<StyledButtonFilters
				$isActive={activeButton === 'Default'}
				onClick={() => handleButtonClick('Default')}
			>
				Default
			</StyledButtonFilters>
			<StyledButtonFilters
				$isActive={activeButton === 'Name'}
				onClick={() => handleButtonClick('Name')}
			>
				Name
			</StyledButtonFilters>
			<StyledButtonFilters
				$isActive={activeButton === 'Price'}
				onClick={() => handleButtonClick('Price')}
			>
				Price
			</StyledButtonFilters>
		</>
	);
};

export default ProductsFilter;
