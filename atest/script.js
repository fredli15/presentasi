document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    let menuBtn = document.querySelector('.hamburger');

    // Buat tombol hamburger jika tidak ada
    if (!menuBtn) {
        const hamburgerButton = document.createElement('button');
        hamburgerButton.className = 'hamburger';
        hamburgerButton.innerHTML = '<span></span><span></span><span></span>';

        const logo = document.querySelector('.logo');
        if (logo && logo.parentNode) {
            logo.parentNode.insertBefore(hamburgerButton, logo.nextSibling);
        }
        menuBtn = hamburgerButton; // Gunakan tombol yang baru dibuat
    }

    // Toggle menu
    menuBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // Mencegah klik pada tombol dianggap klik luar
        navContainer.classList.toggle('mobile-menu-active');
    });

    // Tutup menu saat klik di link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            navContainer.classList.remove('mobile-menu-active');
        });
    });

    // Tutup menu jika klik di luar, kecuali tombol hamburger
    document.addEventListener('click', function (event) {
        if (
            !navContainer.contains(event.target) &&
            event.target !== menuBtn // Pastikan klik bukan dari tombol hamburger
        ) {
            navContainer.classList.remove('mobile-menu-active');
        }
    });

    // Tutup menu jika layar diperbesar lebih dari 768px
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            navContainer.classList.remove('mobile-menu-active');
        }
    });
});
