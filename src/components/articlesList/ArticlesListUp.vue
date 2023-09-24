<template>
<div class="health-gallery">
    <div class="food-list__item
">
    <img class="food-list__image" src="https://picsum.photos/600/400?random=9" alt="">
    <p class="food-list__info">Lorm ipsum dolor sit amet, co adipiscing elit, sed do eiusmod</p>
    </div>
<ArticlesItem
v-for="{ id, title, description, ImgUrl } in items"
:key="id"
:title = "title"
:description = "description"
:ImgUrl = "ImgUrl"></ArticlesItem>
</div>
</template>

<script>
import ArticlesItem from './ArticlesItem.vue';
    export default {
    name: 'ArticlesListUp',
    components: {
        ArticlesItem
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        }
    }
    }
</script>