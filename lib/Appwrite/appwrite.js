import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
  } from "react-native-appwrite";
  
export const appwriteConfig = {
    endpoint: process.env.EXPO_APPWRITE_ENDPOINT,
    platform: process.env.EXPO_APPWRITE_PLATFORM,
    projectId: process.env.EXPO_APPWRITE_PROJECT_ID,
    storageId: process.env.EXPO_APPWRITE_STORAGE_ID,
    databaseId: process.env.EXPO_APPWRITE_DATABASE_ID,
    userCollectionId: process.env.EXPO_APPWRITE_USER_COLLECTION_ID,

  };
  
  const client = new Client();
  
  client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);
  
  const account = new Account(client);
  const storage = new Storage(client);
  const avatars = new Avatars(client);
  const databases = new Databases(client);