import bcrypt from "bcrypt"
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {type: String, required: true, unique: true},
  password: { type :String, required: true},
  username: {type: String, required: true, unique: true},
});


userSchema.pre('save', async function(){
  this.password = await bcrypt.hash()
})

const User = mongoose.model('User', userSchema);
export default User;