<template>
  <header>
    <div class="wrap">
      <div class="header">
        <img src="../assets/logo_alef.png" alt="logo" class="">
        <div class="">
          <router-link to="/" class="header_link">
            Форма
          </router-link>
          <router-link to="/about" class="header_link">
            Превью
          </router-link>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.wrap {
  margin: 0 auto;
  padding: 22px;
  max-width: 1366px;
}

.header {
  max-width: 800px;
  padding-left: 41px;
  display: flex;
  justify-content: space-between;
}

.header_link {
  text-decoration: none;
  color: gray;
  padding-right: 22px;
  font-family: 'Montserrat', sans-serif;
}

.header_link:hover {
  text-decoration: underline;
  color: green;
}

.router-link-active {
  text-decoration: underline;
  color: green;
}

</style>
<script setup>
</script>
