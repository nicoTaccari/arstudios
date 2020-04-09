export const RESULTS = 9;

export const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY_YOUTUBE}&channelId=${process.env.CHANNEL_ID}&part=snippet,id&order=date&maxResults=${RESULTS}`;
export const CALENDAR_URL =
  "https://calendar.google.com/calendar?cid=${process.env.CHANNEL_ID}";
