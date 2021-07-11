//const users=[]
const getDb = require("../util/database").getDB;
const { ObjectID } = require("mongodb");
class User {
    constructor(id, firstName, lastName, userName, password, role, order = []) {
            this._id = id;
            this.firstName = firstName;
            this.lastName = lastName
            this.userName = userName;
            this.password = password;
            this.role = role;
            this.orderHistory = order;
        }
        //login method
    login() {
        return getDb().collection('users').findOne({ userName: this.userName, password: this.password });
    }
    save() {
        return getDb().collection("users").insertOne(this);
    }
    static findAll() {
        return getDb().collection("users").find().toArray();
    }

}
module.exports = User;