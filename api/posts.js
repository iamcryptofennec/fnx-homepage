import GhostContentAPI from "@tryghost/content-api"


// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://ghost-finnexus.herokuapp.com',
  key: 'a4c8b784c4018f771dca51f99e',
  version: "v3"
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}
