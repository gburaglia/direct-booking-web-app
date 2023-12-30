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
      description: [
        "Escape to the mountains and enjoy the peacefulness and solitude this 3 bedroom 2 full bath cabin provides. The cabin is located in the renowned Sky arbor community, and offers a 6-person hot-tub, renovated bathrooms, and abundance of space. Our goal is to provide a cabin that not only feels secluded, but also offers plenty of entertainment, stargazing, and life-long memories.",
        "On the main level you will find a kitchen equipped with all common cooking utensils, pots and pans, silverware, glasses, mugs and plating needs. The main level also has an open-space living and dining room with a Roku TV, and a master bedroom with a king sized bed, dresser, closet, fan and second Roku TV. You can also find board games under the coffee table as well as in the chest underneath the TV.",
        "The second floor has two more bedrooms with fans, dressers and Roku TVs. The bedrooms are connected by a Jack and Jill full bathroom. One bedroom has a twin over full bunk bed, and the other has a full-sized bed. There is also a cozy sitting area with a desk, armchair and lamp, where you can work from home, read, or relax, all while taking in the seasonal mountain view.",
        "And if you get bored of the inside, make your way out to the deck to enjoy the 6-person hot tub, or relax at the outdoor dining table after grilling. There is a park grill located right by the stairs at the driveway. When dawn comes around, enjoy the ambiance offered by the LED lights and if you’d like, turn them off to stargaze!",      
      ],
      disclaimers: [
        "The wood panels are saw cut, there are some holes in them that were purposefully designed to add to the charm and character of the cabin. You are by no way exposed to the outdoors.", 
        "There is spotty cell phone signal (we have found that Verizon and AT&T work better than T-Mobile) given that you are entrenched in the mountains. We do have high speed WiFi so you can remain connected and make phone calls.", 
        "There is wildlife around the property. You may have the chance of seeing different animals walking around but that is all part of living in the mountains. Please respect the wildlife as we are in their house.", 
        "While all car types can access the cabin, please keep in mind that you will be driving up a mountain and that the driveway up to the cabin is slightly steep. If there is snow on the ground it is encouraged to use chains and have a vehicle with 4-wheel drive capabilities."
      ],
      extras: [
        "10 minutes to the Pigeon Forge strip", 
        "20 minutes to the national park",
        "Master bedroom with king sized bed, closet, and dresser",
        "Large private deck, hot tub, and patio furniture",
        "Real rustic feeling with all modern appliances and amenities. Plenty of board games too!",
        "HDTVs in the living room and each bedroom with bring-your-own-login streaming capability"
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
  }
];
