export const resize=(url, newSize)=>{
    return url.match(/media\/(screenshot|games)/)
    ? url.replace("/media/",`/media/resize/${newSize}/-/`)
    :url
}