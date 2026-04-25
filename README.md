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
      <img src="IMG1.jpg" alt="Illustration 1" style="width:100%; border-radius:14px; box-shadow:0 6px 20px rgba(0,0,0,0.06);">
      <img src="IMG2.jpg" alt="Illustration 2" style="width:100%; border-radius:14px; box-shadow:0 6px 20px rgba(0,0,0,0.06);">
      <img src="IMG3.jpg" alt="Illustration 3" style="width:100%; border-radius:14px; box-shadow:0 6px 20px rgba(0,0,0,0.06);">
      <img src="IMG4.jpg" alt="Illustration 4" style="width:100%; border-radius:14px; box-shadow:0 6px 20px rgba(0,0,0,0.06);">
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>RécupèreMoi — Plateforme de dons gratuits</p>
    <p>© 2026 — Tous droits réservés</p>
  </footer>

</body>
</html>
