# gRPC Logger

A simple morgan like logger for gRPC

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar.

```bash
npm install grpc-logger
```

## Usage

```javascript
var grpcLogger = require('grpc-logger')
var grpc = require('grpc')

//your code 

var server = grpc.Server()

grpcLogger(server)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)