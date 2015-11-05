import axios from 'axios';
import PharmacyDetailActions from '../actions/PharmacyDetailActions';
import ProductActions from '../actions/ProductActions';

const PharmacySource = {
  fetch: {
    remote(state, id) {
      return axios.get(`http://localhost:3000/pharmacies/${id}`);
    },

    loading: PharmacyDetailActions.loadingPharmacy,
    success: PharmacyDetailActions.receivedPharmacy,
    error: PharmacyDetailActions.fetchingPharmacyFailed,
  },

  fetchProducts: {
    remote(state, id) {
      return axios.get(`http://localhost:3000/pharmacies/${id}/products`);
    },

    loading: ProductActions.loadingProducts,
    success: ProductActions.receivedProducts,
    error: ProductActions.fetchingProductsFailed,
  },
};

export default PharmacySource;
