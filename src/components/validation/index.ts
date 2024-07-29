export function validateProduct(product:{title:string,description:string,price:string,imageURL:string,colors:string[]}) {
    const error = {
        title:"",
        description:"",
        price:"",
        imageURL:"",
        colors:""
    }
    const validateURL = /\b(?:https?|ftp):\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)\b/.test(product.imageURL)
    if(!product.title.trim() || product.title.length < 5 || product.title.length > 50) {
        error.title = "Product name must be between 5 and 50 characters"
    }
    if(!product.description.trim() || product.description.length < 20 || product.description.length > 200) {
        error.description = "Product description must be between 50 and 200 characters"
    }
    if(!product.price.trim() || isNaN(+product.price) || +product.price < 0) {
        error.price = "Valid price is required"
    }
    if(!product.imageURL.trim() || !validateURL) {
        error.imageURL = "Valid image URL is required"
    }
    if(product.colors.length === 0) {
        error.colors = "At least one color is required"
    }
    return error
}