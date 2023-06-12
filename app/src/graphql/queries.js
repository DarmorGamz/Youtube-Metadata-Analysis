/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getYoutubeAPIKey = /* GraphQL */ `
  query GetYoutubeAPIKey($id: ID!) {
    getYoutubeAPIKey(id: $id) {
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
export const listYoutubeAPIKeys = /* GraphQL */ `
  query ListYoutubeAPIKeys(
    $filter: ModelYoutubeAPIKeyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listYoutubeAPIKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        apiKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncYoutubeAPIKeys = /* GraphQL */ `
  query SyncYoutubeAPIKeys(
    $filter: ModelYoutubeAPIKeyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncYoutubeAPIKeys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        apiKey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
