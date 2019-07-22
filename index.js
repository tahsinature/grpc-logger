const colors = require("colors");

module.exports = function grpcLogger(server) {
  const { handlers } = server;

  for (const key in handlers) {
    if (!handlers[key]) return;

    const bu = {};

    bu.handler = handlers[key].func;
    handlers[key].func = (call, cb) => {
      bu.cb = cb;
      cb = (err, res) => {
        const msg = hasError =>
          `${
            hasError ? colors.red("Error") : colors.green("Success")
          } => ${key}`;
        console.log(msg(err));
        bu.cb(err, res);
      };
      bu.handler(call, cb);
    };
  }
};
