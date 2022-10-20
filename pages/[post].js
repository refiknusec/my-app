export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const posts = await res.json()
    const paths = posts.data.map((post) => ({
        params: {post: post.id.toString()},
    }))
    return {paths, fallback: false}
  }
  

  export async function getStaticProps({ params }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.post}`)
    const post = await res.json()
    return { props: { post } }
  }

  function PostPage( {post}) {
    return <div>{post.data.attributes.title}<div>{post.data.attributes.content}</div></div> 
  }

  export default PostPage