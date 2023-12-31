import React, { Component } from 'react'
import {FaHiking,FaBeer,FaCity,FaHotTub} from "react-icons/fa"
import Title from "./Title"
export default class Services extends Component {
    state={
        attractions:[
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'The Great Smoky Mountain National Park is over 520,000 acres! Whether you are just getting into hiking or are a backcountry expert there is something for everyone. All of our cabins are a short drive to the national park!'
            },
            {
                icon:<FaBeer/>,
                title:"Pigeon Forge",
                info:'From the strip’s amusement parks, stores, restaurants and diners, to Dollywood, the wineries and breweries, and a plethora of temporary events and exhibits you will never be bored in Pigeon Forge!'
            },
            {
                icon:<FaCity/>,
                title:"Downtown Gatlinburg",
                info:'The last stop before the Smokies! Check out the views of the national park, the Arts and Crafts District, the aquarium or the many other things this cool town has to offer!'
            },
            {
                icon:<FaHotTub/>,
                title:"Private Hot Tub",
                info:'After a long day exploring the area make your way back to your cabin to enjoy a private deck, and hot tub. Once dawn starts to set in, enjoy the ambiance created by the LED lights.'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="popular attractions" />

                <div className="services-center">
                    {this.state.attractions.map((item, index)=> {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
           
        )
    }
}

