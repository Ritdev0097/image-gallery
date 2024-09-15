function swapImage(galleryImages){

    let main = document.getElementById('main');

    main.src = galleryImages.src;

    let gallery = document.querySelectorAll('.images');

    for (let i = 0; i < gallery.length; i++) {
        gallery[i].classList.remove('selected');
    }
    galleryImages.classList.add('selected');
}