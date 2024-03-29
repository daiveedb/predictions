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
    disabled: false,
    url: "/tips",
  },
  {
    id: 3,
    title: "Pricing",
    disabled: false,
    url: "/pricing",
  },
  {
    id: 4,
    title: "Contact",
    disabled: false,
    url: "/contact",
  },
];

export const predictionOptions: string[] = [
  "Over 1.5",
  "Double chance",
  "Correct score",
  "Corners",
  "Score both halves",
  "HT/FT Draw",
  "BTS",
  "Win either half",
  "Win both halves",
  "1X2",
  "Handicap",
];

export const otherGames: gameIconProps[] = [
  {
    id: 1,
    game: "Quicka3x",
    imgSrc: "/predictionImages/quicka3x.png",
    url: "https://www.wisewinn.com/quika",
  },
  {
    id: 2,
    game: "Instant Cashout",
    imgSrc: "/predictionImages/instantCashout.png",
    url: "https://www.wisewinn.com/instant-cashout",
  },
  {
    id: 3,
    game: "Slots",
    imgSrc: "/predictionImages/slots.png",
    url: "https://games.wisewinn.com/",
  },
  {
    id: 4,
    game: "Awoof",
    imgSrc: "/predictionImages/awoof.png",
    url: "https://www.wisewinn.com/awoof",
  },
  {
    id: 5,
    game: "Soccer Cash",
    imgSrc: "/predictionImages/soccerCash.png",
    url: "https://www.wisewinn.com/soccer-cash",
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

export const superFreePicks = {
  today: [
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      tip: "Home win",
      odds: 2.55,
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      tip: "Home win",
      odds: 2.55,
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      tip: "Home win",
      odds: 2.55,
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      tip: "Home win",
      odds: 2.55,
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      tip: "Home win",
      odds: 2.55,
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      tip: "Home win",
      odds: 2.55,
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      tip: "Home win",
      odds: 2.55,
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      tip: "Home win",
      odds: 2.55,
    },
  ],
  yesterday: [
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      result: "Roma win ",
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      result: "Roma win ",
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      result: "Roma win ",
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      result: "Roma win ",
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      result: "Roma win ",
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      result: "Roma win ",
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      result: "Roma win ",
    },
    {
      time: "3:00pm",
      competition: "Seria A",
      fixture: "Roma vs Napoli",
      result: "Roma win ",
    },
  ],
};

export const predictionPacks = {
  weekly: [
    {
      id: 101,
      name: "Starter Pack",
      price: 6000,
      benefits: [
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
      ],
    },
    {
      id: 102,
      name: "Starter Pack",
      price: 12000,
      benefits: [
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
      ],
    },
    {
      id: 103,
      name: "Starter Pack",
      price: 17000,
      benefits: [
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
      ],
    },
    {
      id: 104,
      name: "Starter Pack",
      price: 22000,
      benefits: [
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
      ],
    },
  ],
  monthly: [
    {
      id: 201,
      name: "Starter Pack",
      price: 50000,
      benefits: [
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
      ],
    },
    {
      id: 202,
      name: "Starter Pack",
      price: 70000,
      benefits: [
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
      ],
    },
    {
      id: 203,
      name: "Starter Pack",
      price: 86000,
      benefits: [
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
      ],
    },
    {
      id: 204,
      name: "Starter Pack",
      price: 106000,
      benefits: [
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
        "Access to daily sure 2 odds",
      ],
    },
  ],
};
