import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerYoutubeAPIKey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<YoutubeAPIKey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly apiKey: string;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly youtubeAPIKeyUserId?: string | null;
}

type LazyYoutubeAPIKey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<YoutubeAPIKey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly apiKey: string;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly youtubeAPIKeyUserId?: string | null;
}

export declare type YoutubeAPIKey = LazyLoading extends LazyLoadingDisabled ? EagerYoutubeAPIKey : LazyYoutubeAPIKey

export declare const YoutubeAPIKey: (new (init: ModelInit<YoutubeAPIKey>) => YoutubeAPIKey) & {
  copyOf(source: YoutubeAPIKey, mutator: (draft: MutableModel<YoutubeAPIKey>) => MutableModel<YoutubeAPIKey> | void): YoutubeAPIKey;
}