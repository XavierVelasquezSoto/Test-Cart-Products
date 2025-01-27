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
	padding: 24px 24px 24px 24px;
`;
///

const StyledDivYourCart = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 24px;
`;
const StyledImgYourCart = styled.img``;

const StyledTextYourCart = styled.p`
	font-size: ${FONTS.fontSizeS};
	font-weight: ${FONTS.fontSemiBold};
	color: ${COLORS.brownMedium};
`;

////

const StyledCartProductMainDiv = styled.div`
	display: flex;
	padding: 24px 24px 33px 24px;
	align-items: center;
`;
const StyledCartProductDiv = styled.div``;

const StyledCartProductName = styled.p`
	margin: 0;
	font-weight: ${FONTS.fontSemiBold};
	font-size: ${FONTS.fontSizeS};
	color: ${COLORS.redDark};
`;

const StyledCartProductQuantity = styled.span`
	margin: 0;
	font-weight: ${FONTS.fontSemiBold};
	font-size: ${FONTS.fontSizeS};
	color: ${COLORS.red};
`;
const StyledCartProductPrice = styled.span`
	margin: 0;
	font-weight: ${FONTS.fontRegular};
	font-size: ${FONTS.fontSizeS};
	color: ${COLORS.brownLight};
	margin-left: 8px;
`;
const StyledCartProductTotalPrice = styled.span`
	margin: 0;
	font-weight: ${FONTS.fontSemiBold};
	font-size: ${FONTS.fontSizeS};
	color: ${COLORS.brownMedium};
	margin-left: 8px;
`;
const StyledCartProductRemove = styled.img`
	margin-left: auto;
	padding: 3px;
	border: 2px solid;
	border-radius: 100px;
	height: 20px;
	color: ${COLORS.brownLight};
	cursor: pointer;
`;

///

const StyledTotalDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
`;

const StyledTotalSpan1 = styled.span`
	color: ${COLORS.redDark};
	font-size: ${FONTS.fontSizeS};
`;
const StyledTotalSpan2 = styled.span`
	color: ${COLORS.redDark};
	font-size: ${FONTS.fontSizeL};
`;

///

const StyledOrderDiv = styled.div`
	display: flex;
	margin-inline: auto;
	justify-content: center;
`;
const StyledOrderImg = styled.img``;
const StyledOrderSpan = styled.span`
	font-weight: ${FONTS.fontRegular};
	font-size: ${FONTS.fontSizeS};
	color: ${COLORS.redDark};
`;
const StyledOrderSpanNeutral = styled.span`
	font-weight: ${FONTS.fontSemiBold};
	font-size: ${FONTS.fontSizeS};
`;

const StyledOrderButton = styled.button`
	color: ${COLORS.bgWhite};
	background-color: ${COLORS.red};
	width: 279px;
	height: 53px;
	border-radius: 30px;
	border: none;
	margin: 24px;
	cursor: pointer;
`;

export {
	StyledAppProductTitle,
	StyledYourCart,
	StyledDivYourCart,
	StyledImgYourCart,
	StyledTextYourCart,
	StyledCartProductMainDiv,
	StyledCartProductDiv,
	StyledCartProductName,
	StyledCartProductQuantity,
	StyledCartProductPrice,
	StyledCartProductTotalPrice,
	StyledCartProductRemove,
	StyledTotalDiv,
	StyledTotalSpan1,
	StyledTotalSpan2,
	StyledOrderDiv,
	StyledOrderImg,
	StyledOrderSpan,
	StyledOrderSpanNeutral,
	StyledOrderButton
};
