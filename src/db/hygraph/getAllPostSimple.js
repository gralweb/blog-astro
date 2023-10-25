export const getAllPostSimple = async () => {
  const query = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        {
          posts {
            title
            slug
            extract
            cover {
              url
            }
          }
        }`,
    }),
  };

  const response = await fetch(import.meta.env.HYGRAPH_ENDPOINT, query);
  const { data: { posts } } = await response.json();

  return posts
} 