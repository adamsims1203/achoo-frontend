import axios from 'axios';
import PharmacyActions from '../actions/PharmacyActions';
import SearchActions from '../actions/SearchActions';

const LATITUDE = 41.504999;
const LONGITUDE = -81.9207206;

const PharmacySource = {
  fetch: {
    remote() {
      return axios.get('http://localhost:3000/pharmacies', {
        params: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
        },
      });
    },

    loading: PharmacyActions.loadingPharmacies,
    success: PharmacyActions.receivedPharmacies,
    error: PharmacyActions.fetchingPharmaciesFailed,
  },
  search: {
    remote(state, query) {
      return axios.get('http://localhost:3000/pharmacies', {
        params: {
          query,
          latitude: LATITUDE,
          longitude: LONGITUDE,
        },
      });
    },

    loading: SearchActions.searchingPharmacies,
    success: PharmacyActions.receivedPharmacies,
    error: SearchActions.searchingPharmaciesFailed,
  },
};

export default PharmacySource;
