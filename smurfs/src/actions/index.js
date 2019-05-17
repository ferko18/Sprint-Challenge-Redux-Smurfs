/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';
export const SMURFS_FETCHING = 'SMURFS_FETCHING';
export const SMURFS_FETCH_SUCCESS = 'SMURFS_FETCH_SUCCESS';
export const SMURFS_FETCH_FAILURE = 'SMURFS_FETCH_FAILURE';

export const SMURF_ADDING = 'SMURF_ADDING';
export const SMURF_ADDED = 'SMURF_ADDED';
export const SMURF_ADD_ERROR = 'ADD_SMURF_ERROR';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_FETCHING});
  axios 
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({ type: SMURFS_FETCH_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: SMURFS_FETCH_FAILURE, payload: error})
    });
};


export const addNewSmurf = (newSmurf) => dispatch => {
  dispatch({ type: SMURF_ADDING });

  axios 
  .post('http://localhost:3333/smurfs', newSmurf)
  .then( response => {
    dispatch({ type: SMURF_ADDED, payload: response.data});
  })
  .catch(error => {
    dispatch({ type: SMURF_ADD_ERROR, payload: error});
  });
}; 