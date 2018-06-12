import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadContacts, loadComments, loadVehicles, loadProducts} from "./actions";



function mapDispatchToProps(dispatch) {
  return {
    getContacts: () => {
      const action = loadContacts();
      dispatch(action);
    },
    getComments: () => {
      const action = loadComments();
      dispatch(action);
    },
    getVehicles: () => {
      const action = loadVehicles();
      dispatch(action);
    },
    getProducts: () => {
      const action = loadProducts();
      dispatch(action);
    }
  };
}


export default connect(null,mapDispatchToProps)(App);
