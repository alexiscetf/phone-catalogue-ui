//Acciones de los eventos
import {
    ActionPhones
} from '../constants'

const axios = require('axios');

/**
 * Get All Phones 
 * @param {Object} filter
 * @param {Object} dispatch 
 */
export const getAllPhones = () => {

    return async dispatch => {

        try {
            //launch spinner loading
            dispatch({
                type: ActionPhones.GET_ALL_PHONES_PENDING
            });

            //get all phones to backend
            let response = await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/phones`)

            if (response.statusText === 'OK') {

                return dispatch({
                    type: ActionPhones.GET_ALL_PHONES_SUCCESS,
                    payload: { phoneList: response.data }
                });

            } else {
                return dispatch({
                    type: ActionPhones.GET_ALL_PHONES_FAILURE,
                    payload: { error: 'Error getting the phone list' }
                });
            }

        } catch (error) {
            console.error(error)
            return dispatch({
                type: ActionPhones.GET_ALL_PHONES_FAILURE,
                payload: { error: 'Error getting the phone list' }
            });
        }
    }
}