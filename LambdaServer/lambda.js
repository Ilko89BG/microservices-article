exports.handler = (event, context) => {
  context.succeed({
    isBase64Encoded: false,
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: "Welcome to Orders Service.",
  });
};
