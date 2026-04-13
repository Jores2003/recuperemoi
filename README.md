<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>RecupèreMoi - Donnez une seconde vie à vos objets</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <style>
    /* PALETTE OFFICIELLE RECUPÈREMOI
       Vert principal : #2F855A
       Vert foncé     : #276749
       Vert clair     : #C6F6D5
       Neutre fond    : #F3F7F4
       Noir doux      : #1F2D1F
    */

    body {
      font-family: "Segoe UI", Arial, sans-serif;
      margin: 0;
      padding: 0;
      background:#F3F7F4;
      color:#1F2D1F;
      line-height: 1.6;
    }

    /* MENU */
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

    /* HEADER */
    header {
      background:#2F855A;
      color:white;
      padding:50px 20px;
      text-align:center;
      border-bottom: 6px solid #276749;
    }

    header img {
      width:280px;
      margin-bottom:20px;
      filter: drop-shadow(0px 3px 4px rgba(0,0,0,0.25));
      animation: fadeLogo 1.2s ease-out forwards;
      opacity: 0;
    }

    @keyframes fadeLogo {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
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

    /* BOUTONS */
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

    /* CONTENU */
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
      transition:0.3s;
    }

    section:hover {
      transform: translateY(-3px);
      box-shadow:0 6px 14px rgba(0,0,0,0.12);
    }

    h2 {
      margin-top:0;
      color:#276749;
      font-size:1.6em;
    }

    /* FOOTER */
    footer {
      text-align:center;
      padding:25px;
      font-size:0.9em;
      color:#1F2D1F;
      margin-top:40px;
      background:#E8EEE9;
      border-top:4px solid #C6D5D0;
    }

    /* ANIMATIONS FADE-IN */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }

    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }

  </style>
</head>

<body>

<!-- MENU -->
<nav>
  <a href="index.html">Accueil</a>
  <a href="https://tally.so/r/ODJrVY" target="_blank">Déposer un objet</a>
  <a href="apropos.html">À propos</a>
  <a href="faq.html">FAQ</a>
  <a href="contact.html">Contact</a>
</nav>

<header>
  <img src="Logo-RecupereMoi.png" alt="Logo RecupèreMoi">
  <h1>RecupèreMoi</h1>
  <p class="subtitle">La plateforme qui connecte vos objets inutilisés aux Ressourceries et associations près de chez vous.</p>
  <a href="https://tally.so/r/ODJrVY" class="btn" target="_blank">Déposer un objet</a>
</header>

<div class="container">

  <section class="fade-in">
    <h2>❗ Le problème</h2>
    <p>Aujourd’hui, donner un objet, c’est souvent compliqué :</p>
    <ul>
      <li>On ne sait pas où aller</li>
      <li>On ne sait pas si la structure accepte l’objet</li>
      <li>On n’a pas toujours un véhicule</li>
      <li>Les Ressourceries manquent de visibilité</li>
    </ul>
  </section>

  <section class="fade-in">
    <h2>💡 La solution RecupèreMoi</h2>
    <p>Donner devient simple, en 3 étapes :</p>
    <ul>
      <li>Vous décrivez votre objet</li>
      <li>Vous indiquez votre ville</li>
      <li>Nous vous orientons vers la Ressourcerie la plus proche qui l’accepte</li>
    </ul>
    <p>C’est simple, rapide et gratuit.</p>
  </section>

  <section class="fade-in">
    <h2>🌱 Pourquoi RecupèreMoi est différent</h2>
    <ul>
      <li>Priorité aux Ressourceries et structures solidaires</li>
      <li>Bilan d’impact pour chaque don (CO₂ évité, ressources préservées)</li>
      <li>Mise en relation directe avec les acteurs du réemploi</li>
      <li>Soutien aux emplois d’insertion</li>
    </ul>
  </section>

  <section class="fade-in" id="don">
    <h2>📦 Déposer un objet</h2>
    <p>Pour déposer un objet, cliquez ici :</p>
    <a href="https://tally.so/r/ODJrVY" class="btn" target="_blank">Accéder au formulaire</a>
  </section>

  <section class="fade-in">
    <h2>ℹ️ À propos</h2>
    <p>RecupèreMoi est une initiative solidaire qui facilite le don d’objets et soutient les Ressourceries partout en France. Notre mission : réduire les déchets, encourager le réemploi et rendre le don accessible à tous.</p>
  </section>

</div>

<footer>
  <div style="max-width:900px; margin:auto; padding:20px;">
    <p><strong>RecupèreMoi</strong> – Donnez une seconde vie à vos objets.</p>

    <p>
      <a href="index.html">Accueil</a> •
      <a href="apropos.html">À propos</a> •
      <a href="faq.html">FAQ</a> •
      <a href="contact.html">Contact</a>
    </p>

    <p style="margin-top:15px; font-size:0.9em;">
      Projet solidaire de réemploi
