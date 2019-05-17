import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import "./App.css";
import Smurf from './Smurf'

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className='smurfs'>
        {this.props.smurfs.map(smurf=>(<Smurf smurf={smurf} key={smurf.id} />))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);



// {this.props.smurfs.map(smurf => (
//     <div className='smurf' key={smurf.id}>
//       <h1>{smurf.name}</h1>
//       <h2>{smurf.age}</h2>
//       <h2>{smurf.height}</h2>
//     </div>
//   ))}