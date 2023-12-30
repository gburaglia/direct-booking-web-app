// import the useContext hook from 'react', no need for Component since we are using an RFC
import React, { useContext } from 'react'
import defaultBcg from '../images/room-1.webp'
import Banner from '../components/Banner'
import Hero from "../components/Hero";
import Attractions from "../components/Attractions";
import PropertySummary from "../components/PropertySummary";



// import the useParams hook from React Router
import { Link, useParams } from 'react-router-dom'
import { PropertyContext, RoomContext } from '../context'
import StyledHero from '../components/StyledHero'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles


// Transform the RCC to an RFC
export default function SingleProperty() {
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
  const { name, description, disclaimers, capacity, size, price, extras, breakfast, pets, images, summary } = property;
  const [mainImg, ...additionalImgs] = images;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              infiniteLoop={true}
              autoPlay={true}
              centerMode={true}
              centerSlidePercentage={100}
            >
                {additionalImgs.map((item, index) => {
                  return (
                    <StyledHero img={item}>
                      <Banner title={`${name}`}>
                        <Link to={`/properties/${slug}/images`} className='btn-primary'>
                          see all images
                        </Link>
                      </Banner>
                    </StyledHero>
                    
                  );
                })}
              
        </Carousel>
        <PropertySummary property={property} />
      <section className='single-room'>
        <div className="single-room-info">
          <article className='desc'>
          <h3>Cabin at a Glance</h3>
              <ul className="extras">
                {extras.map((item, index) => {
                  return <li key={index}>- {item}</li>;
                })}
              </ul>
            <article className='desc'>
              <h4>Details</h4>
              {description.map((element) => {
                return <p>{element}</p> 
                })}
                <h4>Important Disclaimers About Our Cabin</h4>
              {disclaimers.map((element) => {
                return <p>{element}</p> 
                })}
            </article>
            <article className='desc'>
              <h4>Why Book Here</h4>
              <p>Because we said so. You can trust us. Check out Airbnb and Vrbo listings to make sure.</p>
            </article>
          </article>
          <article className="info" width="320px" height="500px">
            <h3>book now</h3>
            <iframe id="booking-iframe" sandbox="allow-top-navigation allow-scripts allow-same-origin" style={{ width: "100%", minHeight: "500px" }} frameborder="0" src="https://booking.hospitable.com/widget/c1a7de2d-4d5f-415c-b4ec-81545dd29ff1/754564"></iframe>
          </article>
        </div>
        <div className="single-room-info">
          <section className='desc'>
            <h4>Also on Airbnb</h4>
            <div class="airbnb-embed-frame" data-id="28079405" data-view="home" style={{ width: "450px", minHeight: "500px" }} data-internal-initialized="1">
              <iframe src="https://www.airbnb.com/embeddable/home?externalPageUrl=https%3A%2F%2Fwww.getfloorspace.com%2Fembed-airbnb-calendar-on-website%2F&id=28079405#%7B%22frameId%22%3A1%2C%22tracking_PageUrl%22%3A%22https%3A%2F%2Fwww.getfloorspace.com%2Fembed-airbnb-calendar-on-website%2F%22%2C%22tracking_widgetName%22%3A%22home%22%7D" frameborder="0" style={{ border: "none", position: "relative", visibility: "visible", display: "block", margin: "10px", padding: "0px", width: "100%", minHeight: "500px", minWidth: "50px" }}></iframe>
            </div>
          </section>
          <section className='info'>
            <h4>Also on Vrbo</h4>
            <div class="airbnb-embed-frame" data-id="28079405" data-view="home" style={{ width: "450px", minHeight: "800px" }} data-internal-initialized="1">
              <iframe src="https://www.airbnb.com/embeddable/home?externalPageUrl=https%3A%2F%2Fwww.getfloorspace.com%2Fembed-airbnb-calendar-on-website%2F&id=28079405#%7B%22frameId%22%3A1%2C%22tracking_PageUrl%22%3A%22https%3A%2F%2Fwww.getfloorspace.com%2Fembed-airbnb-calendar-on-website%2F%22%2C%22tracking_widgetName%22%3A%22home%22%7D" frameborder="0" style={{ border: "none", position: "relative", visibility: "visible", display: "block", margin: "10px", padding: "0px", width: "100%", minHeight: "500px", minWidth: "50px" }}></iframe>
            </div>
          </section>
        </div>
      </section>
      <div className="single-room-images">
        </div>

    </>
  )
}