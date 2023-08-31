export interface Staff {
  id: number;
  name: string;
  fullName: string;
  role: string;
  bio: string;
  description: string;
  image: string;
  color: string;
  mail?: string;
}

export const staffData: Staff[] = [
  {
    id: 1,
    name: 'Martina',
    fullName: 'Martina Kreivi',
    role: 'Developer',
    bio: 'Martina är grym',
    description: 'Martina is a creative individual who also likes to develop',
    image: '../src/assets/staff/martina.png',
    color: '#DEB8FC',
    mail: 'martina.kreivi@medieinstitutet.se',
  },
  {
    id: 2,
    name: 'Hampus',
    fullName: 'Hampus Isebring',
    role: 'Developer',
    bio: 'Hampus är grym',
    description: 'Hampus is a creative individual who also likes to develop',
    image: '../src/assets/staff/hampus.png',
    color: '#353519',
    mail: 'hampus.isebring@medieinstitutet.se',
  },
  {
    id: 3,
    name: 'Moa',
    fullName: 'Moa Hedendahl',
    role: 'Developer',
    bio: 'Moa är grym',
    description: 'Moa is a creative individual who also likes to develop',
    image: '../src/assets/staff/moa.png',
    color: '#E9CF81',
    mail: 'moa.hedendahl@medieinstitutet.se',
  },
  {
    id: 4,
    name: 'Yehad',
    fullName: 'Yehad Moussaoui',
    role: 'Developer',
    bio: 'Yehad är grym',
    description: 'Yehad is a creative individual who also likes to develop',
    image: '../src/assets/staff/yehad.png',
    color: '#F98638',
    mail: 'yehad.moussaoui@medieinstitutet.se',
  },
  {
    id: 5,
    name: 'Jenny',
    fullName: 'Jenny Pettersson',
    role: 'Developer',
    bio: 'Jenny är grym',
    description: 'Jenny is a creative individual who also likes to develop',
    image: '../src/assets/staff/jenny.png',
    color: '#FFAA9F',
    mail: 'jenny.pettersson@medieinstitutet.se',
  },
];
