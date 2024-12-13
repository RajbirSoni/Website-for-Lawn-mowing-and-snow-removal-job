document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const size = parseInt(document.getElementById('size').value);

    if (age < 18) {
        document.getElementById('quoteResult').textContent =
            "Sorry, you must be at least 18 years old to request a quote.";
        return;
    }

    let price;
    if (size <= 1000) {
        price = 50;
    } else if (size <= 5000) {
        price = 150;
    } else {
        price = 300;
    }

    document.getElementById('quoteResult').innerHTML =
        `Thank you, ${name}. Your estimated price is $${price}.`;
});
