import {
    RETRIEVE_ROOMS_SUCCESS,
    SAVED_ROOM_SUCCESS
} from "../action-types";

const rooms = {};

const initialState = rooms;

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_ROOMS_SUCCESS:
            return {
                ...state,
                rooms: payload.rooms
            };
        case SAVED_ROOM_SUCCESS:
            return {
                ...state,
            };
        default:
            return state;
    }
}