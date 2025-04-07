import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

import { randomUUID } from 'node:crypto'

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "notes";

export const handler = async (event) => {
  console.log('hello')
  try {
    const item = await dynamo.send(
      new PutCommand({
        TableName: tableName,
        Item: {
          id: randomUUID(),
          title: "My First Note",
          content: "This is the content of my first note.",
        },
      })
    );
    
    return {
      statusCode: 200,
      body: JSON.stringify(item),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
