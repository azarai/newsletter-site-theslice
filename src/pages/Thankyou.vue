<template>
  <Layout>
    <div class="flex items-center justify-center h-screen">
      <section class="text-black">
        <div
          class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
        >
          <div class="text-center w-full">
            <h1
              class="title-font sm:text-4xl text-5xl mb-3 font-medium text-black"
              v-html="$static.metadata.thankyouHeadline"
            ></h1>
            <h2
              class="leading-relaxed mb-6 text-xl"
              v-html="$static.metadata.thankyouWelcome"
            ></h2>

            <p class="text-center">
              <a v-if="$static.metadata.socialTwitter" :href="$static.metadata.socialTwitter" target="_blank"><img class="inline" src="/images/twitter.svg" alt="contact me on twitter"></a>
              <a v-if="$static.metadata.socialEmail" :href="'mailto:' + $static.metadata.socialEmail"><img class="inline mx-3" src="/images/mail.svg" alt="contact me per email"></a>
            </p>
            <div
              class="flex justify-center w-full lg:w-auto text-center mt-5 text-gray-600"
            >
              <g-link
                to="/"
                class="py-4 px-8 border border-gray-600 text-center px-4 py-1 leading-loose text-lg font-medium transition-colors duration-200 focus:outline-none focus:shadow-outline cursor-pointer hover:border-yellow-500 hover:text-yellow-500"
                >Back</g-link
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    thankyouHeadline
    thankyouWelcome
    socialEmail
    socialTwitter
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Thank You | " + $static.metadata.siteName,
    };
  },
};
</script>

<style>
.leading-relaxed a {
  @apply text-blue-700;
  text-decoration: underline;
}
</style>
