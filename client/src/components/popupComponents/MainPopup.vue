<template>
  <div class="popup">
    <h2>Twój koszyk</h2>
    <div v-for="(item, index) in basket" :key="index" class="popup__item">
      <div>
        {{ item.Nazwa }}
      </div>
      <div>
        {{ item.Cena }}
      </div>
    </div>
    <button class="button" @click="$emit('close')">Zamknij koszyk</button>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {};
  },
  props: ["basket"],
  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  margin: 0 !important;
  font-size: 16px !important;
}
.popup {
  width: 300px;
  border-radius: 15px;
  padding: 10px;
  elevation: 5 !important;
  // border: 1px solid #2c85c5;
  box-shadow: 0 0 20px 10px #eee;
  background-color: whitesmoke;
  position: absolute;
  right: 22%;
  top: 15%;
  &__item {
    margin: 20px !important;
    display: flex;
    justify-content: space-between;
  }
}
.button {
  font-family: "Montserrat", sans-serif;
  background-color: #2c85c5;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  height: 28px;
  line-height: 28px;
  margin-top: 20px;
  padding: 0 10px;
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

  &:focus {
    outline: none;
  }
}
</style>
