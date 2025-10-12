export type Receipt = {
  id: string;
  date: string;
  text: string;
  submitter?: string;
};

export type User = {
  id: string;
  name: string;
  receipts: Receipt[];
};

export type Page = {
  id: string;
  name: string;
  banner: string;
  users: User[];
};

export const PAGES: Page[] = [
  { id: "p-americangran", name: "American Granboard Darts", banner: "/agd.jpg", users: [] },
  { id: "p-dartsden", name: "Darts Den", banner: "/dartsden.jpg", users: [] },
  { id: "p-flightclub", name: "Flight Club", banner: "/flightclub.jpg", users: [] },
  { id: "p-ftn", name: "FTN", banner: "/ftn.jpg", users: [] },
  { id: "p-grandarts", name: "GranDarts", banner: "/grandarts.jpg", users: [] },
  { id: "p-lvlmp", name: "LVLMP", banner: "/lvlmp.jpg", users: [] },
  { id: "p-mainstage", name: "Main Stage & Night Trips", banner: "/mainstage.jpg", users: [] },
  { id: "p-mindful", name: "Mindful Minds", banner: "/mindful.jpg", users: [] },
  { id: "p-nations", name: "Nations", banner: "/nations.jpg", users: [] },
  { id: "p-outkast", name: "Outkast", banner: "/outkast.jpg", users: [] },
  { id: "p-shooters", name: "Shooters", banner: "/shooters-banner.jpg", users: [] },
  { id: "p-hub", name: "The Hub", banner: "/thehub.jpg", users: [] },
  { id: "p-afterlife", name: "Thee Afterlife", banner: "/afterlife.jpg", users: [] },
  { id: "p-twitch", name: "Twitch Streamers", banner: "/twitch-banner.jpg", users: [] },
  { id: "p-unwanted", name: "Unwanted", banner: "/unwanted.jpg", users: [] },
];
