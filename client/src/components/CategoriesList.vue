<template>
  <div class="list">
    <ul class="list__inner">
      <li class="list__item">
        <span class="list__title">Grafika</span>
        <router-link to="/gpu" class="list__button">
         + Wybierz grafikę
        </router-link>
      </li>
      <li class="list__item">
        <span class="list__title">Procesor</span>
        <router-link to="/cpu" class="list__button">
       + Wybierz procesor</router-link>
      </li>      
      <li class="list__item">
        <span class="list__title">RAM</span>
        <router-link to="/ram" class="list__button">
       + Wybierz pamięć RAM
        </router-link>
      </li>      
      <li class="list__item">
        <span class="list__title">Wentylator</span>
        <router-link to="/fan" class="list__button">
       + Wybierz wentylator
        </router-link>
      </li>      
      <li class="list__item">
        <span class="list__title">Płyta główna</span>
        <router-link to="/mobo" class="list__button">
       + Wybierz płytę główną</router-link>
      </li>
      <li class="list__item">
        <span class="list__title">Dysk SSD</span>
        <router-link to="/ssd" class="list__button">
       + Wybierz dysk SSD</router-link>
      </li>
      <li class="list__item">
        <span class="list__title">Zasilacz</span>
        <router-link to="/psu" class="list__button">
       + Wybierz zasilacz</router-link>
      </li>
      <li class="list__item">
        <span class="list__title">Obudowa</span>
        <router-link to="/case" class="list__button">
       + Wybierz obudowę</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import ItemsService from '../services/Service';

export default {
  name: "CategoriesList",
  data(){
    return{
      results: [],
      searchValue: '',
    }
  },
  methods: {
    async getItems(value) {
      try {
        const response = await ItemsService.getItems(value);
        this.results = response;
        console.log(this.results);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};

</script>

<style lang="scss">
  .list {
    &__inner {
      list-style-type: none;
      text-align: left;
      margin-right: 50px;
    }

    &__item {
      display: flex;
      align-items: center;
      height: 48px;
      border-top: #dbdbdb 1px solid;

      &:last-child {
        border-bottom: #dbdbdb 1px solid;
      }
    }

    &__title {
      display: block;
      width: 200px;
      color: #2c85c5;
      font-weight: 500;
      font-size: 16px;
    }

    &__button {
      background-color: #2c85c5;
      color: #fff;
      text-decoration: none;
      // text-transform: uppercase;
      font-weight: 500;
      height: 28px;
      line-height: 28px;
      padding: 0 10px;
      font-size: 14px;
      border-radius: 5px;
      min-width: 160px;
    }
  }
</style>
