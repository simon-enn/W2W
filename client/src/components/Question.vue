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
            <router-link to="/profile">Profile</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <section id="Home">
      <hr>
      <!-- FILME -------------------------------------------------------------------------------------------->
      <div id="container">
        <div id="header">
          <h1>MOVIES</h1>
        </div>
        <div id="content">
          <div id="questionaire">
            <h3>Please select ..........................</h3>

            <hr>

            <form @submit.prevent>
              <b>
                What is your favorite region?
                <br>
                <br>
              </b>

              <label for="europe">
                <input type="radio" id="europe" value="europe" v-model="region">
                Europe
              </label>
              <br>
              <label for="na">
                <input type="radio" id="na" value="na" v-model="region">
                NA
              </label>
              <br>
              <label for="Asia">
                <input type="radio" id="asia" value="asia" v-model="region">
                Asia
              </label>
              <br>

              <br>

              <br>

              <br>

              <hr>

              <b>
                Choose your favorite movie genre:
                <br>
                <br>
              </b>

              <label for="idc">idc</label>
              <input type="radio" id="idc" value="idc" v-model="genre" checked>
              <br>
              <label for="action">action</label>
              <input type="radio" id="action" value="action" v-model="genre">
              <br>
              <label for="comedy">comedy</label>
              <input type="radio" id="comedy" value="comedy" v-model="genre">
              <br>
              <label for="crime">crime</label>
              <input type="radio" id="crime" value="crime" v-model="genre">
              <br>
              <label for="drama">drama</label>
              <input type="radio" id="drama" value="drama" v-model="genre">
              <br>
              <label for="fantasy">fantasy</label>
              <input type="radio" id="fantasy" value="fantasy" v-model="genre">
              <br>
              <label for="horror">horror</label>
              <input type="radio" id="horror" value="horror" v-model="genre">
              <br>

              <hr>

              <b>
                Age restrictions?
                <br>
                <br>
              </b>

              <label for="No restrictions">No restrictions</label>
              <input type="radio" id="No restrictions" value="No restrictions" v-model="age">
              <br>
              <label for="6 years">6 years</label>
              <input type="radio" id="6 years" value="6 years" v-model="age">
              <br>
              <label for="12 years">12 years</label>
              <input type="radio" id="12 years" value="12 years" v-model="age">
              <br>
              <label for="16 years">16 years</label>
              <input type="radio" id="16 years" value="16 years" v-model="age">
              <br>
              <label for="Adult content only">Adult content only</label>
              <input type="radio" id="Adult content only" value="Adult content only" v-model="age">
              <br>
              <br>

              <hr>

              <b>
                How long can you stay awake?
                <br>
                <br>
              </b>

              <label for="idc">idc</label>
              <input type="radio" id="idc" value="idc" v-model="length">
              <br>
              <label for="90 min at max!">90 min at max!</label>
              <input type="radio" id="90 min at max!" value="90 min at max!" v-model="length">
              <br>
              <label for="90 min are nothing!">90 min are nothing!</label>
              <input
                type="radio"
                id="90 min are nothing!"
                value="90 min are nothing!"
                v-model="length"
              >
              <br>
              <br>

              <hr>

              <button v-on:click="questions">Submit your Choices</button>
              <br>
              {{result}}
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer / DB -------------------------------------------------------------------------------------->
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

<script>
export default {
  name: "Question",
  data() {
    return {
      region: "",
      genre: "",
      age: "",
      length: "",
      result: []
    };
  },
  methods: {
    questions() {
      this.result.push(
        { Region: this.region },
        { Genre: this.genre },
        { Age: this.age },
        { Length: this.length }
      );
      this.region = "";
      this.genre = "";
      this.age = "";
      this.length = "";
    }
  }
};
</script>




<style>
hr {
  background-color: black;
  color: black;
}
</style>

