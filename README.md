<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>RecupèreMoi - Plateforme de dons gratuits</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <style>
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      margin: 0;
      padding: 0;
      background:#F3F7F4;
      color:#1F2D1F;
      line-height: 1.6;
    }

    nav {
      background:#276749;
      padding:12px 0;
      text-align:center;
      box-shadow:0 2px 6px rgba(0,0,0,0.15);
    }

    nav a {
      color:white;
      text-decoration:none;
      margin:0 18px;
      font-weight:600;
      font-size:1.05em;
      transition:0.2s;
    }

    nav a:hover {
      color:#C6F6D5;
    }

    header {
      background:#2F855A;
      color:white;
      padding:50px 20px;
      text-align:center;
      border-bottom: 6px solid #276749;
    }

    header img {
      width:260px;
      margin-bottom:20px;
    }

    h1 {
      font-size: 2.4em;
      margin: 0 0 10px;
      font-weight: 700;
    }

    p.subtitle {
      font-size: 1.2em;
      opacity: 0.95;
      margin-bottom: 25px;
    }

    .btn {
      display:inline-block;
      padding:12px 25px;
      background:white;
      color:#2F855A;
      text-decoration:none;
      border-radius:6px;
      font-weight:bold;
      font-size:1.1em;
      transition:0.2s;
      border:2px solid white;
    }

    .btn:hover {
      background:#C6F6D5;
      border-color:#C6F6D5;
      transform: scale(1.05);
    }

    .container {
      max-width:900px;
      margin:40px auto;
      padding:0 20px;
    }

    section {
      background:white;
      padding:25px;
      margin-bottom:25px;
      border-radius:10px;
      box-shadow:0 4px 10px rgba(0,0,0,0.06);
      border-left:6px solid #2F855A;
    }

    h2 {
      margin-top:0;
      color:#276749;
      font-size:1.6em;
    }

    footer {
      text-align:center;
      padding:25px;
      font-size:0.9em;
      color:#1F2D1F;
      margin-top:40px;
      background:#E8EEE9;
      border-top:4px solid #C6D5D0;
    }
  </style>
</head>

<body>

<!-- MENU -->
<nav>
  <a href="index.html">Accueil</a>
  <a href="deposer.html">Déposer un objet</a>
  <a href="dons.html">Voir les dons</a>
  <a href="apropos.html">À propos</a>
  <a href="contact.html">Contact</a>
</nav>

<header>
  <img src="Logo-RecupereMoi.png" alt="Logo RecupèreMoi">
  <h1>RecupèreMoi</h1>
  <p class="subtitle">La plateforme qui connecte les dons aux personnes et associations qui en ont besoin.</p>
  <a href="deposer.html" class="btn">Déposer un objet</a>
</header>

<div class="container">

  <section>
    <h2>🎁 Donnez facilement, récupérez librement</h2>
    <p>RecupèreMoi est une plateforme simple et gratuite où chacun peut :</p>
    <ul>
      <li>Déposer un objet qu’il souhaite donner</li>
      <li>Consulter les dons disponibles autour de lui</li>
      <li>Contacter directement le donneur par email</li>
      <li>Récupérer gratuitement les objets</li>
    </ul>
    <p>Aucune vente, aucun échange, aucun paiement. Juste du don.</p>
  </section>

  <section>
    <h2>🌱 Pour les particuliers et les associations</h2>
    <p>Les particuliers peuvent donner ou récupérer des objets.  
    Les associations, ressourceries et structures solidaires peuvent également consulter les dons et récupérer ce dont elles ont besoin pour leurs activités.</p>
  </section>

  <section>
    <h2>📦 Comment ça marche ?</h2>
    <ul>
      <li>Vous déposez un objet via un formulaire simple</li>
      <li>Votre don apparaît dans la page “Voir les dons”</li>
      <li>Les personnes intéressées vous contactent directement</li>
      <li>Vous convenez ensemble d’un lieu de récupération</li>
    </ul>
  </section>

</div>

<footer>
  <p><strong>RecupèreMoi</strong> – Plateforme de dons gratuits.</p>
  <p><a href="index.html">Accueil</a> • <a href="apropos.html">À propos</a></p>
  <p style="margin-top:15px;">© 2026 RecupèreMoi</p>
</footer>

</body>
</html>
