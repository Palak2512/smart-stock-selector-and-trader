const {model}= require("mongoose");

const {OrdersSchema}= require("../Schema/OrdersSchema");
const OrdersModel = new model("watchlist",WatchListSchema);

module.exports={OrdersModel};

