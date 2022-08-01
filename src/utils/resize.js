export const resize=(url, newSize)=>{
    return (
        url && 
        url.match(/media\/(screenshot|games)/)
        ? url.replace("/media/",`/media/resize/${newSize}/-/`)
        :url
    )
}