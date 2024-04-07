function openModal(modal) {
    modal.showModal();
    document.body.classList.add('modal-open');
}

function closeModal(modal) {
    modal.close();
    document.body.classList.remove('modal-open');
}

export function setupModalEvents(listItem) {
    const modal = listItem.querySelector('dialog');
    const openModalButton = listItem.querySelector('.repo-image.open-modal');
    const closeModalButton = listItem.querySelector('.close-modal');

    openModalButton.addEventListener('click', () => {
        openModal(modal);
    });

    closeModalButton.addEventListener('click', () => {
        closeModal(modal);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal(modal);
        }
    });
}
