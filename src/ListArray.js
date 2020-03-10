import React from "react";
import {useEffect} from "react"
import {connect} from "react-redux";
import {fetchlist} from "./Action"

function ArrayList(props) {
    useEffect(() => {
      props.dispatch(fetchlist());
    },[]);
    return (
        <ul>
        {props.list.map(list =>
          <li >{list}</li>
        )}
      </ul>
    );}


  const mapStateToProps = state => {
    return {
      list:state.city
      }
    }

    /*const mapDispatchToProps = dispatch => {
        return {
          city: () => dispatch(FETCH_LIST()),
          dispatch
        }
      }*/
  

  export default connect(mapStateToProps)(ArrayList);