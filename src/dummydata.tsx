import { url } from "inspector";
import { navLinkProps } from "./components/Navigation/NavLink";
import { fixtureCardProps } from "./components/HomePage components/FixtureItemCard";
import { gameIconProps } from "./components/HomePage components/GameIcon";
import OutlineTelegram from "./app/icons/OutlineTelegram";
import OutlineTwitter from "./app/icons/OutlineTwittter";
import OutlineInstagram from "./app/icons/OutlineInstagram";
import OutlineFacebook from "./app/icons/OutlineFacebook";
import OutlineLinkedin from "./app/icons/OutlineLinkedIn";
import OutlineTelegramWhite from "./app/icons/OutlineTelegramWhite";
export const navLinks: navLinkProps[] = [
  {
    id: 1,
    title: "Home",
    disabled: false,
    url: "/",
  },
  {
    id: 2,
    title: "Tips",
    disabled: true,
    url: "/tips",
  },
  {
    id: 3,
    title: "Pricing",
    disabled: true,
    url: "/pricing",
  },
  {
    id: 4,
    title: "Contact",
    disabled: true,
    url: "/contact",
  },
];

export const upcomingFixtures: fixtureCardProps[] = [
  {
    team1: "Manchester United",
    team2: "Manchester City",
    date: "20 Jan, 2024 (5:00pm)",
    competition: "Premier League",
  },
  {
    team1: "Manchester United",
    team2: "Manchester City",
    date: "20 Jan, 2024 (5:00pm)",
    competition: "Premier League",
  },
  {
    team1: "Manchester United",
    team2: "Manchester City",
    date: "20 Jan, 2024 (5:00pm)",
    competition: "Premier League",
  },
  {
    team1: "Manchester United",
    team2: "Manchester City",
    date: "20 Jan, 2024 (5:00pm)",
    competition: "Premier League",
  },
  {
    team1: "Manchester United",
    team2: "Manchester City",
    date: "20 Jan, 2024 (5:00pm)",
    competition: "Premier League",
  },
  {
    team1: "Manchester United",
    team2: "Manchester City",
    date: "20 Jan, 2024 (5:00pm)",
    competition: "Premier League",
  },
  {
    team1: "Manchester United",
    team2: "Manchester City",
    date: "20 Jan, 2024 (5:00pm)",
    competition: "Premier League",
  },
  {
    team1: "Manchester United",
    team2: "Manchester City",
    date: "20 Jan, 2024 (5:00pm)",
    competition: "Premier League",
  },
];

export const predictionOptions: string[] = [
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
  "Over 1.5",
];

export const otherGames: gameIconProps[] = [
  {
    id: 1,
    game: "Quicka3x",
    imgSrc: "/predictionImages/quicka3x.png",
    url: "",
  },
  {
    id: 2,
    game: "Instant Cashout",
    imgSrc: "/predictionImages/instantCashout.png",
    url: "",
  },
  {
    id: 3,
    game: "Slots",
    imgSrc: "/predictionImages/slots.png",
    url: "",
  },
  {
    id: 4,
    game: "Awoof",
    imgSrc: "/predictionImages/awoof.png",
    url: "",
  },
  {
    id: 5,
    game: "Soccer Cash",
    imgSrc: "/predictionImages/soccerCash.png",
    url: "",
  },
];

export const socialIcons = [
  {
    id: 1,
    name: "X",
    icon: <OutlineTwitter />,
    url: "",
  },
  {
    id: 2,
    name: "Telegram",
    icon: <OutlineTelegramWhite />,
    url: "",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <OutlineInstagram />,
    url: "",
  },
  {
    id: 4,
    name: "Facebook",
    icon: <OutlineFacebook />,
    url: "",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: <OutlineLinkedin />,
    url: "",
  },
];
