import axios from 'axios'

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDczMjMwNTlhZDRhYjIxYzljNTQ3ZTJjOTE1M2YyNCIsInN1YiI6IjYxNzlmNmE2MTBkYWQ2MDA5M2FlZWU4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UDuo5X0L8NL51xIvozeBAMyWLOzwAkgha8bStbekpdI'
export const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

axios.defaults.headers.common['Authorization'] = TOKEN


api.interceptors.request.use((config) => {
    let arr,url
    if (config.url?.includes('API_KEY')){
        arr = config.url.split('API_KEY')
        url = arr[0] + 'api_key=947323059ad4ab21c9c547e2c9153f24' + arr[1]
        config.url = url
        return config
    }
},(error) => Promise.reject(error))