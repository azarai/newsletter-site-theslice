// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const process = require('process');
const axios = require("axios");
const { parse } = require('node-html-parser');

const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY
const LIST_ID = process.env.EMAIL_OCTOPUS_LIST_ID

function string_to_slug (str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;'#";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return str;
}

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const { data } = await axios.get('https://emailoctopus.com/api/1.5/campaigns?api_key='+ API_KEY)

    const collection = addCollection({
      typeName: 'NewsletterIssues'
    })

    for (const letter of data.data) {
      console.log("process newsletter")
      if(letter.status === "SENT" && letter.to.includes(LIST_ID)) {
        console.log("process newsletter... add node", letter.subject)
        var html = parse(letter.content.html);
        var styleNodes = html.querySelectorAll("style")
        var styles = ""

        for( var i=0;i< styleNodes.length; i++) {
          styles += styleNodes[i].text
        }
        collection.addNode({
          id: letter.id,
          title: letter.subject,
          sentDate: letter.sent_at,
          slug: string_to_slug(letter.subject),
          content: html.querySelector('body').innerHTML,
          styles: styles
        })
      }

    }
  })

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allNewsletterIssues {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`)

    data.allNewsletterIssues.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: './src/templates/ArchivePage.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
