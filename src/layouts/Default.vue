<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    slogan
  }
}
</static-query>

<style>

</style>
