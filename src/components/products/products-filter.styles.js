import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledButtonFilters = styled.button`
	/* color: ${props => {
		if (props.$active) {
			return COLORS.whiteButtonSelect;
		} else {
			return COLORS.redDark;
		}
	}}; */
	color: ${props =>
		props.$active ? COLORS.whiteButtonSelect : COLORS.redDark};
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
	border: 1px solid ${COLORS.brownMedium};
	font-weight: ${FONTS.fontSemiBold};
	font-size: ${FONTS.fontSizeS};
	margin-left: 18px;
`;

export { StyledButtonFilters };
