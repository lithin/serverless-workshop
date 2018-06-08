const users = [{ id: 1, name: "John", age: 26 }];

exports.getUser = async function(event, context, callback) {
  const id = parseInt(event.pathParameters.id, 10);

  if (!id) {
    return callback(new Error("User id not specified"));
  }

  const user = users.find(u => u.id === id);

  if (!user) {
    return callback(new Error("User does not exist"));
  }

  return callback(null, { body: JSON.stringify(user), statusCode: 200 });
};
