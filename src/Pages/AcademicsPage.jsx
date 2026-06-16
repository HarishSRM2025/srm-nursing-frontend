import AdmissionSection from '../Components/Accademics/AdmissionSection';
import CoursesSection from '../Components/Accademics/CoursesSection';
import DGNMSection from '../Components/Accademics/DGNMSection';
import MScNursingSection from '../Components/Accademics/MScNursingSection';
import CNESection from '../Components/Accademics/CNESection';
import AwardsSection from '../Components/Accademics/AwardsSection';
import AcademicCalendarSection from '../Components/Accademics/AcademicCalendarSection';
import GallerySection from '../Components/Accademics/GallerySection';
import CTASection from '../Components/Accademics/CTASection';
import '../Styles/academic.css';
import Breadcrum from '../Components/Common/Breadcrum';

export default function AcademicsPage() {
  return (<>
      <Breadcrum title={"Academics"} />
    <div className="academic-page">
      <AdmissionSection />
      <CoursesSection />
      <DGNMSection />
      <MScNursingSection />
      <CNESection />
      <AwardsSection />
      <AcademicCalendarSection />
      {/* <GallerySection /> */}
      <CTASection />
    </div>
    </>
  );
}
