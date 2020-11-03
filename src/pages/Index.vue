<template>
  <Layout>
    <section class="text-black">      
      <div
        class="container mx-auto flex mt-8 px-5 py-24 items-center justify-center flex-col"
      >
        <div class="text-center w-full content-center">
          <img
            :src="$static.metadata.logo"
            :alt="$static.metadata.siteName"
            class="mx-auto h-48 lg:h-32"
          />
          <h1
            class="title-font text-5xl mb-3 font-bold text-black"
          >
            {{ $static.metadata.frontHeadline }}
          </h1>
          <h2 class="leading-relaxed mb-6 text-3xl lg:text-lg">
            {{ $static.metadata.frontSubHeadline }}
          </h2>
          <form @submit.prevent="submit">
          <div class="flex justify-center">
            
            <div class="flex w-full lg:w-3/6">
              <input
                type="email"
                aria-label="E-mail address"
                class="flex-1 lg:w-64 border border-gray-600 placeholder-gray-600 text-gray-700 px-4 py-1 appearance-none text-2xl leading-loose focus:outline-none"
                name="field_0"
                placeholder="Enter your email here"
                required=""
                v-model="email"
              /><input
                type="submit"
                class="lg:py-4 lg:px-8 py-6 px-10 text-center leading-loose text-2xl lg:text-lg font-medium transition-colors duration-200 focus:outline-none focus:shadow-outline bg-gray-900 text-white cursor-pointer hover:bg-yellow-500"
                value="Try it"
              />

            
            </div>

          </div>
          </form>
          <div class="flex justify-center w-full lg:w-auto text-center mt-3 text-gray-600 text-2xl lg:text-lg">
              {{ $static.metadata.frontSocialProof }}
          </div>

          <div class="text-center mt-5"> 
            <g-link to="/archive" class="text-xl text-gray-700 hover:text-blue-500 cursor-pointer">Past Issues</g-link>
            <g-link to="/promote" class="ml-8 text-xl text-gray-700 hover:text-blue-500 cursor-pointer">Advertise</g-link>
          </div>
        </div>
      </div>
    </section>

<section class="text-gray-700 body-font testimonials">
  <div class="container px-5 py-24 mx-auto">
    <h2 class="text-2xl font-medium  text-gray-900 mb-12 text-center">{{ $static.metadata.testimonialsHeadline }}</h2>
    <div class="flex flex-wrap -m-4 justify-center">
      <div class="lg:w-1/4 md:w-1/2 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" :src="$static.metadata.testimonial1Image">
          <p class="leading-relaxed">{{ $static.metadata.testimonial1Quote }}</p>
          <span class="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{{ $static.metadata.testimonial1Name }}</h2>
          <p class="text-gray-500" v-html="$static.metadata.testimonial1Position"></p>
        </div>
      </div>
      
      <div v-if="$static.metadata.testimonial2Name" class="lg:w-1/4 md:w-1/2 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" :src="$static.metadata.testimonial2Image">
          <p class="leading-relaxed">{{ $static.metadata.testimonial2Quote }}</p>
          <span class="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{{ $static.metadata.testimonial2Name }}</h2>
          <p class="text-gray-500" v-html="$static.metadata.testimonial2Position"></p>
        </div>
      </div>

      <div v-if="$static.metadata.testimonial3Name" class="lg:w-1/4 md:w-1/2 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" :src="$static.metadata.testimonial3Image">
          <p class="leading-relaxed">{{ $static.metadata.testimonial3Quote }}</p>
          <span class="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{{ $static.metadata.testimonial3Name }}</h2>
          <p class="text-gray-500" v-html="$static.metadata.testimonial3Position"></p>
        </div>
      </div>

      <div v-if="$static.metadata.testimonial4Name" class="lg:w-1/4 md:w-1/2 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" :src="$static.metadata.testimonial4Image">
          <p class="leading-relaxed">{{ $static.metadata.testimonial4Quote }}</p>
          <span class="inline-block h-1 w-10 rounded bg-gray-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{{ $static.metadata.testimonial4Name }}</h2>
          <p class="text-gray-500" v-html="$static.metadata.testimonial4Position"></p>
        </div>
      </div>
    </div>
  </div>
</section>

  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    slogan
    logo
    frontHeadline
    frontSubHeadline
    frontSocialProof
    emailListId
    testimonialsHeadline
    testimonial1Name
    testimonial1Image
    testimonial1Position
    testimonial1Quote
    testimonial2Name
    testimonial2Image
    testimonial2Position
    testimonial2Quote
    testimonial3Name
    testimonial3Image
    testimonial3Position
    testimonial3Quote
    testimonial4Name
    testimonial4Image
    testimonial4Position
    testimonial4Quote
  }
}
</static-query>

<script>
import atomic from "atomicjs";
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName + " | " + this.$static.metadata.slogan,
      meta: [
        {
          name: "description",
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
  data: function() {
    return {
      email: null,
    }
  },
  methods: {
    submit: function() {
      var data = {
        field_0: this.email,
      }
      var self = this
      const listId = this.$static.metadata.emailListId
      atomic(`https://emailoctopus.com/lists/${listId}/members/embedded/1.3/add`, {
              method: "POST",
              headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              },
              data: data
            })
              .then(function (response) {
                if (response.data.success === true) {
                  self.$router.push("/thankyou")
                } else {
                  // todo
                  console.log(response.data); // xhr.responseText
                  //console.log(response.xhr); // full response
                }
              })
              .catch(function (error) {
                // todo
                //console.log(error.status); // xhr.status
                //console.log(error.statusText); // xhr.statusText
              });
    }
  }
};
</script>

<style>

.testimonials a {
  @apply underline text-gray-600;
}
</style>
