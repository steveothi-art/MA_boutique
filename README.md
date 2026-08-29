# 🛍️ Jennifer Store

Bienvenue sur **Jennifer Store**, un site e-commerce vitrine dédié à la vente de parfums et de produits de beauté.

Le site a été conçu avec une interface moderne, simple et responsive afin de permettre aux utilisateurs de consulter les produits, découvrir les différentes catégories et ajouter des articles à leur panier.

---

## 🌸 Présentation du projet

**Jennifer Store** est une boutique en ligne permettant de présenter différents produits de parfumerie et de beauté.

L'objectif du projet est de proposer une expérience utilisateur simple et agréable, aussi bien sur ordinateur que sur tablette et smartphone.

Le site fonctionne actuellement comme un **site e-commerce vitrine**, sans système de paiement en ligne ni base de données.

---

## ✨ Fonctionnalités

### 🏠 Accueil

* Présentation de la boutique
* Mise en avant de la nouvelle collection
* Boutons d'accès rapide à la boutique et aux catégories

### 🧴 Catégories

Le site propose plusieurs catégories de parfums :

* Parfums de luxe
* Parfums pour femmes
* Parfums pour hommes
* Parfums standards

Chaque catégorie possède une image et un bouton permettant d'accéder à la boutique.

### 🛒 Boutique

La boutique présente plusieurs produits avec :

* Image du produit
* Nom du produit
* Catégorie
* Description
* Prix
* Bouton **Ajouter au panier**

### 🛍️ Panier

Le panier permet de :

* Ajouter des produits
* Consulter les produits sélectionnés
* Voir le nombre d'articles
* Calculer le total
* Fermer et ouvrir le panier
* Préparer une commande

### 💬 Commande WhatsApp

Le bouton **Commander** permet de poursuivre la commande via WhatsApp.

Le client peut ainsi contacter directement la boutique pour finaliser sa commande.

### 📱 Responsive Design

Le site est conçu pour s'adapter à différentes tailles d'écran :

* 💻 Ordinateurs
* 💻 Ordinateurs portables
* 📱 Smartphones
* 📲 Tablettes

Les cartes produits et les images sont adaptées automatiquement grâce au CSS responsive.

### ☰ Menu mobile

Sur les petits écrans, un menu hamburger permet d'accéder facilement aux différentes sections du site :

* Accueil
* Catégories
* Promotions
* Contact
* Boutique

---

## 🛠️ Technologies utilisées

Le projet utilise principalement :

```text
HTML5
CSS3
JavaScript
```

### HTML5

Utilisé pour construire la structure du site :

* Header
* Navigation
* Sections
* Produits
* Panier
* Footer

### CSS3

Utilisé pour :

* Le design
* Les couleurs
* Les cartes produits
* Les animations
* Le responsive design
* La mise en page avec Flexbox et Grid

### JavaScript

Utilisé pour rendre le site interactif :

* Menu hamburger
* Ouverture du panier
* Fermeture du panier
* Ajout des produits au panier
* Gestion du nombre d'articles
* Calcul du total
* Gestion de la commande

---

## 📂 Structure du projet

Une structure possible du projet est :

```text
Jennifer-Store/
│
├── index.html
├── e-commerce2.0.css
├── e-commerce2.0.js
│
├── nos info.html
│
├── images/
│   ├── zara man.jpg
│   ├── perfume.jpg
│   ├── rococo.jpeg
│   ├── aventos.jpeg
│   ├── khamrah.jpeg
│   ├── tobacco vanille.jpeg
│   ├── invicto elixir.jpeg
│   └── ...
│
└── README.md
```

---

## 🖼️ Gestion des images

Les images des produits sont utilisées dans les cartes de la boutique.

Le CSS permet aux images de s'adapter automatiquement à la taille de leur conteneur.

Exemple :

```css
.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

Pour conserver une bonne qualité, il est recommandé d'utiliser des images de produits d'environ **800 × 800 px**.

---

## 🛒 Exemple d'ajout au panier

Chaque produit possède un bouton :

```html
<button class="add-cart" data-product="Rococo">
    Ajouter au Panier
</button>
```

L'attribut `data-product` permet à JavaScript d'identifier le produit sélectionné.

---

## 📱 Responsive Design

Le site utilise les Media Queries CSS pour adapter son contenu selon la largeur de l'écran.

Exemple :

```css
@media (max-width: 768px) {
    .products-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
```

Cela permet d'afficher les produits correctement sur les appareils mobiles.

---

## 📞 Contact

### WhatsApp

La boutique peut être contactée directement via WhatsApp :

**+225 07 02 11 56 61**

### Téléphone

**+225 07 02 11 56 61**

### Email

**[jennifer@gmail.com](mailto:jennifer@gmail.com)**

### TikTok

Le site propose également un accès au compte TikTok de la boutique.

---

## 👨‍💻 Développement

Le site **Jennifer Store** a été développé dans le but de créer une expérience de boutique en ligne moderne et accessible.

### Créateur

**Maewen's**

Site :

**maewens.com**

---

## 🚀 Installation

Aucune installation particulière n'est nécessaire.

### 1. Télécharger ou cloner le projet

Placez tous les fichiers du projet dans un même dossier.

### 2. Vérifier les fichiers

Assurez-vous que les fichiers suivants sont présents :

```text
index.html
e-commerce2.0.css
e-commerce2.0.js
```

ainsi que les images utilisées par le site.

### 3. Ouvrir le site

Ouvrez simplement :

```text
index.html
```

dans un navigateur moderne.

Pour le développement, **Visual Studio Code** avec l'extension **Live Server** peut également être utilisé.

---

## 🔮 Améliorations futures

Plusieurs fonctionnalités pourront être ajoutées dans les prochaines versions :

* 🔐 Création de comptes clients
* 🗄️ Base de données
* 💳 Paiement en ligne
* 📦 Gestion des commandes
* 👤 Espace client
* 🔎 Recherche de produits
* 🏷️ Gestion des promotions
* ❤️ Liste de favoris
* 📊 Tableau de bord administrateur
* 📧 Notifications de commandes
* 🚚 Suivi des livraisons

---

## 📌 Statut du projet

**Version actuelle :** `1.0`

**Type :** Site e-commerce vitrine

**Backend :** Aucun pour le moment

**Base de données :** Non utilisée actuellement

**Paiement en ligne :** Non disponible actuellement

---

## 📄 Licence

Projet développé pour **Jennifer Store**.

Toute reproduction, modification ou utilisation commerciale du projet doit être effectuée avec l'autorisation du propriétaire du projet.

---

### ❤️ Jennifer Store

**Votre style. Votre beauté.**

Merci de visiter **Jennifer Store**.
