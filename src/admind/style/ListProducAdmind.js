
import './list.css';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:<password>@cluster0.9wtfwyr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

function ListProducAdmind() {
  return (
    <div className="listProducAdmind">
      <header >
        <h1>Lista de productos
        </h1>
        <p>
           aqui va todo
        </p>
        
      </header>
    </div>
  );
}

export default ListProducAdmind;