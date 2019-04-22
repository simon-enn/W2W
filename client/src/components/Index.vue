<template>
<div>
  <head>
    <title>Projekt WT</title>
    <meta charset="UTF-8">
    <!-- meta -->
    <meta name="description" content="What to Watch">
    <meta name="keywords" content="search, movie, TV-shows, TMDb, rating">
    <meta name="author" content="chw,sie,dak">
    <meta name="refresh" content="180">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <!-- Schriftart -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:500" rel="stylesheet">
    <!-- Schriftart header -->
  </head>
  <body>
    <header>
      <div id="Logo">
        <!-- Logo -->
        <router-link to="/" title="Need some help deciding what to watch?">
          <img src="../assets/logo_3_transparent.png" alt="Logo">
        </router-link>
      </div>
      <!-- Navigation -->
      <nav id="main-nav">
        <ul>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/profile">Profile</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Home ---------- -->
    <section id="Home">
      <hr>
      <h1>What to Watch?</h1>
      <p>
        <br>
        <br>Welcome to what to watch:
        <br>
        <br>
        <br>
        <br>
        <br>It is not always easy to answer that question...
        <br>After the following Questionaires you will get some recommendations
        <br>Just click on the Buttons dependend on if you want to watch a movie or a show
        <br>
        <br>
        <br>
        <br>
      </p>
      
      <router-link to="/question">
        <img id="buttons" src="../assets/b_movie.png" alt="Start">
      </router-link>
      <router-link to="/show">
        <img id="buttons" src="../assets/b_serie.png" alt="Start">
      </router-link>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </section>

    <!-- Footer / DB ---------- -->
    <section id="Footer">
      <div>
        <a href="https://www.themoviedb.org/" target="_blank">
          <img src="../assets/TMDB.png" alt="TMDB">
        </a>
      </div>
    </section>
  </body>
</div>
</template>



 
<style>
/* html, body */

html,
body {
  background: #597177;
  margin: 0;
  padding: 0;
  height: 100%;
  text-align: center;
}

a {
  /* Links-Nav ohne decoration */
  text-decoration: none;
}

li {
  /* Links-Nav ohne Punkte */
  list-style-type: none;
}

a,
p,
b {
  /* Schriftart */
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: black;
  padding-top: 8%;
  margin-bottom: 5px;
}
p {
  color: white;
  font-size: 20px;
}
b {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: white;
  padding-top: 1%;
  margin-bottom: 5px;
}
h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: white;
  padding-top: 8%;
  margin-bottom: 5px;
  font-size: 70px;
}
form,
h3 {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: white;
  padding-top: 0;
  margin-bottom: 0;
}
#buttons {
  padding: 20px;
}
hr {
  /* Linien GrÃ¶ÃŸe / Position / Farbe */
  width: 800px;
  height: 3px;
  background: white;
  border: 0;
  margin: 40px auto 40px auto;
}

#Logo,
li,
img,
footer {
  transition: all 300ms;
} /* Verzögerung */

/* HEADER */

header {
  /* Header-Leiste fixed */
  width: 100%;
  height: 95px;
  position: fixed;
  top: 0;
  left: 0;
  background: #dddddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

#Logo {
  /* Header-Leiste-Logo Position */
  width: 500px;
  float: left;
  margin: 18px 0 0 50px;
}

#Logo:hover {
  /* Header-Leiste-Logo ausgrauen */
  opacity: 0.7;
}

#Logo img {
  /* Header-Leiste-Logo GrÃ¶ÃŸe */
  width: 100%;
}

header nav {
  /* Header-Leiste-Nav Position */
  float: right;
  margin: 20px 50px 0 0;
}

header nav ul li {
  /* Header-Leiste-Nav Position 2 */
  float: left;
  margin-left: 25px;
}

header nav ul li a {
  /* Header-Leiste-Nav GrÃ¶ÃŸe */
  font-size: 20px;
}

header nav ul li:hover {
  /* Header-Leiste-Nav Animation */
  padding-top: 5px;
}

/* Home / Login  */

#Home {
  /* Hintergrundbild fixed */
  background: url(../assets/hintergrund.jpeg);
  background-position: center center;
  background-size: 100%;
  background-attachment: scroll;
}

#Home h1 {
  /* Ãœberschrift Position */
  margin: 120px auto 0 auto;
}

#Home img {
  /* Login-Button Kanten gerundet */
  border-radius: 10px;
}

#Home img:hover {
  /* Login-Button wird groesser */
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
}

/* Footer */

#Footer {
  width: 100%;
  height: 95px;
  position: fixed;
  background: #dddddd;
  bottom: 0;
  left: 0;
}

#Footer img {
  /* Footer-Logo-TMDB Groesse / Position */
  width: 85px;
  float: left;

  margin: 5px 5px 30px 50px;
}
</style>