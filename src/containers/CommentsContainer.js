import { connect } from "react-redux";
import Comments from "../components/Comments";
import {loadComments} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    getComments: () => {
      const action = loadComments();
      dispatch(action);
    }
  };
}



export default connect(null,mapDispatchToProps)(Comments);
