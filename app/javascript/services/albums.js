import Api from './api';
 
const AlbumsService = {
  index: () => Api.get('/dashboards'),
  show: (id) => Api.get(`/albums/${id}`)
}
 
export default AlbumsService;