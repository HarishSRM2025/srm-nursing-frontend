import { useEffect, useState } from "react";
import LogoImg from '../../assets/images/Logo/logo.png'
import {
  FaHospitalUser,
  FaChevronDown,
  FaCommentDots,
  FaUserTie,
  FaUsers,
  FaSitemap,
  FaGraduationCap,
  FaBook,
  FaFlask,
  FaFileAlt,
  FaBed,
  FaHandsHelping,
  FaRunning,
  FaBars,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";
import { IoManSharp } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import axios from "axios";

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
      label: "Administration",
      children: [
        { icon: <FaSitemap />, label: "Organizational Structure", href: "#" },
        { icon: <IoManSharp />, label: "Code of Conduct", href: "/code-of-conduct" },
      ],
    },
    {
      label: "Academics",
      href: "/academics",
      children: [
        { icon: <FaBook />, label: "Departments", href: "/departments" },
        { icon: <FaBook />, label: "Academic Calendar", href: "#" },
      ],
    },
    { label: "Facilities", href: "/facilities" },
    { label: "Associations", href: "/associations" },
    { label: "Placement", href: "/placements" },
    { label: "Research", href: "/research" },
    { label: "Contact", href: "#contact" },
  ];

  const newsletterLink = {
    label: "Newsletters",
    children: newsletters
      .filter((nl) => nl.status === "active")
      .map((nl) => ({
        icon: <FaBook />,
        label: nl.title,
        href: `${import.meta.env.VITE_BACKEND_API_URL}/uploads/${nl.fileName}`,
      })),
  };

  const navLinks = [...staticLinks.slice(0, 3), newsletterLink, ...staticLinks.slice(3)];

  // Determine active parent index
  const activeParentIndex = navLinks.findIndex((link) =>
    link.children && link.children.some((child) => {
      if (!child.href) return false;
      return child.href.startsWith("#")
        ? location.pathname === "/" && location.hash === child.href
        : location.pathname === child.href;
    })
  );

  const [openSub, setOpenSub] = useState(activeParentIndex !== -1 ? activeParentIndex : null);

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
    return link.children?.some((child) => isLinkActive(child.href));
  };

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
                    {link.children.map((child) => (
                      child.href?.startsWith("#") ? (
                        <a
                          key={child.label}
                          href={child.href}
                          className={isLinkActive(child.href) ? "active" : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            handleAnchor(child.href);
                          }}
                        >
                          {child.icon} {child.label}
                        </a>
                      ) : child.href?.startsWith("http") ? (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {child.icon} {child.label}
                        </a>
                      ) : (
                        <NavLink
                          key={child.label}
                          to={child.href}
                          className={({ isActive }) => (isActive ? "active" : "")}
                        >
                          {child.icon} {child.label}
                        </NavLink>
                      )
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={(e) => { e.preventDefault(); handleAnchor("#contact"); }}>
                <FaPaperPlane /> Apply Now
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
                    {link.children.map((child) => (
                      child.href?.startsWith("#") ? (
                        <a
                          key={child.label}
                          href={child.href}
                          className={isLinkActive(child.href) ? "active" : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            handleAnchor(child.href);
                          }}
                        >
                          {child.label}
                        </a>
                      ) : child.href?.startsWith("http") ? (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOcOpen(false)}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <NavLink
                          key={child.label}
                          to={child.href}
                          className={({ isActive }) => (isActive ? "active" : "")}
                          onClick={() => setOcOpen(false)}
                        >
                          {child.label}
                        </NavLink>
                      )
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="offcanvas-footer">
          <Link to="#contact" onClick={(e) => { e.preventDefault(); handleAnchor("#contact"); }}>
            <FaPaperPlane /> Apply for Admission
          </Link>
        </div>
      </aside>
    </>
  );
}
