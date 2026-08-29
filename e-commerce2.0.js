// ==========================================
// MENU HAMBURGER
// ==========================================

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.getElementById("mobileMenu");

console.log("Hamburger :", hamburger);
console.log("Mobile menu :", mobileMenu);

if (hamburger && mobileMenu) {

    hamburger.addEventListener("click", function () {

        hamburger.classList.toggle("active");

        mobileMenu.classList.toggle("active");

    });

}

// JENNIFER STORE - PANIER 
 // OUVRIR LE PANIER

 
 document.addEventListener("DOMContentLoaded", function () {

    const cartPanel = document.getElementById("cartPanel");
    const openCart = document.getElementById("openCart");
    const closeCart = document.getElementById("closecart");
   

openCart.addEventListener("click", function () {
    cartPanel.classList.add("active");
});

    if (openCart) {
        openCart.addEventListener("click", function () {
            cartPanel.classList.add("active");
        });
    }

    // FERMER LE PANIER
    if (closeCart) {
        closeCart.addEventListener("click", function () {
            cartPanel.classList.remove("active");
        });
    }

});

// ------------------------------------------------------
// ELEMENTS HTML (variables)
// ------------------------------------------------------

const cartPanel = document.getElementById("cartPanel");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("close-cart");


// Bouton panier dans le header
const cartButton = document.querySelector(
    ".header-action .fa-bag-shopping"
);


// Compteur du panier
const cartCount = document.getElementById("cartcount");


// Boutons "Ajouter au panier"
const addCartButtons = document.querySelectorAll(".add-cart");


// Bouton passer commande
const checkoutButton = document.querySelector(".checkout");


// Tableau du panier
let cart = [];



// ======================================================
// RECUPERER LES INFORMATIONS D'UN PRODUIT
// ======================================================

function getProductFromButton(button) {

    // Nom du produit
    const name = button.dataset.product;


    // On récupère la carte du produit
    const productCard = button.closest(".product-cart");


    if (!productCard) {
        console.error("Carte produit introuvable");
        return null;
    }


    // Récupérer le prix
    const priceElement = productCard.querySelector(
        ".price strong"
    );


    if (!priceElement) {
        console.error(
            "Prix introuvable pour : " + name
        );

        return null;
    }



    const price = parseInt(
        priceElement.textContent
            .replace(/[^\d]/g, ""),
        10
    );


    // ID unique basé sur le nom
    const id = name
        .toLowerCase()
        .replace(/\s+/g, "-");


    return {
        id: id,
        name: name,
        price: price,
        quantity: 1
    };
}



// ======================================================
// AJOUTER AU PANIER
// ======================================================

function addToCart(product) {

    if (!product) {
        return;
    }

    const existingProduct = cart.find(
        item => item.id === product.id
    );


    if (existingProduct) {


        existingProduct.quantity++;

    } else {

        cart.push(product);
    }


   
    updateCart();

    openCart();
}



// ======================================================
// OUVRIR LE PANIER
// ======================================================

function openCart() {

    cartPanel.classList.add("active");
}



// ======================================================
// FERMER LE PANIER
// ======================================================

function closeCartPanel() {

    cartPanel.classList.remove("active");
}


if (closeCart) {

    closeCart.addEventListener(
        "click",
        closeCartPanel
    );
}



// ======================================================
// BOUTON PANIER DU HEADER
// ======================================================

if (cartButton) {

    cartButton.parentElement.addEventListener(
        "click",
        openCart
    );
}



// ======================================================
// BOUTONS AJOUTER AU PANIER
// ======================================================

addCartButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const product =
                getProductFromButton(this);

            addToCart(product);

        }
    );

});



// ======================================================
// AFFICHER LE PANIER
// ======================================================

function updateCart() {

    // Vider l'affichage
    cartItems.innerHTML = "";


    // Panier vide
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Votre panier est vide.
            </p>
        `;

        cartTotal.textContent = "0 FCFA";

        cartCount.textContent = "0";

        return;
    }


    // Afficher chaque produit
    cart.forEach(product => {

        const productElement =
            document.createElement("div");


        productElement.classList.add(
            "cart-product"
        );


        productElement.innerHTML = `

            <div class="cart-product-info">

                <h4>${product.name}</h4>

                <p>
                    ${formatPrice(product.price)}
                    FCFA
                </p>

                <div class="cart-quantity">

                    <button
                        type="button"
                        class="quantity-minus">
                        −
                    </button>

                    <span>
                        ${product.quantity}
                    </span>

                    <button
                        type="button"
                        class="quantity-plus">
                        +
                    </button>

                </div>

            </div>


            <button
                type="button"
                class="delete-product">

                <img class="ima" src="corbeille.jpeg" alt="corbeille">

            </button>

        `;


        // Bouton +
        const plusButton =
            productElement.querySelector(
                ".quantity-plus"
            );


        plusButton.addEventListener(
            "click",
            () => {

                product.quantity++;

                updateCart();

            }
        );


        // Bouton -
        const minusButton =
            productElement.querySelector(
                ".quantity-minus"
            );


        minusButton.addEventListener(
            "click",
            () => {

                product.quantity--;


                if (product.quantity <= 0) {

                    cart = cart.filter(
                        item => item.id !== product.id
                    );
                }


                updateCart();

            }
        );


        // Bouton supprimer
        const deleteButton =
            productElement.querySelector(
                ".delete-product"
            );


        deleteButton.addEventListener(
            "click",
            () => {

                cart = cart.filter(
                    item => item.id !== product.id
                );


                updateCart();

            }
        );


        cartItems.appendChild(
            productElement
        );

    });


    // Calcul du total
    calculateTotal();


    // Mise à jour du compteur
    updateCartCount();

}



// ======================================================
// CALCULER LE TOTAL
// ======================================================

function calculateTotal() {

    let total = 0;


    cart.forEach(product => {

        total +=
            product.price *
            product.quantity;

    });


    cartTotal.textContent =
        formatPrice(total) + " FCFA";
}



// ======================================================
// COMPTEUR DU PANIER
// ======================================================

function updateCartCount() {

    let count = 0;


    cart.forEach(product => {

        count += product.quantity;

    });


    cartCount.textContent = count;
}



// ======================================================
// FORMATAGE DES PRIX
// ======================================================

function formatPrice(price) {

    return new Intl.NumberFormat(
        "fr-FR"
    ).format(price);

}



// ======================================================
// PASSER COMMANDE
// ======================================================

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function () {

            if (cart.length === 0) {

                alert(
                    "Votre panier est vide."
                );

                return;
            }


            // Construire le message WhatsApp
            let message =
                "Bonjour Jennifer Store !%0A%0A" +
                "Je souhaite passer la commande suivante :%0A%0A";


            cart.forEach(product => {

                const sousTotal =
                    product.price *
                    product.quantity;


                message +=
                    "• " +
                    product.name +
                    " x" +
                    product.quantity +
                    " = " +
                    formatPrice(sousTotal) +
                    " FCFA%0A";

            });


            // Calcul du total
            let total = cart.reduce(
                (sum, product) =>
                    sum +
                    product.price *
                    product.quantity,
                0
            );


            message +=
                "%0A💰 Total : " +
                formatPrice(total) +
                " FCFA";


            // Numéro WhatsApp de Jennifer Store
            const whatsappNumber =
                "2250576293783";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                message;


            // Ouvrir WhatsApp
            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );
}



// ======================================================
// INITIALISATION
// ======================================================

updateCart();

// ======================================================
// SUPPRIMER DU PANIER
// ======================================================

cartItems.innerHTML = cart.map.apply((product, index) => `
    <div class="cart-product">
        <div class="cart-procut-info">
            <h4> ${product.name}<h4/>
            
            <p> ${product.price.totalString("fr-FR")} FCFA<p/>
            
            <div class="decreaseQuantity(${index})">-</button>
                <span> ${product.quantity}</span>
                    <button onclick="increaseQuantity(${index})">
                    
                    
                    
                <button class="delete-product" 
                    onclick="removeFromCart(${index})" 
                    title="Supprimer cet article" 
                    type="button">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
`).join("");

function removeFromCart(index) {
    cart.splice(index, 1);

    renderCart();
}

