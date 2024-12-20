import {
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
	StyledModalOrderTotalDiv,
	StyledModalOrderTotal1,
	StyledModalOrderTotal2,
	StyledModalButton
} from './modal-product.styles';

const Modal = ({ setOpenModal, cart }) => {
	// const modalOrderTotal =
	const sortModal = cart
		.reduce((acc, cart) => {
			return acc + cart.price * cart.quantity;
		}, 0)
		.toFixed(2);
	return cart.map(confirmedProduct => {
		// console.log(confirmedProduct);
		return (
			<StyledModalContainer key={confirmedProduct.id}>
				<StyledModal>
					<img src={'/assets/images/icon-order-confirmed.svg'} alt='' />
					<StyledModalTitle>Order Confirmed</StyledModalTitle>
					<StyledModalTextConfirmed>
						We hope you enjoy your food!
					</StyledModalTextConfirmed>
					<StyledModalFlex>
						<StyledModalImg src={confirmedProduct.images.thumbnail} alt='' />
						<StyledPadding>
							<StyledModalP>{confirmedProduct.name}</StyledModalP>
							<StyledModalSpan1>€{confirmedProduct.quantity}</StyledModalSpan1>
							<StyledModalSpan2>
								@ €{confirmedProduct.price.toFixed(2)}
							</StyledModalSpan2>
						</StyledPadding>
						<StyledModalSpan3>
							€{confirmedProduct.price * confirmedProduct.quantity}
						</StyledModalSpan3>
					</StyledModalFlex>
					<StyledModalOrderTotalDiv>
						<StyledModalOrderTotal1>Order total</StyledModalOrderTotal1>
						<StyledModalOrderTotal2>€{sortModal}</StyledModalOrderTotal2>
					</StyledModalOrderTotalDiv>
					<StyledModalButton onClick={() => setOpenModal(false)}>
						Start New Order
					</StyledModalButton>
				</StyledModal>
			</StyledModalContainer>
		);
	});
};

export default Modal;
