'use scrict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
	btnsOpenModal[i].addEventListener(
		'click',
		openModal
		//  function () {
		// 	modal.classList.remove('.hidden');
		// }
	);
}

for (let i = 0; i < btnCloseModal.length; i++) {
	btnCloseModal[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
	e.key === 'k' ? console.log('K was pressed') : console.log('What the fuck');
	if (e.key === 'Escape') {
		if (!modal.classList.contains('hidden')) {
			closeModal();
		}
	}
	// e.key === 'Escape' ? closeModal() : console.log('Nothing');
});
