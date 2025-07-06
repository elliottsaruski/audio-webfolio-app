import { create } from "zustand";

type Track = {
  id: string;
  title: string;
  artist: string;
  waveformColor: string;
  progressColor: string;
  barSpacing: number;
  streamingLinks?: { [key: string]: string };
  additionalArtists?: string[];
  isPrivate?: boolean;
};

type Theme = {
  id: string;
  font: string;
  background: string;
  textColor: string;
};

type DashboardState = {
  tracks: Track[];
  theme: Theme | null;
  bio: string;
  loading: boolean;
  setTracks: (tracks: Track[]) => void;
  setTheme: (theme: Theme) => void;
  setBio: (bio: string) => void;
  setLoading: (loading: boolean) => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  tracks: [],
  theme: null,
  bio: "",
  loading: false,
  setTracks: (tracks) => set({ tracks }),
  setTheme: (theme) => set({ theme }),
  setBio: (bio) => set({ bio }),
  setLoading: (loading) => set({ loading }),
}));
