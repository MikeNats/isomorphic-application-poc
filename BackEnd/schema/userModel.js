'use strict';


import mongoose from 'mongoose';

export default mongoose.model('User', new mongoose.Schema({
	userName: String,
	email: String,
	passWord: String,
	tokken: String,
	projects: [],
}));