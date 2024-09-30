export interface epkData {
  userId?: string;
  bio: string;
  discovery: string;
  streamingPlatforms: {
    appleMusic: string;
    spotify: string;
    soundcloud: string;
    youtube: string;
  };
  contact: {
    email: string;
    number: string;
    website: string;
  };
}
