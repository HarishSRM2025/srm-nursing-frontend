import { useState } from "react";
import { FiArrowDown, FiUsers, FiGlobe, FiHome, FiTrendingUp, FiCheckCircle, FiAward, FiBookOpen, FiMapPin, FiSend, FiHeart, FiStar, FiArrowRight, FiPhone, FiBriefcase, FiActivity } from "react-icons/fi";
import '../Styles/placement.css';
import PlacementStats from "../Components/Placement/PlacementStats";
import PlacementOverview from "../Components/Placement/PlacementOverview";
import PlacementHighlights from "../Components/Placement/PlacementHighlights";
import PlacementInternational from "../Components/Placement/PlacementInternational";
import PlacementPartners from "../Components/Placement/PlacementPartners";
import PlacementTestimonials from "../Components/Placement/PlacementTestimonials";
import PlacementCTA from "../Components/Placement/PlacementCTA";
import Breadcrum from "../Components/Common/Breadcrum";




/* ─── PAGE ─── */
export default function PlacementPage() {
  return (
    <>
      <div className="placement-page">
        <Breadcrum title={"Placements"} />
        <PlacementOverview/>
        <PlacementStats />
        <PlacementHighlights/>
        <PlacementInternational/>
        <PlacementPartners/>
        <PlacementCTA/>
      </div>
    </>
  );
}
