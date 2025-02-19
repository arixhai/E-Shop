// Cart dropdown

function toggleCart() {
    const cartDropdown = document.querySelector('.cart-dropdown');
    cartDropdown.classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.cart-icon') && !event.target.closest('.cart-dropdown')) {
        const cartDropdowns = document.getElementsByClassName('cart-dropdown');
        for (let i = 0; i < cartDropdowns.length; i++) {
            const openDropdown = cartDropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}