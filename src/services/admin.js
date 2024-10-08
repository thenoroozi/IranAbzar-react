import api from '../configs/api'


const postProduct = async (data) => {
   return await api.post(`products/${data}`)
}
const postCategory = async (data) => {
   return await api.post(`caregories/${data}`)
}
const postComment = async (data) => {
   return await api.post(`comments/${data}`)
}
const postArchive = async (data) => {
   return await api.post(`archive/${data}`)
}



export {
   postProduct,
   postCategory,
   postComment,
   postArchive
}