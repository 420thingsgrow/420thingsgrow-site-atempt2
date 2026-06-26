export type Video = {
  id: string; slug: string; title: string; description: string; publishedAt: string;
  thumbnail: string; url: string; embedUrl: string; duration?: string; tags: string[];
  year: number; aiSummary: string; aiTone?: "funny" | "dry" | "chaotic";
};