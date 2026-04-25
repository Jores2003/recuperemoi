<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RécupèreMoi – Donnez une seconde vie à vos objets</title>

  <!-- Typographie moderne -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

  <style>
    :root {
      --primary: #2E7D32;
      --primary-light: #A5D6A7;
      --dark: #1E1E1E;
      --gray: #6E6E6E;
      --light: #F5F5F5;
      --white: #FFFFFF;
    }

    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: var(--light);
      color: var(--dark);
      line-height: 1.6;
    }

    /* NAVBAR */
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 40px;
      background: var(--white);
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    nav .logo {
      font-size: 22px;
      font-weight: 600;
      color: var(--primary);
    }

    nav ul {
      display: flex;
      gap: 24px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    nav ul li a {
      text-decoration: none;
      color: var(--dark);
      font-weight: 500;
    }

    nav ul li a:hover {
      color: var(--primary);
    }

    /* HERO */
    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 80px 40px;
      background: linear-gradient(135deg, #E8F5E9, #FFFFFF);
    }

    .hero-text {
      max-width: 520px;
    }

    .hero h1 {
      font-size: 42px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .hero p {
      font-size: 18px;
      color: var(--gray);
      margin-bottom: 28px;
    }

    .btn-primary {
      background: var(--primary);
      color: var(--white);
      padding: 14px 26px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      display: inline-block;
    }

    .btn-primary:hover {
      background: #256628;
    }

    .hero img {
      width: 420px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    /* SECTIONS */
    section {
      padding: 80px 40px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 50px;
      font-weight: 600;
    }

    /* CARDS */
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
    }

    .card {
      background: var(--white);
      padding: 28px;
      border-radius: 14px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.06);
      text-align: center;
    }

    .card h3 {
      margin-top: 12px;
      font-size: 20px;
    }

    .card p {
      color: var(--gray);
      font-size: 15px;
    }

    /* GALERIE — Effet hover */
    .gallery-img {
      width: 100%;
      border-radius: 14px;
      box-shadow: 0 6px 20px rgba(0,0,0,0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .gallery-img:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }

    /* FOOTER */
    footer {
      background: var(--dark);
      color: var(--white);
      padding: 40px;
      text-align: center;
      margin-top: 60px;
    }

    footer p {
      margin: 6px 0;
      color: #CCCCCC;
    }
  </style>
</head>

<body>

  <!-- NAVBAR -->
  <nav>
    <div class="logo">RécupèreMoi</div>
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="deposer.html">Déposer un objet</a></li>
      <li><a href="dons.html">Voir les dons</a></li>
      <li><a href="apropos.html">À propos</a></li>
      <li><a href="contact.html">Contact</a></li>

      <!-- BOUTON DÉCONNEXION -->
      <li><a href="#" id="logoutBtn" style="display:none;">Déconnexion</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <div class="hero">
    <div class="hero-text">
      <h1>Donnez une seconde vie à vos objets</h1>
      <p>RécupèreMoi connecte les dons aux personnes et associations qui en ont besoin. Gratuit, simple et solidaire.</p>
      <a href="dons.html" class="btn-primary">Voir les dons disponibles</a>
    </div>

    <img src="Logo-RecupereMoi.png" alt="Illustration RécupèreMoi">
  </div>

  <!-- POURQUOI -->
  <section>
    <h2>Pourquoi utiliser RécupèreMoi ?</h2>

    <div class="cards">
      <div class="card">
        <h3>🎁 Donnez facilement</h3>
        <p>Déposez un objet en quelques secondes. Aucune vente, aucun échange, juste du don.</p>
      </div>

      <div class="card">
        <h3>📍 Autour de vous</h3>
        <p>Consultez les dons disponibles près de chez vous grâce à la recherche intelligente.</p>
      </div>

      <div class="card">
        <h3>🤝 Pour tous</h3>
        <p>Particuliers, associations, ressourceries : tout le monde peut donner ou récupérer.</p>
      </div>

      <div class="card">
        <h3>🌱 Impact positif</h3>
        <p>Réduisez les déchets et favorisez le réemploi solidaire.</p>
      </div>
    </div>
  </section>

  <!-- COMMENT ÇA MARCHE -->
  <section>
    <h2>Comment ça marche ?</h2>

    <div class="cards">
      <div class="card">
        <h3>1. Déposez un objet</h3>
        <p>Ajoutez une photo, une description et votre ville.</p>
      </div>

      <div class="card">
        <h3>2. Il apparaît sur la plateforme</h3>
        <p>Les utilisateurs proches peuvent le voir immédiatement.</p>
      </div>

      <div class="card">
        <h3>3. Contact direct</h3>
        <p>Une personne intéressée vous contacte par email.</p>
      </div>

      <div class="card">
        <h3>4. Vous donnez</h3>
        <p>Simple, gratuit, solidaire.</p>
      </div>
    </div>
  </section>

  <!-- NOTRE VISION -->
  <section style="padding: 80px 40px; background: #F0F7F1;">
    <h2 style="text-align:center; font-size:32px; margin-bottom:40px; font-weight:600;">
      Notre vision : remettre le consommateur au cœur du réemploi
    </h2>

    <div style="max-width: 900px; margin:auto; font-size:17px; color:#333; line-height:1.7;">
      <p>
        Chaque année, des millions d’objets encore utilisables finissent dans la nature, sur les trottoirs ou en déchèterie. 
        Pas parce que les gens sont “irresponsables”, mais parce qu’ils sont souvent 
        <strong>à l’écart du système de gestion des déchets</strong>.
      </p>

      <p>
        Aujourd’hui, lorsqu’un consommateur ne veut plus d’un meuble, d’un vêtement ou d’un appareil, il n’a 
        <strong>aucune incitation</strong> à bien faire. Aucun avantage, aucune récompense, aucune solution simple. 
        Résultat : dépôts sauvages, gaspillage, pollution.
      </p>

      <p>
        RécupèreMoi veut changer cela.
      </p>

      <h3 style="margin-top:40px; font-size:24px; color:#2E7D32;">Un système où donner rapporte</h3>

      <p>
        Nous travaillons sur un futur système où chaque objet donné sur la plateforme permettra de gagner des 
        <strong>éco‑coins</strong>. Ces coins pourront être convertis en avantages, en réductions, ou même en argent.
      </p>

      <p>
        Ce financement proviendra des <strong>éco‑organismes</strong> dans le cadre de la Responsabilité Élargie du Producteur (REP), 
        un dispositif qui oblige les fabricants à financer la fin de vie des produits.
      </p>

      <p>
        Ainsi, au lieu de jeter, chaque consommateur deviendra un acteur du réemploi… et sera récompensé pour cela.
      </p>

      <h3 style="margin-top:40px; font-size:24px; color:#2E7D32;">Un impact réel sur la pollution</h3>

      <p>
        En donnant plutôt qu’en jetant, nous réduisons :
      </p>

      <ul style="margin-left:20px; line-height:1.7;">
        <li>les dépôts sauvages</li>
        <li>la production de nouveaux objets</li>
        <li>la quantité de déchets à traiter</li>
        <li>l’empreinte carbone liée à la fabrication</li>
      </ul>

      <p>
        RécupèreMoi n’est pas seulement une plateforme de dons : c’est un outil pour 
        <strong>transformer nos habitudes</strong> et construire une économie plus circulaire, plus locale et plus responsable.
      </p>

      <h3 style="margin-top:40px; font-size:24px; color:#2E7D32;">Une plateforme qui évolue avec vous</h3>

      <p>
        Dans les prochains mois, nous prévoyons d’intégrer :
      </p>

      <ul style="margin-left:20px; line-height:1.7;">
        <li>la création de comptes utilisateurs</li>
        <li>un tableau de bord des dons</li>
        <li>un système de points et de récompenses</li>
        <li>des partenariats avec les éco‑organismes</li>
        <li>des collaborations avec les collectivités</li>
      </ul>

      <p>
        Ensemble, nous pouvons réduire les déchets, encourager le réemploi et donner une seconde vie à des milliers d’objets.
      </p>
    </div>
  </section>

  <!-- SCHÉMA GRAPHIQUE : CYCLE DU RÉEMPLOI -->
  <section style="padding: 80px 40px; background: #FFFFFF;">
    <h2 style="text-align:center; font-size:32px; margin-bottom:50px; font-weight:600;">
      Le cycle du réemploi avec RécupèreMoi
    </h2>

    <div style="
      max-width: 1000px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 30px;
      text-align: center;
    ">

      <!-- CONSOMMATEUR -->
      <div style="
        background: #E8F5E9;
        padding: 30px;
        border-radius: 14px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.06);
      ">
        <h3 style="color:#2E7D32; font-size:22px;">👤 Consommateur</h3>
        <p style="color:#333; font-size:15px;">
          Donne ses objets au lieu de les jeter.  
          Gagne des <strong>éco‑coins</strong> pour chaque don.
        </p>
      </div>

      <!-- RÉCUPÈREMOI -->
      <div style="
        background: #FFFFFF;
        padding: 30px;
        border-radius: 14px;
        border: 2px solid #2E7D32;
        box-shadow: 0 6px 20px rgba(0,0,0,0.06);
      ">
        <h3 style="color:#2E7D32; font-size:22px;">♻️ RécupèreMoi</h3>
        <p style="color:#333; font-size:15px;">
          Met en relation, valorise les dons,  
          suit les objets et calcule l’impact.
        </p>
      </div>

      <!-- ASSOCIATIONS -->
      <div style="
        background: #E8F5E9;
        padding: 30px;
        border-radius: 14px;
        box-shadow: 0 6px 20px rgba(0,0,0,0.06);
      ">
        <h3 style="color:#2E7D32; font-size:22px;">🏛️ Associations</h3>
        <p style="color:#333; font-size:15px;">
          Récupèrent les objets utiles  
          et leur donnent une seconde vie.
        </p>
      </div>

      <!-- ÉCO-ORGANISMES -->
      <div style="
        background: #FFFFFF;
        padding: 30px;
        border-radius: 14px;
        border: 2px solid #2E7D32;
        box-shadow: 0 6px 20px rgba(0,0,0,0.06);
      ">
        <h3 style="color:#2E7D32; font-size:22px;">🏭 Éco‑organismes</h3>
        <p style="color:#333; font-size:15px;">
          Financement via la REP.  
          Soutiennent le réemploi et les éco‑coins.
        </p>
      </div>

    </div>

    <div style="text-align:center; margin-top:40px;">
      <p style="font-size:18px; color:#2E7D32; font-weight:600;">
        ⬅️ Le consommateur donne • RécupèreMoi valorise • Les associations récupèrent •  
        Les éco‑organismes financent ➡️
      </p>
    </div>
  </section>

  <!-- GALERIE -->
  <section>
    <h2>Notre communauté en images</h2>

    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 24px;
      max-width: 1100px;
      margin: auto;
    ">
      <img src="IMG1.jpg" alt="Illustration 1" class="gallery-img">
      <img src="IMG2.jpg" alt="Illustration 2" class="gallery-img">
      <img src="IMG3.jpg" alt="Illustration 3" class="gallery-img">
      <img src="IMG4.jpg" alt="Illustration 4" class="gallery-img">
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>RécupèreMoi — Plateforme de dons gratuits</p>
    <p>© 2026 — Tous droits réservés</p>
  </footer>

  <!-- Firebase -->
  <script type="module" src="firebase.js"></script>

  <!-- Script de déconnexion -->
  <script type="module">
    import { auth } from "./firebase.js";
    import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

    const logoutBtn = document.getElementById("logoutBtn");

    // Afficher le bouton uniquement si l'utilisateur est connecté
    onAuthStateChanged(auth, (user) => {
      if (user) {
        logoutBtn.style.display = "block";
      } else {
        logoutBtn.style.display = "none";
      }
    });

    // Déconnexion
    logoutBtn.addEventListener("click", async () => {
      await signOut(auth);
      alert("Vous êtes déconnecté.");
      window.location.href = "index.html";
    });
  </script>

</body>
</html>
