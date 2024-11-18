const mongoose = require("mongoose");

const uri = "mongodb+srv://achal:dbpass@cluster0.ywqgo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose;
