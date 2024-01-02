
document.addEventListener('DOMContentLoaded', function() {

    // sidenav

    var sidenav = document.querySelectorAll('.sidenav');
    var instancesSidenav = M.Sidenav.init(sidenav);


    // modal

    var modal = document.querySelectorAll('.modal');
    var instancesModal = M.Modal.init(modal);


    // materialboxed

    var portfolioImg = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(portfolioImg);
    
});