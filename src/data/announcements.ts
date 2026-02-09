import { ConsulatBuilding } from "../assets/images";
import { AnnonceStMaroun } from "../assets/images/annonces";

export type Announcement = {
  id: number;
  title: string;
  text: string;
  date: string;
  time: string;
  image: string;
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    title: "Bureaux fermés",
    text: "Les bureaux du Consulat Général du Liban à Marseille sont fermés le Lundi 9 Février 2026.",
    date: "6 Février 2026",
    time: "09:00",
    image: AnnonceStMaroun,
  },
  {
    id: 2,
    title: "Lorem ipsum 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "01 Mars 2026",
    time: "08:30",
    image: ConsulatBuilding,
  },
  {
    id: 3,
    title: "Lorem ipsum 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "20 Mars 2026",
    time: "10:00",
    image: ConsulatBuilding,
  },
];
