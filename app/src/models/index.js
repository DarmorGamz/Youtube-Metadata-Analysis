// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, YoutubeAPIKey } = initSchema(schema);

export {
  User,
  YoutubeAPIKey
};