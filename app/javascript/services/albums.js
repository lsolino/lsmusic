import Api from './api';

const AlbumsService = {
  index: () => Api.get('/dashboards')
}

export default AlbumsService;