<template>
    <div class="health-gallery">
        <ArticlesItem v-for="{ id, title, description, ImgUrl } in items" :key="id" :title="title"
            :description="description" :ImgUrl="ImgUrl"></ArticlesItem>
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