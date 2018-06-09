import { getUserFromDb } from "./db";

export async function getUser(event, context, callback) {
  const { id } = event.pathParameters;
  const tableName = process.env.TABLE_NAME;
  const region = process.env.REGION;

  if (!id || !tableName || !region) {
    return callback(new Error("User id not specified"));
  }

  try {
    const user = await getUserFromDb(tableName, region, id);

    return callback(null, {
      body: JSON.stringify(user),
      statusCode: 200
    });
  } catch (e) {
    return callback(e);
  }
}
