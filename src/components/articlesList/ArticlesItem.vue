<template>
    <div class="health-gallery-item">
      <img :src="ImgUrl" alt="" class="health-gallery-item__image">
      <h3 class="health-gallery-item__title">{{ title }}</h3>
      <p class="health-gallery-item__description">{{ description }}</p>
    </div>
</template>

<script>
    export default {
    name: 'HealthGalleryItem',

   props: {
         id: {
         type: String,
         default: ''
      },
        title: {
            type: String,
            default: ''
        },
        ImgUrl: {
            type: String,
            default: ''
      },
        category: {
         type: String,
         default: ''
      },
        description: {
            type: String,
            default: ''
        },

    }
    }
</script>