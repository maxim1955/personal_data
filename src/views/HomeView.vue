<template>
  <main>
    <v-header/>
    <section>
      <div class="wrap">
        <div class="form_box">
          <h2 class="form_title">Персональные данные </h2>
          <input type="text" placeholder="Имя" class="form_input" v-model="first_name">
          <input type="text" placeholder="Фамилия" class="form_input" v-model="last_name">
        </div>
      </div>
      <div class="form_btn">
        <div class>
          <h3>Дети (макс. 5)</h3>
        </div>
        <div>
          <button class="form_btn_items" @click="addInput(item,labels)" v-if="labels.length < 5">
            <img src="../assets/plus.png">
            <h5>Добавить ребенка</h5>
          </button>
        </div>
      </div>
      <div class="form_desk">
        <div class="form_desk_input" v-for="(item,index) of labels">
          <input type="text" placeholder="Имя Ребенка" v-model="item.chilFirstName">
          <input type="number" placeholder="Возраст ребенка" v-model="item.childLastname">
          <button
              class="form_desk-btn"
              @click="removeField(index,labels)"
          >
            Удалить
          </button>
        </div>
      </div>
      <div class="form_desk-button">
        <button class="form_desk-save" @click="addChild">Сохранить</button>
      </div>
    </section>

  </main>
</template>
<script setup>
import {ref} from "vue";
import {child} from "@/stores/counter";
import VHeader from "@/components/v-header.vue";

const store = child()
let first_name = ref('')
let last_name = ref('')

const text = ref('')
let labels = ref([{chilFirstName: "", childLastname: ""}])
const addChild = () => {
  const info = [{
    parentName: first_name.value,
    parentLastName: last_name.value,
    child: labels.value
  }]
  store.GET_CHILD(info)
}

const addInput = (value, fieldType) => {
  console.log(value, fieldType)
  fieldType.push({value: ""});
}
const removeField = (index, fieldType) => {
  fieldType.splice(index, 1);
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


.form_box {
  max-width: 616px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

}

.form_title {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.form_input {
  padding: 16px 26px 6px;
  margin-bottom: 6px;
}

.form_btn {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 616px;
  align-items: center;
  align-content: center;
}

.form_btn_items {
  padding: 0 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 2px solid #01A7FD;
  color: #01A7FD;;
}

.form_btn_items:hover {
  color: cornflowerblue;
  cursor: pointer;
  border: 2px solid green;
  color: gray;
}

.form_desk {
  max-width: 616px;
  margin: 0 auto;
}

.form_desk_item {
  display: flex;
  max-width: 616px;
  margin: 0 auto;
  justify-content: space-between;
}

.form_desk_input {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;

}

.form_desk_input > input {

}

.form_desk-btn {
  border: none;
  padding: 20px;
}

.form_desk-btn:hover {
  color: cornflowerblue;
  cursor: pointer;
}

.form_desk-save {
  padding: 10px 20px;
  border-radius: 100px;
  background: cornflowerblue;
  border: none;
  cursor: pointer;
}

.form_desk-button {
  max-width: 616px;
  margin: 10px auto;

  display: flex;
  justify-content: flex-start;
}
</style>
