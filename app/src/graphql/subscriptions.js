/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateYoutubeAPIKey = /* GraphQL */ `
  subscription OnCreateYoutubeAPIKey(
    $filter: ModelSubscriptionYoutubeAPIKeyFilterInput
    $owner: String
  ) {
    onCreateYoutubeAPIKey(filter: $filter, owner: $owner) {
      id
      apiKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateYoutubeAPIKey = /* GraphQL */ `
  subscription OnUpdateYoutubeAPIKey(
    $filter: ModelSubscriptionYoutubeAPIKeyFilterInput
    $owner: String
  ) {
    onUpdateYoutubeAPIKey(filter: $filter, owner: $owner) {
      id
      apiKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteYoutubeAPIKey = /* GraphQL */ `
  subscription OnDeleteYoutubeAPIKey(
    $filter: ModelSubscriptionYoutubeAPIKeyFilterInput
    $owner: String
  ) {
    onDeleteYoutubeAPIKey(filter: $filter, owner: $owner) {
      id
      apiKey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
