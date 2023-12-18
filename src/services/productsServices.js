import axios from "axios";

/**
 * @name getProducts
 * @description Get products from dummyjson API
 * @param {number} limit
 * @default limit [10]
 * @returns {Promise}
 */
export async function getProducts(limit = 10) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`);
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getProductByCategory(category) {
    return await axios.get(`https://dummyjson.com/products/category/${category}`);
}

export const getPhones() => {
    const options = {

        method: 'GET',
        url: 'https://mobile-phones2.p.rapidapi.com/brands',
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'mobile-phones2.p.rapidapi.com'
        }
    };


}