import React, { useContext }  from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import PropertiesList from "../components/PropertiesList";
import { Gallery } from "react-grid-gallery";
// import the useParams hook from React Router
import { Link, useParams } from 'react-router-dom'
import { PropertyContext, RoomContext } from '../context'

export default function SinglePropertyImages() {
    // Get the slug using React Router's useParams hook
  const { slug } = useParams();
  // Get the context we defined in context.js using React's useContext hook
  const context = useContext(PropertyContext);
  // We access the getRoom function through our context (no need for 'this')
  const { getProperty } = context;
  // Get the room object that matches our slug (no need to access state)
  const property = getProperty(slug);
  if (!property) {
    return <div className='error'>
      <h3>no such property could be found</h3>
      <Link to='/properties' className='btn-primary'>
        back to properties
      </Link>
    </div>
  }
  const { name, description, capacity, size, price, extras, breakfast, pets, images, galleryImages, summary } = property;
  return (
    <>
    <Gallery images={galleryImages} />
  </>
  )
}