import axios from "axios"

const api_key="fba132d0"

export default function baseurlwithapikey(){
    const base_url=`http://www.omdbapi.com/?apikey=${api_key}`
    return base_url
}

const poster_url=`http://img.omdbapi.com/?apikey=${api_key}&`


