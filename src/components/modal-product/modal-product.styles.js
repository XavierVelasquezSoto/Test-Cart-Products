import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledModalContainer = styled.div`
	position: fixed;
	background-color: rgb(0, 0, 0, 0.5);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 95px;
`;

const StyledModal = styled.div`
	justify-content: center;
	background-color: ${COLORS.bgWhite};
	padding: 40px 24px 24px;
`;

const StyledModalTitle = styled.h1`
	font-size: ${FONTS.fontSizeXL};
	font-weight: ${FONTS.fontBold};
	color: ${COLORS.redDark};
	margin: 24px 0 8px;
`;

const StyledModalTextConfirmed = styled.p`
	margin: 0;
	font-size: ${FONTS.fontSizeM};
	font-weight: ${FONTS.fontRegular};
	color: ${COLORS.brownLight};
`;

const StyledModalFlex = styled.div`
	display: flex;
	align-items: center;
	margin: 32px 0;
	padding: 0 24px;
	background-color: #fcf8f6;
`;

const StyledModalImg = styled.img`
	height: 48px;
`;

const StyledPadding = styled.div`
	padding-left: 16px;
`;

const StyledModalP = styled.p`
	font-size: ${FONTS.fontSizeS};
	font-weight: ${FONTS.fontSemiBold};
	color: ${COLORS.redDark};
`;

const StyledModalSpan1 = styled.span`
	font-size: ${FONTS.fontSizeS};
	font-weight: ${FONTS.fontSemiBold};
	color: ${COLORS.red};
`;
const StyledModalSpan2 = styled.span`
	font-size: ${FONTS.fontSizeS};
	font-weight: ${FONTS.fontSemiBold};
	color: ${COLORS.brownLight};
	padding-left: 8px;
`;
const StyledModalSpan3 = styled.span`
	font-size: ${FONTS.fontSizeM};
	font-weight: ${FONTS.fontSemiBold};
	color: ${COLORS.redDark};
	margin-left: auto;
`;

const StyledModalButton = styled.button`
	height: 53px;
	width: 327px;
	border: none;
	border-radius: 30px;
	color: ${COLORS.bgWhite};
	background-color: ${COLORS.red};
	font-size: ${FONTS.fontSizeM};
	font-weight: ${FONTS.fontSemiBold};
`;
//

const StyledModalOrderTotalDiv = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 24px;
`;
const StyledModalOrderTotal1 = styled.span`
	color: ${COLORS.redDark};
	font-size: ${FONTS.fontSizeS};
	font-weight: ${FONTS.fontRegular};
`;
const StyledModalOrderTotal2 = styled.span`
	color: ${COLORS.redDark};
	font-size: ${FONTS.fontSizeL};
	font-weight: ${FONTS.fontBold};
`;

export {
	StyledModalContainer,
	StyledModal,
	StyledModalTitle,
	StyledModalTextConfirmed,
	StyledModalFlex,
	StyledModalImg,
	StyledPadding,
	StyledModalP,
	StyledModalSpan1,
	StyledModalSpan2,
	StyledModalSpan3,
	StyledModalButton,
	StyledModalOrderTotalDiv,
	StyledModalOrderTotal1,
	StyledModalOrderTotal2
};
