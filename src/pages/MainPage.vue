<template>
<div class="main-page">
  <h2 class="main-page__category">Здоровя</h2>
  <ArticlesListUp :items ="articles"/>
  <h2 class="main-page__category">Харчування</h2>
  <FoodList/>
  <h2 class="main-page__category">Спорт</h2>
  <ArticlesListDown :items ="articles"/>
</div>
</template>

<script>
import ArticlesListUp from '@/components/articlesList/ArticlesListUp.vue';
import ArticlesListDown from '@/components/articlesList/ArticlesListDown.vue';
import FoodList from '@/components/FoodList.vue';
import articles from '@/components/articles';
    export default {
    name: 'MainPage',
    components: {
      ArticlesListUp,
      ArticlesListDown,
        FoodList,
  },
  data() {
    return {
            articles
          }
        }
    }
</script>