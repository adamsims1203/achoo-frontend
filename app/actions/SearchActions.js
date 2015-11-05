import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';
// import PharmacySource from '../sources/PharmacySource';

@createActions(alt)
export default class ProductActions {
  constructor() {
    this.generateActions('receivedResults');
  }

  updateQuery(query) {
    this.dispatch(query);
    this.actions.search(query);
  }

  search(query) {
    // this.dispatch();
    //
    // PharmacySource.search(query)
    //   .then((ids) => {
    //     console.log(ids);
    //     this.actions.receivedResults(ids);
    //   });
  }
}
