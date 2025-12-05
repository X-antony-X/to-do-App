async function apiRequest(apiUrl="",options="",error=null) {
    try {
        const response = await fetch(apiUrl,options)
        if (!response.ok) throw Error ("Please reload the app")
        return await response.json()
    } catch (err){
        error = err.message
    } finally {
        return error
    }
}

export default apiRequest