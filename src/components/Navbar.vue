<template>
  <header class="text-gray-700">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <g-link
        to="/"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img
          :src="$static.metadata.logo"
          :alt="$static.metadata.siteName"
          class="h-8 lg:h-12"
        />
        <span class="ml-3 text-xl">{{ $static.metadata.siteName }}</span>
      </g-link>
      <nav
        class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
      >
        <span>{{ title }}</span>
      </nav>
      <g-link to="/archive" class="text-gray-600 py-1 px-3 cursor-pointer">Past Issues</g-link>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
    logo
  }
}
</static-query>
<script>
export default {
  props: ["title"],
  components: {},
};
</script>
<style scoped>
</style>
