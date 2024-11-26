document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-button');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    let currentIndex = -1;

    function openModal(index) {
        modal.style.display = 'flex';
        modalImg.src = galleryImages[index].src;
        currentIndex = index;
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            openModal(index);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        openModal(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        openModal(currentIndex);
    });
});
