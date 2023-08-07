import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Attractions from "../components/Attractions";
export default function Home() {
  return (
  <>
    <Hero> 
      <Banner title="luxury properties" subtitle="dream cabin getaway">
        <Link to="/properties" className="btn-primary">
          our properties
        </Link>
      </Banner>
    </Hero>
    <Attractions />
  </>
  )
}