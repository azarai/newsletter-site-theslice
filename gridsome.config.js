// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: process.env.NEWSLETTER_NAME,
  siteDescription: process.env.DESCRIPTION,
  metadata: {
    slogan: process.env.SLOGAN || "",
    logo: process.env.LOGO || "",
    frontHeadline: process.env.FRONT_HEADLINE || "",
    frontSubHeadline: process.env.FRONT_SUBHEADLINE || "",
    frontSocialProof: process.env.FRONT_SOCIAL_PROOF || "",
    emailListId: process.env.EMAIL_OCTOPUS_LIST_ID || "",
    thankyouHeadline: process.env.THANKYOU_HEADLINE || "",
    thankyouWelcome: process.env.THANKYOU_WELCOME || "",
    socialTwitter: process.env.SOCIAL_TWITTER || "",
    socialEmail: process.env.SOCIAL_EMAIL || "",
    testimonialsHeadline: process.env.TESTIMONIALS_HEADLINE || "",
    testimonial1Name: process.env.TESTIMONIAL_1_NAME || "",
    testimonial1Image: process.env.TESTIMONIAL_1_IMAGE || "",
    testimonial1Position: process.env.TESTIMONIAL_1_POSITION || "",
    testimonial1Quote: process.env.TESTIMONIAL_1_QUOTE || "",  
    testimonial2Name: process.env.TESTIMONIAL_2_NAME || "",
    testimonial2Image: process.env.TESTIMONIAL_2_IMAGE || "",
    testimonial2Position: process.env.TESTIMONIAL_2_POSITION || "",
    testimonial2Quote: process.env.TESTIMONIAL_2_QUOTE || "",  
    testimonial3Name: process.env.TESTIMONIAL_3_NAME || "",
    testimonial3Image: process.env.TESTIMONIAL_3_IMAGE || "",
    testimonial3Position: process.env.TESTIMONIAL_3_POSITION || "",
    testimonial3Quote: process.env.TESTIMONIAL_3_QUOTE || "",  
    testimonial4Name: process.env.TESTIMONIAL_4_NAME || "",
    testimonial4Image: process.env.TESTIMONIAL_4_IMAGE || "",
    testimonial4Position: process.env.TESTIMONIAL_4_POSITION || "",
    testimonial4Quote: process.env.TESTIMONIAL_4_QUOTE || "",  
  },
  
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options. You don't need to set any options to get
      * going. Seriously, you don't need to declare tailwind.config.js.
*/
      options: {
        tailwindConfig: './tailwind.config.js',
        //presetEnvConfig: {},
        //shouldImport: false,
        //shouldTimeTravel: true
      }

    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'StaticPage',
        path: './content/*.md',
      }
    }
  ],
  templates: {
    StaticPage: '/:slug'
  }
}
