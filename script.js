document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('data-form');
    const totalSales = document.getElementById('total-sales');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const product = document.getElementById('product-input').value;
        const sales = parseFloat(document.getElementById('sales-input').value);
        const city = document.getElementById('city-input').value;
        fetch('data.csv', {
            method: 'POST',
            body: `${product},${sales},${city}\n`,
            headers: {
                'Content-Type': 'text/plain',
            },
        })
            .then(() => {
                const total = Array.from(document.querySelectorAll('tr'))
                    .slice(1)
                    .reduce((acc, val) => acc + parseFloat(val.children[1].textContent), 0);
                totalSales.textContent = total.toFixed(2);
            });
    });
});