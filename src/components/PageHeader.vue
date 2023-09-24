<template>
    <header class="header">
        <RouterLink to="/">
            <h1 class="header-title">ТВІЙLIFE.</h1>
        </RouterLink>
<div class="nav-bar">
            <BurgerMenu v-show="mobile" class="burger-menu"/>
                <nav v-show="!mobile" class="nav-list">
                    <li>
                        <RouterLink class="nav-list__item" to="/health">Здоров'я</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-list__item" to="/">Дім та побут</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-list__item" to="/">Харчування</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="nav-list__item" to="/">Спорт</RouterLink>
                    </li>
                </nav>
</div>

        <div class="header-bottom">
            <SearchBar />
        </div>
    </header>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue'

export default {
    name: 'PageHeader',
    components: {
        BurgerMenu,
    },
    data() {
        return {
            mobile: false,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 768) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            return;
        }
    }

}
</script>