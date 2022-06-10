// Imports
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// Portal component
const Backdrop = ({ onClose }) => {
	return <BackdropWrapper onClick={ onClose }/>
};
const InnerModal = (props) => {
	return(
		<ModalWrapper>
			<div className="content">
				{ props.children }
			</div>
		</ModalWrapper>
	);
};

// Portal element
const portalElement = document.getElementById('overlays');

// Component
const Modal = ({ onClose, children }) => {

	// Return
	return(
		<React.Fragment>
			{
				ReactDOM.createPortal(<Backdrop onClose={ onClose }/>, portalElement)
			}
			{
				ReactDOM.createPortal(<InnerModal>{ children }</InnerModal>, portalElement)
			}
		</React.Fragment>	
	);

};

// Styled
const BackdropWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
	cursor: pointer;
`;
const ModalWrapper = styled.div`
	position: fixed;
	top: 20vh;
	left: 5%;
	width: 90%;
	background-color: white;
	padding: 1rem;
	border-radius: 14px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
	animation: slide-down 300ms ease-out forwards;
	@keyframes slide-down {
		from {
			opacity: 0;
			transform: translateY(-3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	@media only screen and (min-width:768px){
		width: 40rem;
		left: calc(50% - 20rem);
	}
`;

// Export
export default Modal;