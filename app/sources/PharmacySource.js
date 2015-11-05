import axios from 'axios';
import PharmacyActions from '../actions/PharmacyActions';

const PharmacySource = {
  fetch: {
    remote() {
      return axios.get('http://localhost:3000/pharmacies');
    },

    loading: PharmacyActions.loadingPharmacies,
    success: PharmacyActions.receivedPharmacies,
    error: PharmacyActions.fetchingPharmaciesFailed,
  },
};

export default PharmacySource;
