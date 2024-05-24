
function updatePriceValue() {
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    priceValue.textContent = priceRange.value;
    filterProducts();
}

function filterProducts(filterType) {
    const products = document.querySelectorAll('.product');
    const priceRange = document.getElementById('priceRange').value;

    products.forEach(product => {
        const productPrice = parseInt(product.getAttribute('data-price'));
        const isFavorite = product.getAttribute('data-favorite') === 'true';
        const isNew = product.getAttribute('data-new') === 'true';

        let showProduct = true;

        if (filterType === 'favorite' && !isFavorite) {
            showProduct = false;
        } else if (filterType === 'new' && !isNew) {
            showProduct = false;
        } else if (filterType === 'all') {
            showProduct = productPrice <= priceRange;
        } else if (productPrice > priceRange) {
            showProduct = false;
        }

        product.style.display = showProduct ? 'block' : 'none';
    });
}

function toggleFavorite(span) {
    const product = span.closest('.product');
    const isFavorite = product.getAttribute('data-favorite') === 'true';
    product.setAttribute('data-favorite', !isFavorite);
    span.classList.toggle('favorite', !isFavorite);
    span.innerHTML = !isFavorite ? '&#9734;' : '&#9733;';
}
