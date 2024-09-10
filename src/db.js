const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://reinald302009:gMn95QlTaahvIBtF@cluster0.sviwi.mongodb.net/pet";

async function main() {
  await mongoose.connect(mongoDB);
}

main()
  .then(() => console.log(" Conexão realiza com sucesso"))
  .catch((err) => console.log(err));

module.exports = mongoose;
