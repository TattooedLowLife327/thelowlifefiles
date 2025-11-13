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
  { id: "p-365", name: "365", banner: "/365.png", users: [] },
  { id: "p-americangran", name: "American Granboard Darts", banner: "/AmeriCanGranboardDarts.png", users: [] },
  { id: "p-dartsden", name: "Darts Den", banner: "/DartsDen.png", users: [] },
  { id: "p-flightclub", name: "Flight Club", banner: "/FlightClub.png", users: [] },
  { id: "p-ftn", name: "FTN", banner: "/FTN.png", users: [] },
  { id: "p-grandarts", name: "GranDarts", banner: "/GranDarts.png", users: [] },
  { id: "p-granboardvets", name: "GranBoard Vets", banner: "/GranBoardVets.png", users: [] },
  { id: "p-lvlmp", name: "LVLMP", banner: "/LVLMP.png", users: [] },
  { id: "p-mainstage", name: "Main Stage & Night Trips", banner: "/MainStageNightTrips.png", users: [] },
  { id: "p-mindful", name: "Mindful Minds", banner: "/mindfulmindsbanner.jpg", users: [] },
  { id: "p-nations", name: "Nations", banner: "/Nations.png", users: [] },
  { id: "p-outkast", name: "Outkast", banner: "/OutKast.png", users: [] },
  { id: "p-shooters", name: "Shooters", banner: "/Shooters.png", users: [] },
  { id: "p-slacker", name: "Slacker", banner: "/Slacker.png", users: [] },
  { id: "p-hub", name: "The Hub", banner: "/TheHub.png", users: [] },
  { id: "p-afterlife", name: "Thee Afterlife", banner: "/TheeAfterlife.png", users: [] },
  { id: "p-twitch", name: "Twitch Streamers", banner: "/TwitchStreamers.png", users: [] },
  { id: "p-unwanted", name: "Unwanted", banner: "/Unwanted.png", users: [] },
];
