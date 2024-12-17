import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledButtonFilters = styled.button`
	color: ${props => {
		if (props.$active) {
			return COLORS.whiteButtonSelect;
		} else {
			return COLORS.redDark;
		}
	}};
	border-radius: 20px;
	height: 34px;
	width: 76px;
	background-color: ${props => {
		if (props.$active) {
			return COLORS.red;
		} else {
			return COLORS.bgWhite;
		}
	}};
	border: 1.5px solid ${COLORS.brownMedium};
`;

export { StyledButtonFilters };
