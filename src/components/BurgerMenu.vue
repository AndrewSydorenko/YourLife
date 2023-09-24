<template>
   <div class="burger-menu">
     <Slide >
            <a id="home" href="#">
                 <nav class="burger-list">
                            <li class="burger-list__item">
                                <RouterLink class="burger-list__link" to="/health">Здоров'я</RouterLink>
                            </li>
                            <li class="burger-list__item">
                                <RouterLink class="burger-list__link" to="/">Дім та побут</RouterLink>
                            </li>
                            <li class="burger-list__item">
                                <RouterLink class="burger-list__link" to="/">Харчування</RouterLink>
                            </li>
                            <li class="burger-list__item">
                                <RouterLink class="burger-list__link" to="/">Спорт</RouterLink>
                            </li>
                        </nav>
            </a>
        </Slide>
   </div>
</template>

<script>
import { Slide } from 'vue3-burger-menu'
    export default {
    name: 'BurgerMenu',
    components: {
            Slide
        }
    }
</script>
