const meunIcon = document.querySelector('#menu-icon')
const navLinks = document.querySelector('.nav-links')

meunIcon.onclick = () => {
    navLinks.classList.toggle('active')
}