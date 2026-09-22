function showMenu(category) {

    let title = "";
    let items = "";

    if (category === "breakfast") {

        title = "Breakfast";

        items = `
            <div class="food-item">
                <h3>Pohe</h3>
                <p>Fresh Maharashtrian pohe.</p>
            </div>
        `;

    }

    else if (category === "snacks") {

        title = "Snacks";

        items = `
            <div class="food-item">
                <h3>Samosa</h3>
                <p>Crispy and freshly prepared samosa.</p>
            </div>

            <div class="food-item">
                <h3>Kanda Bhaji</h3>
                <p>Hot and crispy onion bhaji.</p>
            </div>
        `;

    }

    else if (category === "maincourse") {

        title = "Main Course";

        items = `
            <div class="food-item">
                <h3>Misal Pav</h3>
                <p>Spicy Maharashtrian misal served with pav.</p>
            </div>
        `;

    }

    else if (category === "beverages") {

        title = "Beverages";

        items = `
            <div class="food-item">
                <h3>Tea</h3>
                <p>Hot and refreshing tea.</p>
            </div>

            <div class="food-item">
                <h3>Cold Drinks</h3>
                <p>Refreshing chilled beverages.</p>
            </div>
        `;

    }

    document.getElementById("popup-title").innerHTML = title;
    document.getElementById("popup-items").innerHTML = items;
    document.getElementById("menu-popup").style.display = "flex";
}


function closeMenu() {

    document.getElementById("menu-popup").style.display = "none";

}