import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';

@createActions(alt)
export default class PharmacyDetailActions {
  constructor() {
    this.generateActions(
      'fetchPharmacy',
      'loadingPharmacy',
      'receivedPharmacy',
      'fetchingPharmacyFailed',
    );
  }
}
