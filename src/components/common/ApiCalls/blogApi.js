export const getRequest = async (path) => {
    const response = await fetch(`http://localhost:8080/${path}`)
    return response.json()

}