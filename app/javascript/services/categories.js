import Api from './api';

const CategoriesService = {
  show: (id) => Api.get(`/categories/${id}`)
}

export default CategoriesService;