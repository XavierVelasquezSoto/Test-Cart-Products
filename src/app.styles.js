import styled from 'styled-components';
import { FONTS } from './styles/fonts';
import { COLORS } from './styles/colors';

const StyledAppProductTitle = styled.h1`
	font-weight: ${FONTS.fontBold};
	font-size: ${FONTS.fontSizeXL};
	margin: 0;
	padding: 144px 185px 32px 14px;
`;

const StyledYourCart = styled.h1`
	color: ${COLORS.red};
	font-size: ${FONTS.fontSizeL};
	font-weight: ${FONTS.fontBold};
	margin: 0;
	padding: 24px 148px 24px 24px;
`;

export { StyledAppProductTitle, StyledYourCart };
