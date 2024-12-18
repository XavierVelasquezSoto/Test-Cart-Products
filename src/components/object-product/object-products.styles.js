import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledDivProduct = styled.div`
	padding: 26px 24px 24px;
`;

const StyledImg = styled.img`
	border: 3px solid ${COLORS.red};
	border-radius: 20px;
	width: 100%;
	height: auto;
`;

const StyledProduct = styled.p`
	margin: 0;
	color: ${COLORS.brownLight};
	font-size: ${FONTS.fontSizeS};
	font-weight: ${FONTS.fontRegular};
`;
const StyledDescriptionProduct = styled.p`
	margin: 0;
	color: ${COLORS.redDark};
	font-size: ${FONTS.fontSizeM};
	font-weight: ${FONTS.fontSemiBold};
`;
const StyledPrice = styled.p`
	margin: 0;
	color: ${COLORS.red};
	font-size: ${FONTS.fontSizeM};
	font-weight: ${FONTS.fontSemiBold};
`;

export {
	StyledDivProduct,
	StyledImg,
	StyledProduct,
	StyledDescriptionProduct,
	StyledPrice
};
