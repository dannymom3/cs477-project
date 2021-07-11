const getDb = require("../util/database").getDB;
const { ObjectID } = require("mongodb");
//id,title,ISBN,publishDate,author
module.exports = class Book {
    constructor(_id, title, ISBN, publishDate, author, price) {
        this._id = _id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishDate = new Date(publishDate);
        this.author = author;
        this.price = price;
    }
    save() {
        return getDb().collection("books").insertOne(this);
    }
    static findAll() {
        return getDb().collection("books").find().toArray();
    }
    static findById(id) {
        return getDb()
            .collection("books")
            .findOne({ _id: new ObjectID(id) });
    }
             
};
