export const API_KEY_YOUTUBE = "AIzaSyDsYBYm-_l5FP4wGUxF0flHNq3xELb1J_c";
export const API_KEY_CALENDAR = "AIzaSyAa75ENYBYuR0iACuf7iYQQV37vbhEVzdE";
export const API_KEY_SENDGRID =
  "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";
export const CHANNEL_ID = "UCl2QUPd8gFPKMZN5b-MNL6g";
export const RESULTS = 9;

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyDsYBYm-_l5FP4wGUxF0flHNq3xELb1J_c&channelId=UCl2QUPd8gFPKMZN5b-MNL6g&part=snippet,id&order=date&maxResults=9

export const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY_YOUTUBE}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${RESULTS}`;
export const CALENDAR_URL =
  "https://calendar.google.com/calendar?cid=bmljb2xhc3RhY2NhcmlAZ21haWwuY29t";
