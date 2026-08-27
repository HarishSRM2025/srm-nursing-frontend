import React from 'react';
import '../Styles/GreenCampus.css'
import GreenCampusIntro from '../Components/GreenCampus/GreenCampusIntro';

import CleanCampus from '../Components/GreenCampus/CleanCampus';
import WasteSegregation from '../Components/GreenCampus/WasteSegregation';
import PlasticBan from '../Components/GreenCampus/PlasticBan';
import GreenCover from '../Components/GreenCampus/GreenCover';
import SolarEnergy from '../Components/GreenCampus/SolarEnergy';
import EVehicles from '../Components/GreenCampus/EVehicles';
import BiogasPlant from '../Components/GreenCampus/BiogasPlant';
import RainwaterHarvesting from '../Components/GreenCampus/RainwaterHarvesting';
import WaterTreatment from '../Components/GreenCampus/WaterTreatment';
import PedestrianPathways from '../Components/GreenCampus/PedestrianPathways';

import Certifications from '../Components/GreenCampus/Certifications';
import GreenCampusGallery from '../Components/GreenCampus/GreenCampusGallery';
import GreenCampusCTA from '../Components/GreenCampus/GreenCampusCTA';
import Breadcrum from '../Components/Common/Breadcrum';

const GreenCampusPage = () => {
  return (
    <main className="green-campus-page">
      <Breadcrum title="Green Campus" subtitle="Home / Green Campus" />
      <GreenCampusIntro />

      <CleanCampus />
      <WasteSegregation />
      <PlasticBan />
      <GreenCover />
      <SolarEnergy />
      <EVehicles />
      <BiogasPlant />
      <RainwaterHarvesting />
      <WaterTreatment />
      <PedestrianPathways />

      <Certifications />
      <GreenCampusGallery />
      <GreenCampusCTA />
    </main>
  );
};

export default GreenCampusPage;
