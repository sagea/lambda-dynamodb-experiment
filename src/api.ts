import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "notes";

export const getNoteCount = async () => {
    const result = await dynamo.send(new ScanCommand({
        TableName: tableName,
        Select: 'COUNT'
    }))
    console.log(result)
    return result.Items
}

export const createNote = async () => {

}

export const deleteNote = async () => {

}