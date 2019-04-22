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
        <router-link to="/" title="Care for some help in deciding?">
          <img src="../assets/logo_3_transparent.png" alt="Logo">
        </router-link>
      </div>

      <nav id="main-nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Home ------------>
    <section id="Home">
      <hr>
      <h1>My Profile</h1>
      <br>
      <br>UNDER CONSTRUCTION
      <br>
      <br>
      <img src="../assets/underconstr.png" alt="Under Construction">
      <br>
      <br>
      <br>
     
    </section>

    <!-- Footer / DB ------------>
    <section id="Footer">
      <div>
        <a href="https://www.themoviedb.org/">
          <img src="../assets/TMDB.png" alt="TMDB">
        </a>
      </div>
    </section>
  </body>
</div>
</template>

<style scoped>
#Home {
  font-size: 100px;
  color: white;
}
</style>
