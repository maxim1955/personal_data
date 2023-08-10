<template>
  <v-header/>
  <div class="preview_box">
    <h3 class="preview_title">Персональные данные</h3>
    <div class="" v-for="item of info">
      <p class="preview_subtitle">{{ item.parentName }} {{ item.parentLastName }}</p>
      <h3>Дети:</h3>
      <div class="" v-for="child of item.child">
        <p class="preview_child">{{ child.chilFirstName }} {{ child.childLastname }} Лет</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import VHeader from "@/components/v-header.vue";
import {child} from "@/stores/counter";

const store = child()
const info = store.SET_CHILD

</script>
<style>
.preview_title {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.preview_box {
  max-width: 616px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.preview_child {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  border-radius: 5px;
  background: #9d9b9b;
  width: fit-content;
  padding: 10px;
}
.preview_subtitle{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
</style>
