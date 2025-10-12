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
  { id: "p-americangran", name: "American Granboard Darts", banner: "/AGDbanner.jpg", users: [] },
  { id: "p-dartsden", name: "Darts Den", banner: "/dartdenbanner.jpg", users: [] },
  { id: "p-flightclub", name: "Flight Club", banner: "/flightclub.jpg", users: [] },
  { id: "p-ftn", name: "FTN", banner: "/ftn.jpg", users: [] },
  { id: "p-grandarts", name: "GranDarts", banner: "/grandartsbanner.jpg", users: [] },
  { id: "p-lvlmp", name: "LVLMP", banner: "/lvlmpbanner.jpg", users: [] },
  { id: "p-mainstage", name: "Main Stage & Night Trips", banner: "/mainstagebanner.jpg", users: [] },
  { id: "p-mindful", name: "Mindful Minds", banner: "/mindfulmindsbanner.jpg", users: [] },
  { id: "p-nations", name: "Nations", banner: "/nationsbanner.jpg", users: [] },
  { id: "p-outkast", name: "Outkast", banner: "/outkastbanner.jpg", users: [] },
  { id: "p-shooters", name: "Shooters", banner: "/shootersbanner.jpg", users: [] },
  { id: "p-hub", name: "The Hub", banner: "/hubbanner.jpeg", users: [] },
  { id: "p-afterlife", name: "Thee Afterlife", banner: "/afterlifebanner.jpeg", users: [] },
  { id: "p-twitch", name: "Twitch Streamers", banner: "/twitch-banner.jpg", users: [] },
  { id: "p-unwanted", name: "Unwanted", banner: "/unwantedbanner.jpeg", users: [] },
];
