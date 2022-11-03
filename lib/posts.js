import { createClient } from "../prismicio";
const client = createClient();

export async function getAllPostIds() {
  const posts = await client.getAllByType("post");

  return posts.map((post) => {
    return {
      params: {
        uid: post.uid,
      },
    };
  });
}

export async function getPostData(uid) {
  const post = await client.getByUID("post", uid);
  return {
    post,
  };
}
