import room1 from "./images/bedroom-1.webp";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/living-room.webp";
import img2 from "./images/room-1.webp";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";

import imgDeck from "./images/deck.webp"
import imgOutside from "./images/outside.webp"

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Family Cabin",
      slug: "family-cabin",
      type: "single",
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
      "Escape to the mountains and enjoy the peacefulness and solitude this 3 bedroom 2 bath cabin provides. Nestled in the mountains between Gatlinburg and Pigeon Forge, in the Sky Harbor neighborhood, this family-built cabin offers everything you need for a memorable vacation. With a brand new hot-tub, renovated bathrooms, and abundance of space, our goal is to provide a cabin that not only is secluded among the tree-tops, but also offers plenty of entertainment, stargazing, and life-long memories.",
      extras: [
        "10 minutes to the strip, 20 minutes to the national park",
        "Master bedroom with king sized bed",
        "Hot tub, large deck, and patio furniture",
        "Real rustic feeling with all modern amenities",
        "TV with bring your own login streaming",
        "Internet",
        "Feels like lots of privacy but close to everything"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: imgDeck
            }
          }
        },
        {
          fields: {
            file: {
              url: imgOutside
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Individual Cabin",
      slug: "individual-cabin",
      type: "single",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
      "Property Coming Soon",
      extras: [
        "Coming soon",
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
];
