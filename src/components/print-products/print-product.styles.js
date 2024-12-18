import styled from 'styled-components';

const StyledGrid = styled.div`
	@media screen and (width > 768px) {
		display: grid;
		grid-template-columns: repeat(3, 250px);
	}
`;

export { StyledGrid };
