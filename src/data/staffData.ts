export interface Staff {
  id: number;
  name: string;
  fullName: string;
  role: string;
  bio: string;
  description1: string;
  description2: string;
  description3: string;
  image: string;
  color: string;
  mail?: string;
  funImage: string;
  number: string;
}

export const staffData: Staff[] = [
  {
    id: 1,
    name: 'Martina',
    fullName: 'Martina Kreivi',
    role: 'Developer',
    bio: 'Martina is a frontend developer who combines design with technical skills.',
    description1:
      'Meet Martina, our dedicated frontend developer with a passion for design and accessibility. With a keen eye for aesthetics and a commitment to making websites inclusive for all users, Martinas brings a unique blend of creativity and technical expertise to our team.',
    description2:
      'Martinas expertise lies in crafting visually stunning and user-friendly websites that not only captivate your audience but also ensure that everyone can access and navigate your content seamlessly. Her meticulous attention to detail means that your website will not only look great but also be fully optimized for performance. When Martina isnt coding or perfecting the user experience, you can find her exploring the latest design trends and brainstorming innovative ways to enhance your web presence.',
    description3:
      'With her at the helm of your frontend development, you can rest assured that your website will be a masterpiece of both form and function. Join us in welcoming Martina to our team and let her expertise elevate your online presence to new heights.',
    image: '../src/assets/staff/martina.png',
    color: '#DEB8FC',
    mail: 'martina.kreivi@medieinstitutet.se',
    funImage: '../src/assets/bike.png',
    number: '0701234567',
  },
  {
    id: 2,
    name: 'Hampus',
    fullName: 'Hampus Isebring',
    role: 'Developer',
    bio: 'Hampus is a frontend developer with a background in graphic design.',
    description1:
      'Meet Hampus, our multi-talented developer who brings a unique blend of graphic design and functionality to our team. With a background in visual aesthetics and a passion for creating highly functional websites, Hampus is your go-to expert for bringing beauty and brains to your online presence.',
    description2:
      'Hampus combines his graphic design skills with a deep understanding of web development to create websites that are not only visually stunning but also incredibly functional. His attention to detail and commitment to user experience ensures that your website not only captures attention but also keeps visitors engaged. Beyond his technical prowess, Hampus is constantly pushing the boundaries of whats possible in web design, seeking out innovative solutions to make your site as functional as it can be. ',
    description3:
      'Hes not just a developer; hes a creative problem-solver, always looking for ways to enhance your online presence. When hes not immersed in code or perfecting designs, youll find Hampus exploring the latest trends in web development and pushing the boundaries of whats possible. Join us in welcoming Hampus to our team and let his unique combination of skills elevate your website to new heights of functionality and beauty.',
    image: '../src/assets/staff/hampus.png',
    color: '#353519',
    mail: 'hampus.isebring@medieinstitutet.se',
    funImage: '../src/assets/earth.png',
    number: '0701234567',
  },
  {
    id: 3,
    name: 'Moa',
    fullName: 'Moa Hedendahl',
    role: 'Developer',
    bio: 'Moa is a frontend developer with a passion for UX and graphic design.',
    description1:
      'Meet Moa, our versatile frontend developer who brings a creative touch to both the technical and visual aspects of web development. With a love for crafting exceptional user experiences and an eye for captivating graphic design, Moa is your go-to expert for a well-rounded web presence. ',
    description2:
      'Moas expertise extends beyond coding; she excels in creating seamless user experiences that leave a lasting impression on your audience. Her user-centric approach ensures that your website is not only functional but also intuitively designed to meet the needs of your visitors. What sets Moa apart is her ability to combine her frontend development skills with a keen sense of aesthetics.',
    description3:
      'She seamlessly bridges the gap between code and design, ensuring that your website not only performs flawlessly but also looks stunning. When Moa isnt immersed in code or perfecting designs, youll find her exploring the latest UX trends and experimenting with innovative graphic design concepts. Join us in welcoming Moa to our team, and let her unique blend of skills elevate your web projects to new heights of user satisfaction and visual appeal.',
    image: '../src/assets/staff/moa.png',
    color: '#E9CF81',
    mail: 'moa.hedendahl@medieinstitutet.se',
    funImage: '../src/assets/camp.png',
    number: '0701234567',
  },
  {
    id: 4,
    name: 'Yehad',
    fullName: 'Yehad Moussaoui',
    role: 'Developer',
    bio: 'Yehad is a frontend developer who values continuous learning.',
    description1:
      'Meet Yehad, our dedicated frontend developer who embodies a relentless thirst for knowledge and a commitment to excellence. With an unwavering dedication to personal and professional growth, Yehad is your go-to expert for staying at the forefront of web development trends.',
    description2:
      'Yehads passion for learning not only ensures that hes up-to-date with the latest frontend technologies but also allows him to bring fresh and innovative ideas to the table. His drive to do his best means that your website will benefit from his constant pursuit of perfection. ',
    description3:
      'As a frontend developer, Yehad is not only skilled in creating visually appealing websites but also in ensuring that they are user-friendly and responsive across all devices. His attention to detail and user-centric approach guarantee that your website will provide an exceptional experience to every visitor. Beyond his technical skills, Yehad is a true team player, always willing to collaborate and share his knowledge with others. Join us in welcoming Yehad to our team, and let his dedication to continuous learning and excellence enhance your web development projects.',
    image: '../src/assets/staff/yehad.png',
    color: '#F98638',
    mail: 'yehad.moussaoui@medieinstitutet.se',
    funImage: '../src/assets/staff.png',
    number: '0701234567',
  },
  {
    id: 5,
    name: 'Jenny',
    fullName: 'Jenny Pettersson',
    role: 'Developer',
    bio: 'Jenny is a frontend developer who specializes in functionality and databases.',
    description1:
      'Meet Jenny, our frontend developer who brings a unique focus to the heart of web development - database and functionality. With a passion for crafting robust and efficient websites, Jenny is your go-to expert when it comes to ensuring your web applications run seamlessly.',
    description2:
      'Jennys love for digging deep into databases and optimizing functionality means that your website will not only look fantastic but also perform flawlessly. Her knack for turning complex data structures into user-friendly features ensures that your users have a seamless and intuitive experience.',
    description3:
      'When shes not immersed in code, youll find Jenny exploring the latest advancements in web development and experimenting with innovative solutions to enhance user interactions. With Jennys expertise, you can trust that your frontend will not just be visually appealing, but also a powerhouse of functionality. Join us in welcoming Jenny to our team and let her database wizardry and functional finesse take your web applications to the next level.',
    image: '../src/assets/staff/jenny.png',
    color: '#FFAA9F',
    mail: 'jenny.pettersson@medieinstitutet.se',
    funImage: '../src/assets/cook.png',
    number: '0701234567',
  },
];
