import ReactDOM from 'react-dom';

function Modal({ onClose, actionBar, children }) {
	return ReactDOM.createPortal(
		<div>
			<div
				className="fixed inset-0 bg-gray-300 opacity-80"
				onClick={onClose}
			></div>
			<div className="fixed inset-40 min-h-fit p-10 bg-white flex flex-col justify-between">
				<div className='min-h-[150px]'>
					{children}
				</div>
				{actionBar}
			</div>
		</div>,
		document.querySelector('.modal-container')
	);
}

export default Modal;
