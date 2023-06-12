/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createYoutubeAPIKey = /* GraphQL */ `
  mutation CreateYoutubeAPIKey(
    $input: CreateYoutubeAPIKeyInput!
    $condition: ModelYoutubeAPIKeyConditionInput
  ) {
    createYoutubeAPIKey(input: $input, condition: $condition) {
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
export const updateYoutubeAPIKey = /* GraphQL */ `
  mutation UpdateYoutubeAPIKey(
    $input: UpdateYoutubeAPIKeyInput!
    $condition: ModelYoutubeAPIKeyConditionInput
  ) {
    updateYoutubeAPIKey(input: $input, condition: $condition) {
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
export const deleteYoutubeAPIKey = /* GraphQL */ `
  mutation DeleteYoutubeAPIKey(
    $input: DeleteYoutubeAPIKeyInput!
    $condition: ModelYoutubeAPIKeyConditionInput
  ) {
    deleteYoutubeAPIKey(input: $input, condition: $condition) {
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
