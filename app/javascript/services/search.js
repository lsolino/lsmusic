import Api from './api';

const SearchService = {
  index: (query) => Api.get(`/searches?query=${query}`)
}

export default SearchService;