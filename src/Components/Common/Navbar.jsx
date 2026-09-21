import { useEffect, useState } from "react";
import LogoImg from '../../assets/images/Logo/logo.png'
import organogramPdf from '../../PDF/SRMTCON_Organogram.pdf';
import academicCalendarPdf from '../../PDF/Academic_Calendar_2026.pdf';
import eventCalendarPdf from '../../PDF/Event _Calendar_2026.pdf';
import {
  FaHospitalUser,
  FaNewspaper,
  FaCalendarAlt,
  FaCalendarCheck,
  FaUniversity,
  FaHospital,
  FaBed,
  FaBus,
  FaCertificate,
  FaTrophy,
  FaChevronDown,
  FaChevronRight,
  FaSitemap,
  FaBook,
  FaHandsHelping,
  FaBars,
  FaTimes,
  FaTree,
} from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { FaBuildingLock } from "react-icons/fa6";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [ocOpen, setOcOpen] = useState(false);
  const [newsletters, setNewsletters] = useState([]);

  // Fetch newsletters on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/newsletter`);
        const data = response.data;
        setNewsletters(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching newsletters:', error);
      }
    };
    fetchData();
  }, []);

  // Build navigation links with dynamic newsletters
  const staticLinks = [
    { label: "Home", href: "/" },
    
    {
      label: "About us",
      children: [
        { icon: <FaSitemap />, label: "Organogram", href: organogramPdf, external: true },
        { icon: <IoManSharp />, label: "Code of Conduct", href: "/code-of-conduct" },
        {
          icon: <FaBuildingLock />,
          label: "Facilities",
          href: "/facilities",
          children: [
            { icon: <FaUniversity />, label: "College / Classroom / Lab / Library", href: "/facilities" },
            { icon: <FaHospital />, label: "Hospital / Clinical", href: "" },
            { icon: <FaBed />, label: "Hostel", href: "" },
            { icon: <FaBus />, label: "Transport", href: "" },
            { icon: <FaTree />, label: "Green Campus", href: "/green-campus" },
          ],
        },
      ],
    },
    {
      label: "Academics",
      children: [
        { icon: <FaBook />, label: "Overview", href: "/academics" },
        { icon: <FaUniversity />, label: "Department", href: "/departments" },
        { icon: <FaCertificate />, label: "Status (Affiliation)", href: "" },
        { icon: <FaCalendarAlt />, label: "Academic Calendar", href: academicCalendarPdf, external: true },
        { icon: <FaTrophy />, label: "Awards and Achievements", href: "" },
        { icon: <FaHandsHelping />, label: "Committees and Clubs", href: "/clubs" },
      ],
    },
    { label: "CNE", href: "" },
    { label: "Placement", href: "/placements" },
    { label: "Research", href: "/research" },
    {
      label: "Events",
      children: [
        { icon: <FaCalendarCheck />, label: "All Events", href: "/events" },
        { icon: <FaCalendarAlt />, label: "Event Calendar", href: eventCalendarPdf, external: true },
      ],
    },
    
  ];

  const newsletterLink = {
    label: "Newsletter",
    children: newsletters
      .filter((nl) => nl.status === "active")
      .map((nl) => ({
        icon: <FaNewspaper />,
        label: nl.title,
        href: `${import.meta.env.VITE_BACKEND_API_URL}/uploads/${nl.fileName}`,
      })),
  };

  const navLinks = [...staticLinks.slice(0, 6), newsletterLink, ...staticLinks.slice(6)];

  const isLinkActive = (href) => {
    if (!href) return false;
    if (href.startsWith("#")) {
      return location.pathname === "/" && location.hash === href;
    }
    return location.pathname === href;
  };

  const isParentActive = (link) => {
    if (!link) return false;
    if (isLinkActive(link.href)) return true;
    return link.children?.some((child) => isParentActive(child));
  };

  const activeParentIndex = navLinks.findIndex((link) => link.children && isParentActive(link));
  const [openSub, setOpenSub] = useState(activeParentIndex !== -1 ? activeParentIndex : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOcOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = ocOpen ? "hidden" : "";
  }, [ocOpen]);

  const handleAnchor = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
    setOcOpen(false);
  };

  const renderChild = (child, mobile = false) => {
    const content = <>{child.icon}<span>{child.label}</span></>;

    if (child.children && !mobile) {
      return (
        <div key={child.label} className="nav-facilities-group nav-flyout">
          <button type="button" className={`facility-trigger${isParentActive(child) ? " active" : ""}`}>
            {content}<FaChevronRight className="facility-chevron" />
          </button>
          <div className="nav-facility-links">
            {child.children.map((item) => renderChild(item))}
          </div>
        </div>
      );
    }

    if (child.children) {
      return (
        <details key={child.label} className="nav-facilities-group">
          <summary className={isParentActive(child) ? "active" : ""}>
            {content}<FaChevronDown className="facility-chevron" />
          </summary>
          <div className="nav-facility-links">
            {child.children.map((item) => renderChild(item, mobile))}
          </div>
        </details>
      );
    }
    let entry;

    if (!child.href) {
      entry = <a href="" aria-disabled="true" onClick={(e) => e.preventDefault()}>{content}</a>;
    } else if (child.external || child.href.startsWith("http")) {
      entry = <a href={child.href} target="_blank" rel="noopener noreferrer" onClick={() => mobile && setOcOpen(false)}>{content}</a>;
    } else {
      entry = <NavLink to={child.href} className={({ isActive }) => isActive ? "active" : ""} onClick={() => mobile && setOcOpen(false)}>{content}</NavLink>;
    }

    return (
      <div key={child.label}>
        {entry}
      </div>
    );
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" >
            {/* <div className="nav-logo-icon"><FaHospitalUser /></div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">SRM College</span>
              <span className="nav-logo-sub">of Nursing Excellence</span>
            </div> */}
            <img src={LogoImg} alt="SRM College of Nursing Excellence" className="nav-logo-img" />
          </Link>

          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children && !link.href ? (
                  <a href="#!" className={`nav-link${isParentActive(link) ? " active" : ""}`} onClick={(e) => e.preventDefault()}>
                    {link.label}
                    <FaChevronDown className="nav-chevron" />
                  </a>
                ) : !link.href ? (
                  <a href="" className="nav-link" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                    {link.label}
                  </a>
                ) : link.href?.startsWith("#") ? (
                  <a
                    href={link.href}
                    className={`nav-link${isLinkActive(link.href) ? " active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAnchor(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) => `nav-link${isActive || isParentActive(link) ? " active" : ""}`}
                  >
                    {link.label}
                    {link.children && <FaChevronDown className="nav-chevron" />}
                  </NavLink>
                )}
                {link.children && (
                  <div className="dropdown">
                    {link.children.map((child) => renderChild(child))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); handleAnchor("#contact"); }}>
                Apply Now
              </a>
            </li>
          </ul>

          <button className="nav-toggle" onClick={() => setOcOpen(true)}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Offcanvas */}
      <div className={`offcanvas-backdrop${ocOpen ? " open" : ""}`} onClick={() => setOcOpen(false)} />
      <aside className={`offcanvas${ocOpen ? " open" : ""}`}>
        <div className="offcanvas-header">
          <div className="offcanvas-logo">
            <div className="offcanvas-logo-icon"><FaHospitalUser /></div>
            <div>
              <div className="offcanvas-logo-name">SRM College</div>
              <div className="offcanvas-logo-sub">of Nursing Excellence</div>
            </div>
          </div>
          <button className="offcanvas-close" onClick={() => setOcOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="offcanvas-body">
          <ul className="offcanvas-nav">
            {navLinks.map((link, i) => (
              <li key={link.label} className={openSub === i ? "sub-open" : ""}>
                {link.children && !link.href ? (
                  <a
                    href="#!"
                    className={`nav-link${isParentActive(link) ? " active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenSub(openSub === i ? null : i);
                    }}
                  >
                    {link.label}
                    <FaChevronDown className="oc-chevron" />
                  </a>
                ) : !link.href ? (
                  <a href="" className="nav-link" aria-disabled="true" onClick={(e) => e.preventDefault()}>
                    {link.label}
                  </a>
                ) : link.href?.startsWith("#") ? (
                  <a
                    href={link.href}
                    className={`nav-link${isLinkActive(link.href) ? " active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAnchor(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) => `nav-link${isActive || isParentActive(link) ? " active" : ""}`}
                    onClick={() => setOcOpen(false)}
                  >
                    {link.label}
                    {link.children && <FaChevronDown className="oc-chevron" />}
                  </NavLink>
                )}
                {link.children && (
                  <div className={`offcanvas-sub${openSub === i ? " open" : ""}`}>
                    {link.children.map((child) => renderChild(child, true))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="offcanvas-footer">
          <Link to="#contact" onClick={(e) => { e.preventDefault(); handleAnchor("#contact"); }}>
            Apply for Admission
          </Link>
        </div>
      </aside>
    </>
  );
}
