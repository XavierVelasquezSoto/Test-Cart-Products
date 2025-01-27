import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledDivProduct = styled.div`
	padding: 26px 24px 24px;
	position: relative;
`;

const StyledImg = styled.img`
	border: 3px solid ${COLORS.red};
	border-radius: 20px;
	width: 100%;
	height: auto;
	margin-bottom: 38px;
`;

const StyledAddToCart = styled.button`
	position: absolute;
	background-image: url(/assets/images/icon-add-to-cart.svg);
	background-repeat: no-repeat;
	background-position: 17%;
	width: 160px;
	height: 44px;
	background-color: ${COLORS.bgWhite};
	border: 1px solid ${COLORS.brownLight};
	border-radius: 20px;
	font-weight: ${FONTS.fontSemiBold};
	font-size: ${FONTS.fontSizeS};
	padding-left: 30px;
	bottom: 105px;
	left: 108px;
	cursor: pointer;

	@media screen and (width>768px) {
		left: 48px;
	}
`;

const StyledImgDecrement = styled.img`
	border: 2px solid ${COLORS.bgWhite};
	border-radius: 50px;
	height: 20px;
	width: 20px;
	padding: 3.75px;
	cursor: pointer;
`;

const StyledImgIncrement = styled.img`
	border: 2px solid ${COLORS.bgWhite};
	border-radius: 50px;
	height: 20px;
	width: 20px;
	padding: 3.75px;
	cursor: pointer;
`;

const StyledAddMoreProducts = styled.button`
	position: absolute;
	width: 160px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: ${COLORS.red};
	color: ${COLORS.bgWhite};
	border: none;
	border-radius: 20px;
	font-weight: ${FONTS.fontSemiBold};
	font-size: ${FONTS.fontSizeS};
	bottom: 105px;
	left: 108px;
`;

const StyledPaddingProducts = styled.div`
	padding-top: 38px;
`;
const StyledProduct = styled.p`
	margin: 0;
	color: ${COLORS.brownLight};
	font-size: ${FONTS.fontSizeS};
	font-weight: ${FONTS.fontRegular};
	margin-bottom: 4px;
`;
const StyledDescriptionProduct = styled.p`
	margin: 0;
	color: ${COLORS.redDark};
	font-size: ${FONTS.fontSizeM};
	font-weight: ${FONTS.fontSemiBold};
	margin-bottom: 4px;
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
	StyledAddToCart,
	StyledImgDecrement,
	StyledImgIncrement,
	StyledAddMoreProducts,
	StyledProduct,
	StyledDescriptionProduct,
	StyledPrice
};
