import React, {Component} from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {PropertyContext} from "../context";

export default class SingleProperty extends Component {
  constructor(props){
    super(props);
    this.state = {
      slug:this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = PropertyContext;
  //componentDidMount(){}
  render() {
    const {getProperty} = this.context;
    const property = getProperty(this.state.slug);
    if(!property){
      return <div className="error">
        <h3>no such property could be found...</h3>
        <Link to='/properties' className="btn-primary">
          back to properties
        </Link>
        </div>
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images} = property
    return <Hero hero='roomsHero'> 
    <Banner title={`${name} property`}> 
    <Link to="/properties" className="btn-primary">back to properties
    </Link>
    </Banner>
    </Hero>
  }
}