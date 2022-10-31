export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jamstack?populate=*`)
    const jamstack = await res.json()
    jamstack.data.attributes.url = process.env.NEXT_PUBLIC_API_URL + jamstack.data.attributes.image.data.attributes.url
    return { props: jamstack.data.attributes }
  }

  function JamstackPage( jamstack) {
    return <div><h1>{jamstack.title}</h1><div>{jamstack.content}</div> <img src="http://localhost:1337/uploads/conf_2022_tout_new_c54695f861.png"  alt="Jamstack Conference"/></div> 
  }

  export default JamstackPage