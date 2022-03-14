<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{name: 'home'}">
        <img src="@/assets/logo.svg">
      </router-link>

      <a class="navbar-burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link :to="{name: 'home'}" class="navbar-item">
          Статьи
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MvcNavBar'
}
</script>