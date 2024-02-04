//highlight current tab on the top menu
let navbarCollapse= document.querySelectorAll('#navbarCollapse ul.navbar-nav li a');
for (let link of navbarCollapse) {
    link.classList.remove('active');
    if (link.dataset.href === location.pathname) {
        link.classList.add('active');
    }
}

