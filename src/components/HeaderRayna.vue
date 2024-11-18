<script setup>
import IconMen from './common/Icon/IconMen.vue'
</script>

<template>
  <header class="header d-flex justify-content-end">
    <div class="dropdown">
      <button
        class="btn-user"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <icon-men name="user_men" width="20" height="20" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
@use '../scss/_variables.scss' as *;

.header {
  padding: 12px 36px;
  background: $color-white;
  border-bottom: 1px solid $color-gray;

  .btn-user {
    color: $color-white;
    background: $color-blue;
    border: none;
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }

  .dropdown-menu {
    width: 267px;
    border: none;
    box-shadow: 0px 4px 20px 0px #0000001a;
  }
}
</style>
