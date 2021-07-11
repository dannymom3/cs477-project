const getDb = require("../util/database").getDB;
const { ObjectID } = require("mongodb");
class OrderHistory{
    static save(item){
        return getDb().collection("orderHistory").insertOne(item);
    }
    static clearHistory(id) {
        return getDb()
          .collection("orderHistory")
          .deleteOne({ _id: new ObjectID(id)});
      }
     static findAll() {
        return getDb().collection("orderHistory").find().toArray();
      } 
      static findByUserName(userName) {
        return getDb()
          .collection("orderHistory")
          .find({userName:userName}).toArray();
      }
}

module.exports=OrderHistory;