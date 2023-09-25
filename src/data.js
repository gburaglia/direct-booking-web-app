import room1 from "./images/bedroom-1.webp";
import img1 from "./images/living-room.webp";
import img2 from "./images/room-1.webp";
import {MdBedroomParent,MdLocationOn,MdGroups,MdBathroom} from "react-icons/md"
import imgDeck from "./images/deck.webp"
import imgOutside from "./images/outside.webp"

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Rustic Retreat",
      slug: "rustic-retreat",
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
      summary:[
        {
            icon:<MdLocationOn/>,
            title:"Sevierville, TN"
        },
        {
            icon:<MdGroups/>,
            title:"6 guests"
        },
        {
            icon:<MdBedroomParent/>,
            title:"3 rooms/4 beds"
        },
        {
            icon:<MdBathroom/>,
            title:"2 baths"
        },
      ],
      images: [
        {
          fields: {
            file: {
              url: imgOutside,
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
      ],
      galleryImages: [
        {
          src: imgOutside,
          width: 320,
          height: 174,
       },
       {
          src: room1,
          width: 320,
          height: 212,
       },
     
       {
          src: imgDeck,
          width: 320,
          height: 212,
       },
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
      ]
    }
  }
];
