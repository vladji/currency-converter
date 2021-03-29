import { createAction } from 'redux-actions';

export const ERROR_MESSAGE = 'CAUGHT_ERROR';

export const setErrorMessage = createAction(ERROR_MESSAGE, value => value);
