const Hapi = require("hapi");
const Good = require("good");

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: "localhost",
  port: 8000
});

server.route({
  method: "GET",
  path: "/hello",
  handler: function(request, reply) {
    return reply("hello world");
  }
});

server.register(
  {
    register: Good,
    options: {
      reporters: {
        console: [
          {
            module: "good-squeeze",
            name: "Squeeze",
            args: [
              {
                response: "*",
                log: "*"
              }
            ]
          },
          {
            module: "good-console"
          },
          "stdout"
        ]
      }
    }
  },
  err => {
    if (err) {
      throw err;
    }

    server.start(error => {
      if (error) {
        throw error;
      }
      server.log("info", `Server running at: ${server.info.uri}`);
    });
  }
);
