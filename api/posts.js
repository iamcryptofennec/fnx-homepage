import GhostContentAPI from "@tryghost/content-api"

// Create API instance with site credentials

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_URL || process.env.URL,
  key: process.env.CONTENT_KEY,
  version: "v3"
})

// const api = new GhostContentAPI({
//   url: "https://finnexus-cms.herokuapp.com",
//   key: process.env.CONTENT_KEY,
//   version: "v3"
// })

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: 'tags,authors'
    })
    .catch(err => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    },
    {include: 'tags,authors'})
    .catch(err => {
      console.error(err);
    });
}
