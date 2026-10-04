function showMenu(category) {

    let title = "";
    let items = "";

    /* =========================
       BREAKFAST
    ========================= */

    if (category === "breakfast") {

        title = "Breakfast";

        items = `

    <div class="food-item">


        <div class="food-info">
            <h3>Pohe</h3>
            <p>Fresh Maharashtrian pohe.</p>
        </div>

        <span>₹25</span>

    </div>


    <div class="food-item">

        

        <div class="food-info">
            <h3>Medu Wada Sambar</h3>
            <p>Soft medu wada served with hot sambar.</p>
        </div>

        <span>₹40</span>

    </div>


    <div class="food-item">

        

        <div class="food-info">
            <h3>Idli Sambar</h3>
            <p>Soft idlis served with delicious sambar.</p>
        </div>

        <span>₹40</span>

    </div>


    <div class="food-item">

        

        <div class="food-info">
            <h3>Masala Dosa</h3>
            <p>Crispy dosa with a tasty potato masala filling.</p>
        </div>

        <span>₹70</span>

    </div>


    <div class="food-item">

        

        <div class="food-info">
            <h3>Plain Dosa</h3>
            <p>Crispy and freshly prepared plain dosa.</p>
        </div>

        <span>₹50</span>

    </div>


    <div class="food-item">

       

        <div class="food-info">
            <h3>Loni Spoong Dosa</h3>
            <p>Delicious dosa prepared with butter.</p>
        </div>

        <span>₹50</span>

    </div>


    <!-- ITEMS WITHOUT PHOTOS YET -->

    <div class="food-item">
        <div class="food-info">
            <h3>Jambo Masala Dosa</h3>
            <p>Crispy dosa filled with delicious masala.</p>
        </div>
        <span>₹50</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Cut Dosa</h3>
            <p>Soft and tasty cut dosa.</p>
        </div>
        <span>₹50</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Kanda Uttapa</h3>
            <p>Uttapa topped with fresh onions.</p>
        </div>
        <span>₹50</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Uttapa</h3>
            <p>Freshly prepared soft uttapa.</p>
        </div>
        <span>₹45</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Cheese Uttapa</h3>
            <p>Soft uttapa topped with delicious cheese.</p>
        </div>
        <span>₹75</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Masala Maggi</h3>
            <p>Hot and tasty masala Maggi.</p>
        </div>
        <span>₹40</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Wada Sample</h3>
            <p>A tasty wada snack served fresh.</p>
        </div>
        <span>₹60</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Misal Pav</h3>
            <p>Spicy Maharashtrian misal served with pav.</p>
        </div>
        <span>₹70</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Sabudana Khichadi</h3>
            <p>Traditional Maharashtrian sabudana khichadi.</p>
        </div>
        <span>₹40</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Omelet</h3>
            <p>Freshly prepared egg omelet.</p>
        </div>
        <span>₹50</span>
    </div>


    <div class="food-item">
        <div class="food-info">
            <h3>Anda Bhurji</h3>
            <p>Spiced scrambled eggs prepared fresh.</p>
        </div>
        <span>₹60</span>
    </div>

`;
    }


    /* =========================
       SNACKS
    ========================= */

    else if (category === "snacks") {

        title = "Snacks";

        items = `

            <div class="food-item">
                <h3>Vada Pav</h3>
                <p>Classic Mumbai-style vada pav.</p>
                <span>₹15</span>
            </div>

            <div class="food-item">
                <h3>Samosa</h3>
                <p>Crispy and freshly prepared samosa.</p>
                <span>₹15</span>
            </div>

            <div class="food-item">
                <h3>Maggi</h3>
                <p>Hot and delicious Maggi.</p>
                <span>₹35</span>
            </div>

            <div class="food-item">
                <h3>Kanda Bhaji</h3>
                <p>Hot and crispy onion bhaji.</p>
                <span>₹50</span>
            </div>

            <div class="food-item">
                <h3>Sabudana Vada</h3>
                <p>Crispy Maharashtrian sabudana vada.</p>
                <span>₹50</span>
            </div>

        `;
    }


    /* =========================
       MAIN COURSE
    ========================= */

    else if (category === "main-course") {

        title = "Main Course";

        items = `

            <h3 class="menu-subtitle">Veg Main</h3>

            <div class="food-item">
                <h3>Dal Tadka</h3>
                <span>₹70</span>
            </div>

            <div class="food-item">
                <h3>Aambat God Aamti</h3>
                <span>₹80</span>
            </div>

            <div class="food-item">
                <h3>Baingan Masala</h3>
                <span>₹80</span>
            </div>

            <div class="food-item">
                <h3>Chole Masala</h3>
                <span>₹100</span>
            </div>

            <div class="food-item">
                <h3>Mutter Paneer</h3>
                <span>₹120</span>
            </div>

            <div class="food-item">
                <h3>Butter Paneer</h3>
                <span>₹140</span>
            </div>

            <div class="food-item">
                <h3>Veg Kolhapuri</h3>
                <span>₹120</span>
            </div>

            <div class="food-item">
                <h3>Mix Veg</h3>
                <span>₹150</span>
            </div>

            <div class="food-item">
                <h3>Kaju Masala</h3>
                <span>₹180</span>
            </div>


            <h3 class="menu-subtitle">Rice</h3>

            <div class="food-item">
                <h3>Spl. Chicken Biryani</h3>
                <span>₹150</span>
            </div>

            <div class="food-item">
                <h3>Spl. Chicken Biryani Full</h3>
                <span>₹220</span>
            </div>

            <div class="food-item">
                <h3>Mutton Biryani Half</h3>
                <span>₹260</span>
            </div>

            <div class="food-item">
                <h3>Mutton Biryani Full</h3>
                <span>₹350</span>
            </div>

            <div class="food-item">
                <h3>Sajuk Tupatil Chicken Biryani</h3>
                <span>₹250</span>
            </div>

            <div class="food-item">
                <h3>Sajuk Tupatil Mutton Biryani</h3>
                <span>₹350</span>
            </div>

            <div class="food-item">
                <h3>Veg Biryani</h3>
                <span>₹150</span>
            </div>

            <div class="food-item">
                <h3>Tava Pulao</h3>
                <span>₹120</span>
            </div>

            <div class="food-item">
                <h3>Jeera Rice</h3>
                <span>₹70 / ₹80</span>
            </div>

            <div class="food-item">
                <h3>Plain Rice</h3>
                <span>₹50 / ₹60</span>
            </div>


            <h3 class="menu-subtitle">Brunch</h3>

            <div class="food-item">
                <h3>Aloo Paratha</h3>
                <span>₹70</span>
            </div>

            <div class="food-item">
                <h3>Thali Pith</h3>
                <span>₹70</span>
            </div>

            <div class="food-item">
                <h3>Upwasache Thalipeeth</h3>
                <span>₹70</span>
            </div>

            <div class="food-item">
                <h3>Chole Bhature</h3>
                <span>₹70</span>
            </div>


            <h3 class="menu-subtitle">Egg Special</h3>

            <div class="food-item">
                <h3>Omelet</h3>
                <span>₹70</span>
            </div>

            <div class="food-item">
                <h3>Anda Bhurji</h3>
                <span>₹80</span>
            </div>

            <div class="food-item">
                <h3>Anda Rice</h3>
                <span>₹110</span>
            </div>

            <div class="food-item">
                <h3>Anda Biryani</h3>
                <span>₹150</span>
            </div>

        `;
    }


    /* =========================
       BEVERAGES
    ========================= */

    else if (category === "beverages") {

        title = "Beverages";

        items = `

            <div class="food-item">
                <h3>Tea</h3>
                <span>₹12</span>
            </div>

            <div class="food-item">
                <h3>Milk</h3>
                <span>₹20</span>
            </div>

            <div class="food-item">
                <h3>Special Tea</h3>
                <span>₹25</span>
            </div>

            <div class="food-item">
                <h3>Black Tea</h3>
                <span>₹20</span>
            </div>

            <div class="food-item">
                <h3>Without Sugar Tea</h3>
                <span>₹10</span>
            </div>

            <div class="food-item">
                <h3>Coffee</h3>
                <span>₹25</span>
            </div>

        `;
    }


    /* =========================
       DISPLAY POPUP
    ========================= */

    document.getElementById("popup-title").innerHTML = title;

    document.getElementById("popup-items").innerHTML = items;

    document.getElementById("menu-popup").style.display = "flex";
}


/* =========================
   CLOSE MENU
========================= */

function closeMenu() {

    document.getElementById("menu-popup").style.display = "none";

}