const aws = require("aws-sdk");

const getDynamoDB = region => {
  aws.config.update({
    region: region,
    apiVersions: {
      dynamodb: "2012-08-10"
    }
  });
  return new aws.DynamoDB();
};

export async function getUserFromDb(tableName, region, id) {
  const dynamodb = getDynamoDB(region);

  const params = {
    Key: {
      Id: {
        N: id
      }
    },
    TableName: tableName
  };

  return new Promise((resolve, reject) => {
    dynamodb.getItem(params, (error, result) => {
      if (error) {
        return reject(error);
      }

      const { Item } = result;
      if (!Item) {
        return reject(new Error("User does not exist"));
      }
      return resolve({
        id: parseInt(Item.Id.N, 10),
        name: Item.Name.S,
        age: parseInt(Item.Age.N, 10)
      });
    });
  });
}
