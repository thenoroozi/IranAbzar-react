import api from '../configs/api'

const getCategories = () => {
   return api.get("categories")
}

export {getCategories};