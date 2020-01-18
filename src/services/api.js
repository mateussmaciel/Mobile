import axios from 'axios'

//trocar o endereço de acordo com o ip de onde está sendo publicado
const api = axios.create({
    baseURL: '',
})

export default api;