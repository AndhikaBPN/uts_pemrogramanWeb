// Script sederhana: muncul alert saat user scroll ke bawah
window.addEventListener('scroll', function () {
    const y = window.scrollY;
    if (y > 200) {
        console.log("Kamu sedang menjelajah CV!");
    }
});
