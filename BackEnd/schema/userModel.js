import mongoose 'mongoose';

var Schema = mongoose.Schema;

const userSchema = new Schema({
		userName: String,
		passWord: String,
		projects: [],
	}),
	User = mongoose.model('User', userSchema);

export default Todos;