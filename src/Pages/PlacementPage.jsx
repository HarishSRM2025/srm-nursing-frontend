import '../Styles/placement.css';
import PlacementStats from "../Components/Placement/PlacementStats";
import PlacementOverview from "../Components/Placement/PlacementOverview";
import PlacementInternational from "../Components/Placement/PlacementInternational";
import PlacementPartners from "../Components/Placement/PlacementPartners";
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
        <PlacementInternational/>
        <PlacementPartners/>
        <PlacementCTA/>
      </div>
    </>
  );
}
