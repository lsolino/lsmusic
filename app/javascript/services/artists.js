import Api from './api';
 
const ArtistsService = {
  show: (id) => Api.get(`/artists/${id}`)
}
 
export default ArtistsService;