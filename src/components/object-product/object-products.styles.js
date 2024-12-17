import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledDivProduct = styled.div`
	padding: 26px 24px 24px;
`;

const StyledImg = styled.img`
	border: 2px solid ${COLORS.red};
	border-radius: 20px;
	width: 100%;
	height: auto;
`;

const StyledText = styled.p`
	color: red;
	margin: 0;
`;

export { StyledDivProduct, StyledImg, StyledText };
