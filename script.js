const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    let windowScroll = window.scrollY;
    if (windowScroll >= 60) {
        nav.classList.add('nav-scroll');
        nav.classList.add('shadow');
    } else if ( windowScroll <= 60) {
        nav.classList.remove('nav-scroll');
        nav.classList.remove('shadow');
    }
});

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1 

while (noAngkot == angkotBeroperasi) {
    console.log('angkot no ' + noAngkot + ' sedang beroperasi')
    noAngkot++;
}