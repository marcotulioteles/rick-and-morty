import { compareArrays } from './index';

describe('Lib Utils', () => {
  it('should return array with unique objects', () => {
    const arrayState = [
      {
        id: "1",
        name: "Pilot",
        air_date: "December 2, 2013",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          },
          {
            id: "35",
            name: "Bepisian",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/35.jpeg"
          },
          {
            id: "38",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
          },
          {
            id: "62",
            name: "Canklanker Thom",
            status: "Dead",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/62.jpeg"
          },
          {
            id: "92",
            name: "Davin",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/92.jpeg"
          },
          {
            id: "127",
            name: "Frank Palicky",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/127.jpeg"
          },
          {
            id: "144",
            name: "Glenn",
            status: "Dead",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/144.jpeg"
          },
          {
            id: "158",
            name: "Hookah Alien",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/158.jpeg"
          },
          {
            id: "175",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
          },
          {
            id: "179",
            name: "Jessica",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/179.jpeg"
          },
          {
            id: "181",
            name: "Jessica's Friend",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/181.jpeg"
          },
          {
            id: "239",
            name: "Mr. Goldenfold",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/239.jpeg"
          },
          {
            id: "249",
            name: "Mrs. Sanchez",
            status: "unknown",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/249.jpeg"
          },
          {
            id: "271",
            name: "Principal Vagina",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/271.jpeg"
          },
          {
            id: "338",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
          },
          {
            id: "394",
            name: "Davin",
            status: "Dead",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/394.jpeg"
          },
          {
            id: "395",
            name: "Greebybobe",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/395.jpeg"
          },
          {
            id: "435",
            name: "Pripudlian",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/435.jpeg"
          }
        ]
      },
      {
        id: "2",
        name: "Lawnmower Dog",
        air_date: "December 9, 2013",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          },
          {
            id: "38",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
          },
          {
            id: "46",
            name: "Bill",
            status: "unknown",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/46.jpeg"
          },
          {
            id: "63",
            name: "Centaur",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/63.jpeg"
          },
          {
            id: "80",
            name: "Creepy Little Girl",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/80.jpeg"
          },
          {
            id: "175",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
          },
          {
            id: "221",
            name: "Melissa",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/221.jpeg"
          },
          {
            id: "239",
            name: "Mr. Goldenfold",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/239.jpeg"
          },
          {
            id: "246",
            name: "Mrs. Pancakes",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/246.jpeg"
          },
          {
            id: "304",
            name: "Scary Brandon",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/304.jpeg"
          },
          {
            id: "305",
            name: "Scary Glenn",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/305.jpeg"
          },
          {
            id: "306",
            name: "Scary Terry",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/306.jpeg"
          },
          {
            id: "329",
            name: "Snuffles (Snowball)",
            status: "Alive",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/329.jpeg"
          },
          {
            id: "338",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
          },
          {
            id: "396",
            name: "Scary Teacher",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/396.jpeg"
          },
          {
            id: "397",
            name: "Fido",
            status: "Alive",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/397.jpeg"
          },
          {
            id: "398",
            name: "Accountant dog",
            status: "Alive",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/398.jpeg"
          },
          {
            id: "405",
            name: "Trunkphobic suspenders guy",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/405.jpeg"
          }
        ]
      },
      {
        id: "5",
        name: "Meeseeks and Destroy",
        air_date: "January 20, 2014",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          },
          {
            id: "38",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
          },
          {
            id: "41",
            name: "Big Boobed Waitress",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/41.jpeg"
          },
          {
            id: "89",
            name: "Dale",
            status: "Dead",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/89.jpeg"
          },
          {
            id: "116",
            name: "Evil Beth Clone",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/116.jpeg"
          },
          {
            id: "117",
            name: "Evil Jerry Clone",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/117.jpeg"
          },
          {
            id: "120",
            name: "Evil Summer Clone",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/120.jpeg"
          },
          {
            id: "175",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
          },
          {
            id: "193",
            name: "King Jellybean",
            status: "Dead",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/193.jpeg"
          },
          {
            id: "238",
            name: "Mr. Booby Buyer",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/238.jpeg"
          },
          {
            id: "242",
            name: "Mr. Meeseeks",
            status: "unknown",
            species: "Humanoid",
            image: "https://rickandmortyapi.com/api/character/avatar/242.jpeg"
          },
          {
            id: "271",
            name: "Principal Vagina",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/271.jpeg"
          },
          {
            id: "303",
            name: "Samantha",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/303.jpeg"
          },
          {
            id: "326",
            name: "Slippery Stair",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/326.jpeg"
          },
          {
            id: "333",
            name: "Stair Goblin",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/333.jpeg"
          },
          {
            id: "338",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
          },
          {
            id: "343",
            name: "Tammy Guetermann",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/343.jpeg"
          },
          {
            id: "399",
            name: "Tiny-persons advocacy group lawyer",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/399.jpeg"
          },
          {
            id: "400",
            name: "Giant Judge",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/400.jpeg"
          }
        ]
      },
      {
        id: "6",
        name: "Rick Potion #9",
        air_date: "January 27, 2014",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          },
          {
            id: "3",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          },
          {
            id: "4",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          },
          {
            id: "5",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          },
          {
            id: "38",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
          },
          {
            id: "58",
            name: "Brad",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/58.jpeg"
          },
          {
            id: "82",
            name: "Cronenberg Rick",
            status: "unknown",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/82.jpeg"
          },
          {
            id: "83",
            name: "Cronenberg Morty",
            status: "unknown",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/83.jpeg"
          },
          {
            id: "92",
            name: "Davin",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/92.jpeg"
          },
          {
            id: "155",
            name: "Harold",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/155.jpeg"
          },
          {
            id: "175",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
          },
          {
            id: "179",
            name: "Jessica",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/179.jpeg"
          },
          {
            id: "181",
            name: "Jessica's Friend",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/181.jpeg"
          },
          {
            id: "216",
            name: "MC Haps",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/216.jpeg"
          },
          {
            id: "234",
            name: "Morty Smith",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/234.jpeg"
          },
          {
            id: "239",
            name: "Mr. Goldenfold",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/239.jpeg"
          },
          {
            id: "249",
            name: "Mrs. Sanchez",
            status: "unknown",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/249.jpeg"
          },
          {
            id: "251",
            name: "Nancy",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/251.jpeg"
          },
          {
            id: "271",
            name: "Principal Vagina",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/271.jpeg"
          },
          {
            id: "293",
            name: "Rick Sanchez",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/293.jpeg"
          },
          {
            id: "338",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
          },
          {
            id: "343",
            name: "Tammy Guetermann",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/343.jpeg"
          },
          {
            id: "394",
            name: "Davin",
            status: "Dead",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/394.jpeg"
          }
        ]
      }
    ]

    const arrayReceived = [
      {
        id: "1",
        name: "Pilot",
        air_date: "December 2, 2013",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          },
          {
            id: "35",
            name: "Bepisian",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/35.jpeg"
          },
          {
            id: "38",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
          },
          {
            id: "62",
            name: "Canklanker Thom",
            status: "Dead",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/62.jpeg"
          },
          {
            id: "92",
            name: "Davin",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/92.jpeg"
          },
          {
            id: "127",
            name: "Frank Palicky",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/127.jpeg"
          },
          {
            id: "144",
            name: "Glenn",
            status: "Dead",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/144.jpeg"
          },
          {
            id: "158",
            name: "Hookah Alien",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/158.jpeg"
          },
          {
            id: "175",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
          },
          {
            id: "179",
            name: "Jessica",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/179.jpeg"
          },
          {
            id: "181",
            name: "Jessica's Friend",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/181.jpeg"
          },
          {
            id: "239",
            name: "Mr. Goldenfold",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/239.jpeg"
          },
          {
            id: "249",
            name: "Mrs. Sanchez",
            status: "unknown",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/249.jpeg"
          },
          {
            id: "271",
            name: "Principal Vagina",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/271.jpeg"
          },
          {
            id: "338",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
          },
          {
            id: "394",
            name: "Davin",
            status: "Dead",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/394.jpeg"
          },
          {
            id: "395",
            name: "Greebybobe",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/395.jpeg"
          },
          {
            id: "435",
            name: "Pripudlian",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/435.jpeg"
          }
        ]
      },
      {
        id: "2",
        name: "Lawnmower Dog",
        air_date: "December 9, 2013",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          },
          {
            id: "38",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
          },
          {
            id: "46",
            name: "Bill",
            status: "unknown",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/46.jpeg"
          },
          {
            id: "63",
            name: "Centaur",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/63.jpeg"
          },
          {
            id: "80",
            name: "Creepy Little Girl",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/80.jpeg"
          },
          {
            id: "175",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
          },
          {
            id: "221",
            name: "Melissa",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/221.jpeg"
          },
          {
            id: "239",
            name: "Mr. Goldenfold",
            status: "Alive",
            species: "Cronenberg",
            image: "https://rickandmortyapi.com/api/character/avatar/239.jpeg"
          },
          {
            id: "246",
            name: "Mrs. Pancakes",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/246.jpeg"
          },
          {
            id: "304",
            name: "Scary Brandon",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/304.jpeg"
          },
          {
            id: "305",
            name: "Scary Glenn",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/305.jpeg"
          },
          {
            id: "306",
            name: "Scary Terry",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/306.jpeg"
          },
          {
            id: "329",
            name: "Snuffles (Snowball)",
            status: "Alive",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/329.jpeg"
          },
          {
            id: "338",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
          },
          {
            id: "396",
            name: "Scary Teacher",
            status: "Alive",
            species: "Mythological Creature",
            image: "https://rickandmortyapi.com/api/character/avatar/396.jpeg"
          },
          {
            id: "397",
            name: "Fido",
            status: "Alive",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/397.jpeg"
          },
          {
            id: "398",
            name: "Accountant dog",
            status: "Alive",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/398.jpeg"
          },
          {
            id: "405",
            name: "Trunkphobic suspenders guy",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/405.jpeg"
          }
        ]
      },
      {
        id: "7",
        name: "Raising Gazorpazorp",
        air_date: "March 10, 2014",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          },
          {
            id: "3",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          },
          {
            id: "4",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          },
          {
            id: "5",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          },
          {
            id: "59",
            name: "Brad Anderson",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/59.jpeg"
          },
          {
            id: "151",
            name: "Gwendolyn",
            status: "unknown",
            species: "Robot",
            image: "https://rickandmortyapi.com/api/character/avatar/151.jpeg"
          },
          {
            id: "168",
            name: "Jackie",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/168.jpeg"
          },
          {
            id: "211",
            name: "Ma-Sha",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/211.jpeg"
          },
          {
            id: "230",
            name: "Morty Jr.",
            status: "Alive",
            species: "Humanoid",
            image: "https://rickandmortyapi.com/api/character/avatar/230.jpeg"
          },
          {
            id: "258",
            name: "Pawnshop Clerk",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/258.jpeg"
          },
          {
            id: "329",
            name: "Snuffles (Snowball)",
            status: "Alive",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/329.jpeg"
          },
          {
            id: "376",
            name: "Veronica Ann Bennet",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/376.jpeg"
          },
          {
            id: "401",
            name: "Morty Jr's interviewer",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/401.jpeg"
          }
        ]
      }
    ]

    const arrayExpect = [
      {
        id: "7",
        name: "Raising Gazorpazorp",
        air_date: "March 10, 2014",
        characters: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          },
          {
            id: "3",
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          },
          {
            id: "4",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          },
          {
            id: "5",
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          },
          {
            id: "59",
            name: "Brad Anderson",
            status: "Dead",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/59.jpeg"
          },
          {
            id: "151",
            name: "Gwendolyn",
            status: "unknown",
            species: "Robot",
            image: "https://rickandmortyapi.com/api/character/avatar/151.jpeg"
          },
          {
            id: "168",
            name: "Jackie",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/168.jpeg"
          },
          {
            id: "211",
            name: "Ma-Sha",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/211.jpeg"
          },
          {
            id: "230",
            name: "Morty Jr.",
            status: "Alive",
            species: "Humanoid",
            image: "https://rickandmortyapi.com/api/character/avatar/230.jpeg"
          },
          {
            id: "258",
            name: "Pawnshop Clerk",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/258.jpeg"
          },
          {
            id: "329",
            name: "Snuffles (Snowball)",
            status: "Alive",
            species: "Animal",
            image: "https://rickandmortyapi.com/api/character/avatar/329.jpeg"
          },
          {
            id: "376",
            name: "Veronica Ann Bennet",
            status: "Alive",
            species: "Alien",
            image: "https://rickandmortyapi.com/api/character/avatar/376.jpeg"
          },
          {
            id: "401",
            name: "Morty Jr's interviewer",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/401.jpeg"
          }
        ]
      }
    ]

    const arrayResult = compareArrays(arrayState, arrayReceived);

    expect(arrayExpect).toEqual(arrayResult);
  });
});