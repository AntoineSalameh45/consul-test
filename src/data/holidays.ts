export type Holiday = {
  id: string;
  name: string;
  month: number; // 0 = January
  days: number[];
};

export const HOLIDAYS_2026: Holiday[] = [
  { id: "new-year", name: "Jour de l'an", month: 0, days: [1] },
  { id: "armenian-christmas", name: "Noël arménien", month: 0, days: [6] },
  { id: "saint-maron", name: "Saint Maron", month: 1, days: [9] },
  { id: "annunciation", name: "Annonciation", month: 2, days: [25] },
  { id: "good-friday-catholic", name: "Vendredi saint catholique", month: 3, days: [3] },
  { id: "easter", name: "Pâques catholique", month: 3, days: [5, 6] },
  { id: "good-friday-orthodox", name: "Vendredi saint orthodoxe", month: 3, days: [10] },
  { id: "easter-orthodox", name: "Pâques orthodoxe", month: 3, days: [12, 13] },
  { id: "eid-al-fitr", name: "Eid al-Fitr", month: 2, days: [20, 21] },
  { id: "eid-al-adha", name: "Eid al-Adha", month: 4, days: [27, 28] },
  { id: "achoura", name: "Achoura", month: 5, days: [26] },
  { id: "assumption", name: "Assomption", month: 7, days: [15] },
  { id: "al-mawled", name: "Al Mawled", month: 7, days: [26] },
  { id: "independence", name: "Indépendance", month: 10, days: [22] },
  { id: "christmas", name: "Noël", month: 11, days: [25] },
];
