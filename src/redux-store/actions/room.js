import {
    RETRIEVE_ROOMS_SUCCESS, SAVED_ROOM_SUCCESS,
    SET_MESSAGE,
} from '../action-types';

import RoomService from '../../services/room-service'

export const getRooms = () => (dispatch) => {
    return RoomService.getRooms().then(
        (response) => {
            dispatch({
                type: RETRIEVE_ROOMS_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const saveRoom = (formData) => (dispatch) => {
    return RoomService.saveRoom(formData).then(
        (data) => {
            dispatch({
                type: SAVED_ROOM_SUCCESS,
                payload: { room: data },
            })

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};
