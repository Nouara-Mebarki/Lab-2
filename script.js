const MENU_ITEMS = [
    { id: 1, name: "Piston Burger", price: 15 }, { id: 2, name: "Steam Tofu", price: 12 },
    { id: 3, name: "Bulldog Bowl", price: 14 }, { id: 4, name: "Gear Fries", price: 6 },
    { id: 5, name: "Oil Milkshake", price: 7 }, { id: 6, name: "Steam Brew", price: 4 },
    { id: 7, name: "Nutty Bolt", price: 5 }, { id: 8, name: "Steel Steak", price: 18 },
    { id: 9, name: "Copper Salad", price: 9 }, { id: 10, name: "Smoke Pie", price: 8 }
];

document.addEventListener('DOMContentLoaded', () => {
    // Rendu Menu
    const container = document.getElementById('menu-container');
    if (container) {
        const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
        container.innerHTML = `<table class="table"><tbody>${MENU_ITEMS.map(i => `<tr><td>${i.name}</td><td>${money.format(i.price)}</td></tr>`).join('')}</tbody></table>`;
    }

    // Validation
    const form = document.getElementById('reservation-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const alert = document.getElementById('alert-container');
            const name = document.getElementById('name').value;
            if (name.length < 1 || name.length > 20) {
                alert.innerHTML = '<div class="alert alert-danger">Name must be 1-20 chars.</div>';
            } else {
                console.log({ name: name, email: document.getElementById('email').value });
                alert.innerHTML = '<div class="alert alert-success">Reservation successful!</div>';
            }
        });
    }
});