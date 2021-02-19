<template>
  <div id="app">
    <div class="row">
      <div></div>
      <div>Redis projekt</div>
      <button class="row__basket" @click="showBasket">{{ basket.length }} Koszyk</button>
      <MainPopup :basket="basket" v-if="showPopup" @close="showPopup = false" />
    </div>
    <router-view @clicked="updateBasket" />
  </div>
</template>
<script>
import axios from "axios";
import MainPopup from "./components/popupComponents/MainPopup";
export default {
  async mounted() {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/basket/" + "basket__client100023"
      );
      response.data.basketList.forEach((item) => {
        this.basket.push(JSON.parse(item));
      });
    } catch (error) {
      console.log({ error });
    }
  },
  data() {
    return {
      showPopup: false,
      basket: [],
    };
  },
  methods: {
    showBasket() {
      console.log({ fromApp: this.basket });
      this.showPopup = !this.showPopup;
    },
    updateBasket(toBasket) {
      this.basket = toBasket;
    },
  },
  components: {
    MainPopup,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app div {
  margin: 40px 0;
  font-size: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__basket {
    font-family: "Montserrat", sans-serif;
    background-color: #2c85c5;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    height: 28px;
    font-size: 12px;
    border-radius: 5px;
    text-transform: uppercase;
    border: 1px solid #2c85c5;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #2c85c5;
    }
  }
}
</style>
