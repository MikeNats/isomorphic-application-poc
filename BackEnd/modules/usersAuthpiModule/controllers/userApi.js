'use strict';

import express from 'express';
import USER_API_PATHS from '../consts/USER_API_PATHS';
import getUserFromDB from '../services/getUserFromDB';
import deleteUserFromDB from '../services/deleteUserFromDB';
import createUser from '../services/createUser';
import isUserNameValid from '../services/isUserNameValid';
import authenticateUserToken from '../services/authenticateUserToken';

let userApi = express.Router(); // Get an instance of a router

userApi.post(USER_API_PATHS.SIGN_IN, (req, res) => { //Sign in
	getUserFromDB(req, res);
});

userApi.post(USER_API_PATHS.SIGN_UP, (req, res) => { //Sign up
	createUser(req, res);
});

userApi.post(USER_API_PATHS.AUTH, (req, res) => { //User token authentication
	authenticateUserToken(req, res);
});

userApi.post(USER_API_PATHS.DELETE, (req, res) => { // Delete User
	deleteUserFromDB(req, res);
});

userApi.post(USER_API_PATHS.IS_USER_NAME_VALID, (req, res) => { // Delete User
	isUserNameValid(req, res);
});

export default userApi;