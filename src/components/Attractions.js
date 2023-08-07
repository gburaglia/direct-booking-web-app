import React, { Component } from 'react'
import {FaHiking,FaBeer,FaWater,FaHotTub} from "react-icons/fa"
import Title from "./Title"
export default class Services extends Component {
    state={
        attractions:[
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem ipsum dolor sit amet consectetur adipiscing ElementInternals. Magni, corporis!'
            },
            {
                icon:<FaBeer/>,
                title:"Local Breweries",
                info:'Lorem ipsum dolor sit amet consectetur adipiscing ElementInternals. Magni, corporis!'
            },
            {
                icon:<FaWater/>,
                title:"Beautiful Rivers",
                info:'Lorem ipsum dolor sit amet consectetur adipiscing ElementInternals. Magni, corporis!'
            },
            {
                icon:<FaHotTub/>,
                title:"Private Hot-tub",
                info:'Lorem ipsum dolor sit amet consectetur adipiscing ElementInternals. Magni, corporis!'
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

