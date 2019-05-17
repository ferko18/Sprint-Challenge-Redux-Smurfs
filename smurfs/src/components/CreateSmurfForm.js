import React from 'react';
import {connect} from 'react-redux';
import { addNewSmurf } from '../actions';
import "./App.css";

class CreateSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
                this.props.addNewSmurf(this.state);
        this.setState({ name: '', age: '', height: ''});
    }

    render(){
        return (
            <div className='formsubmit'>
                <form onSubmit={this.onSubmit}>
                    <input name ='name' value={this.state.name} type='text' onChange={this.onChange} placeholder='Name'/>
                    <input name ='age' value={this.state.age} type='number' onChange={this.onChange} placeholder='Age'/>
                    <input name ='height' value={this.state.height} type='text' onChange={this.onChange} placeholder='Height'/>
                    <button type='submit'>Add Smurf</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(mapStateToProps, {addNewSmurf})(CreateSmurfForm);