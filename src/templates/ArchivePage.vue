<template>
  <Layout>
    <navBar :title="$page.issue.title"/>

    <section class="text-black">
      <div
        class="container mx-auto flex px-5 py-4 items-center justify-center flex-col"
      >
        <h1 class="title-font text-3xl mb-3 font-bold text-black">
          {{$page.issue.title}}
        </h1>

        <div v-html="$page.issue.content"></div>
        
      </div>
    </section>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  issue: newsletterIssues(id: $id) {
        id
        title
        sentDate
        content
        styles
  }
}
</page-query>

<script>
import NavBar from "~/components/Navbar.vue";
export default {
  components: {
    NavBar
  },
  metaInfo() {
    return {
      title: this.$page.issue.title,
      style: [
        { cssText: this.$page.issue.styles, type: 'text/css' }
      ]
    };
  },
};
</script>
