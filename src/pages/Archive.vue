<template>
  <Layout>
    <navBar />
    <section class="text-black">
      <div
        class="container mx-auto flex px-5 py-4 items-center justify-center flex-col"
      >
        <h1 class="title-font text-3xl mb-3 font-bold text-black">
          Past Issues
        </h1>

<ul class="mt-3">
  <li v-for="issue in $page.posts.edges" :key="issue.node.id" class="text-xl underline text-gray-600 py-2"><g-link :to="issue.node.slug">{{issue.node.title}}</g-link></li>
</ul>
        
        <p class="text-center mt-8">
          <g-link to="/" class="lg:py-4 lg:px-8 py-6 px-10 text-center text-2xl lg:text-lg font-medium transition-colors duration-200 focus:outline-none focus:shadow-outline bg-gray-900 text-white cursor-pointer hover:bg-yellow-500 ">Subscribe Here</g-link>
        </p>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  posts: allNewsletterIssues(sortBy: "sentDate", order: DESC) {
    edges {
      node {
        id
        title
        sentDate
        slug
      }
    }
  }
}
</page-query>

<script>
import NavBar from "~/components/Navbar.vue";
export default {
  components: {
    NavBar
  },
  metaInfo: {
    title: "Past Issues",
  },
};
</script>
