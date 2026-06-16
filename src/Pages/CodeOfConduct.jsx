import QuickNav from '../Components/CodeOfContact/QuickNav';
import Students from '../Components/CodeOfContact/Students';
import DressCode from '../Components/CodeOfContact/DressCode';
import AntiRagging from '../Components/CodeOfContact/AntiRagging';
import Faculty from '../Components/CodeOfContact/Faculty';
import SupportStaff from '../Components/CodeOfContact/SupportStaff';
import Hostel from '../Components/CodeOfContact/Hostel';
import '../Styles/coc.css';
import Principal from '../Components/CodeOfContact/Principal';
import Breadcrum from '../Components/Common/Breadcrum';


// ─── APP ───────────────────────────────────────────────────────
export default function CodeOfConduct_Responsive() {
  return (
    <>
      <Breadcrum title="Code of Conduct"/>
      <QuickNav/>
      <Students />
      <DressCode />
      <AntiRagging />
      <Principal/>
      <Faculty />
      <SupportStaff />
      <Hostel />
    </>
  );
}
