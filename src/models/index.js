// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Folder, Note, User } = initSchema(schema);

export {
  Folder,
  Note,
  User
};