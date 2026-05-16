export type User = {
  id: number;
  imageUrl: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  stats: {
    followers: string;
    following: string;
    projects: number;
  };
  isAvailableForHire: boolean;
};
