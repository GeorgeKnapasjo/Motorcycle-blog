export const getRequest = async (path) => {
    const response = await fetch(`http://localhost:8080/${path}`)
    return response.json()
}

export const getBlogPost = async (blogpost) => {
    const response = await fetch(`http://localhost:8080/Blogpost?title=${blogpost}`)
    console.log(blogpost, response)
    return response.json()
}