import React from 'react';
import FacOverview from '../Components/Facilities/FacOverview';
import FacStats from '../Components/Facilities/FacStats';
import FacGrid from '../Components/Facilities/FacGrid';
import FacFeatureSpotlight from '../Components/Facilities/FacFeatureSpotlight';
import FacTestimonials from '../Components/Facilities/FacTestimonials';
import FacCTA from '../Components/Facilities/FacCTA';
import '../Styles/facilities.css'
import Breadcrum from '../Components/Common/Breadcrum';

const FacilitiesPage = () => {
  return (
    <>
      <Breadcrum title={"Facilities"} />
      <FacOverview />
      <FacStats />
      <FacGrid />
      {/* <FacFeatureSpotlight/> */}
      <FacTestimonials />
      <FacCTA />
    </>
  );
};

export default FacilitiesPage;
