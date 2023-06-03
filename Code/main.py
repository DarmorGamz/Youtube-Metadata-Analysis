import os
from googleapiclient.discovery import build
import pandas as pd
import re

# Fetch API key from environment variable
api_key = os.getenv('API_KEY')

# Check if API key is available
if api_key is None:
    raise ValueError("API_KEY environment variable is not set")

youtube = build('youtube', 'v3', developerKey=api_key)

# Read channel names from a text file
channel_names = []

with open('channel_names.txt', 'r') as file:
    for line in file:
        channel_name = line.strip()
        channel_names.append(channel_name)
if channel_names is None:
    raise ValueError("channel_names empty")

# # Print the channel names
# for channel_name in channel_names:
#     print(f"Channel Name: {channel_name}")

# Fetch channel IDs
channel_ids = []

for channel_name in channel_names:
    # Call the Channels.list API method to search for the channel
    request = youtube.channels().list(
        part='id',
        forUsername=channel_name
    )

    # Execute the API request and get the response
    response = request.execute()

    # Extract the channel ID from the response
    if 'items' in response:
        channel_id = response['items'][0]['id']
        channel_ids.append(channel_id)

# Append Channel Ids if they were manually given
with open('channel_ids.txt', 'r') as file:
    for line in file:
        channel_id = line.strip()
        channel_ids.append(channel_id)

# Remove duplicates from the channel_ids list
channel_ids = list(set(channel_ids))

# # Print the fetched channel IDs
# for channel_id in channel_ids:
#     print(f"Channel ID: {channel_id}")

# Initialize list to store video IDs
video_ids = []

# Fetch video IDs for each channel ID
for channel_id in channel_ids:
    # Call the Search.list API method to search for videos in the channel
    request = youtube.search().list(
        part='id',
        type='video',
        order='viewCount',  # This is what we'll work off of.
        channelId=channel_id,
        maxResults=1  # Adjust as needed, maximum is 50 per page
    )

    # Execute the API request and get the response
    response = request.execute()

    # Extract the video IDs from the API response
    for item in response['items']:
        video_id = item['id']['videoId']
        video_ids.append(video_id)

# Print the fetched video IDs
# for video_id in video_ids:
#     print(f"Video ID: {video_id}")

# Create an empty DataFrame to store video metadata
pd.set_option('display.max_columns', None)
video_data = pd.DataFrame()

# Fetch video metadata for each video ID
for video_id in video_ids:
    # Call the Videos.list API method to retrieve video metadata
    request = youtube.videos().list(
        part='snippet,statistics',
        id=video_id
    )

    # Execute the API request and get the response
    response = request.execute()

    # Extract the video metadata from the API response
    video_metadata = response['items'][0]['snippet']
    statistics = response['items'][0]['statistics']

    # Extract specific metadata fields (example: title, description, tags)
    title = video_metadata['title']
    description = video_metadata['description']
    tags = video_metadata['tags'] if 'tags' in video_metadata else []
    categoryId = video_metadata['categoryId']
    publishedAt = video_metadata['publishedAt']
    viewCount = statistics['viewCount']
    likeCount = statistics['likeCount']

    # Add video metadata to the DataFrame
    df2 = pd.DataFrame({'VideoID': video_id, 'Title': title, 'Description': description,
                        'Tags': tags, 'CategoryID': categoryId, 'PublishedAt': publishedAt,
                        'ViewCount': viewCount, 'LikeCount': likeCount})
    video_data = pd.concat([video_data, df2])

# Clean and preprocess the video data
video_data['Title'] = video_data['Title'].str.strip()  # Remove leading/trailing whitespace
video_data['Description'] = video_data['Description'].str.replace(r'\n', ' ')  # Replace newline characters with spaces

# Remove any unnecessary characters from the Tags column
# video_data['Tags'] = video_data['Tags'].apply(lambda tags: [re.sub(r'[^\w\s]', '', tag) for tag in tags])

# Handle missing values (NaN) if any
video_data.fillna('', inplace=True)

# Standardize text data (lowercase, remove special characters, etc.)
video_data['Title'] = video_data['Title'].str.lower()
video_data['Description'] = video_data['Description'].str.lower()

# Split 'publishedAt' into 'Date' and 'Time' columns
video_data['Date'] = pd.to_datetime(video_data['PublishedAt']).dt.date
video_data['Time'] = pd.to_datetime(video_data['PublishedAt']).dt.time

# Print the video data DataFrame
print(video_data)
