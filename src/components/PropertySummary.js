import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/living-room.jpg';
import PropTypes from 'prop-types';
import Title from "./Title"

export default function Property({property}) {
    const{summary} = property;
    return ( 
        <section className="services">
        <div className="services-center">
            {summary.map((item, index)=> {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                </article>
            })}
        </div>
    </section>
    );
    
}

Property.propTypes = {
    property:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string),
        //price:PropTypes.number.isRequired
    })
}
