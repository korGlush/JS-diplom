const burger = () => {
    const navbarMenu = document.getElementById('navbar-collapse')

    document.addEventListener('click', (e) => {
        if ((e.target.closest('.navbar-toggle')) && (navbarMenu.classList.contains('collapse'))) {
            navbarMenu.classList.add('opened')
            navbarMenu.classList.remove('collapse')
        } else if ((e.target.closest('.navbar-toggle')) && (!navbarMenu.classList.contains('collapse'))) {
            navbarMenu.classList.remove('opened')
            navbarMenu.classList.add('collapse')
        }
    })
}

export default burger