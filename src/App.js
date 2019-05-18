import React, { useState, useEffect } from "react";
import "./App.css";

const { HelloRequest, HelloReply } = require("./protobuf/helloworld_pb.js");
const { GreeterClient } = require("./protobuf/helloworld_grpc_web_pb.js");
const client = new GreeterClient("http://localhost:18000");
const request = new HelloRequest();

/*
sample DiscoveryRequest
version_info:
node: { id: envoy }
resource_names:
- foo
- bar
type_url: type.googleapis.com/envoy.api.v2.ClusterLoadAssignment
response_nonce:
*/

function App() {
  const [name, setName] = useState("World");
  const [response, setResponse] = useState("");
  useEffect(() => {
    request.setName(name);
    client.sayHello(request, {}, (err, response) => {
      if (!err) setResponse(response.getMessage());
    });
  }, [name]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Your Name:{" "}
          <input type={"text"} onChange={evt => setName(evt.target.value)} />
        </div>
        <div>Response: {response}</div>
      </header>
    </div>
  );
}

export default App;
