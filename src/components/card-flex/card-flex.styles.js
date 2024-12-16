import styled from 'styled-components';

const StyledCardFlex = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (width > 1024px) {
		flex-direction: row;
	}
`;

export { StyledCardFlex };
