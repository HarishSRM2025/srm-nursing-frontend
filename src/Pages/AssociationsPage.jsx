import React from 'react';
import AssoSNA from '../Components/Association/AssoSNA';
import AssoBearers from '../Components/Association/AssoBearers';
import AssoElection from '../Components/Association/AssoElection';
import AssoAlumni from '../Components/Association/AssoAlumni';
import AssoClubs from '../Components/Association/AssoClubs';
import AssoYRC from '../Components/Association/AssoYRC';
import AssoCTA from '../Components/Association/AssoCTA';
import '../Styles/association.css'
import Breadcrum from '../Components/Common/Breadcrum';
const AssociationsPage = () => {
  return (
    <>
      <Breadcrum title={"Associations"} />
      <AssoSNA />
      <AssoBearers />
      <AssoElection />
      <AssoAlumni />
      <AssoClubs />
      <AssoYRC />
      <AssoCTA />
    </>
  );
};

export default AssociationsPage;
