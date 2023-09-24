<template>
     <div class="health-card">
        <h1 class="health-card__title">Втомилися від болів у спині?</h1>
        <img src="../images/bil_u_spyni.jpg" alt="">
        <div class="text-block">
            <p class="card-description">Біль у спині може бути ниючим або гострим, постійним або періодичним. Він може локалізуватися у різних ділянках хребта та віддавати у плечі, шию, грудну клітину або кінцівки.
            Біль — це тільки симптом, викликаний певним захворюваннями. Хоча при різних патологіях характер болю, як правило, відрізняється, визначити правильний діагноз за суб'єктивними відчуттями не можна, необхідна діагностика.
            </p>
            <p class="list-title"> Причинами болю у спині можуть бути:</p>
            <ol class="reasons-list">
                <li class="reason-item">пошкодження м'язів, зв'язок та/або сухожиль;</li>
                <li class="reason-item">асиметричний розвиток м’язів спини;</li>
                <li class="reason-item">травми хребта або суглобів;</li>
                <li class="reason-item">викривлення хребта (сколіоз, кіфоз, лордоз);</li>
                <li class="reason-item">протрузії, грижі міжхребцевих дисків та інші захворювання хребта;</li>
                <li class="reason-item">хвороби суглобів, в тому числі такий стан, як остеохондроз;</li>
                <li class="reason-item">запальні та інфекційні захворювання;</li>
                <li class="reason-item">радикуліт;</li>
                <li class="reason-item">хвороби внутрішніх органів та інші.</li>
            </ol>
        </div>
        <div class="bottom-text">
            <p class="call-to-action">Пройдіть тест та дізнайтеся причину</p>
            <p class="recomendations">Залежно від результатів, можемо запропонувати індивідуальні рекомендаії з покращення стану спини</p>
        </div>
  
        <MainBtn type = 'button'>Пройти тест</MainBtn>
        </div>
</template>

<script>
import MainBtn from "../components/MainBtn";


    export default {
         name: 'HealthPage',
    components: {
        MainBtn
    }
}
</script>