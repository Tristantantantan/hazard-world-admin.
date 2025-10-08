import { useState } from "react";
import { Link } from "react-router-dom";
import hazardLogo from "../assets/hazard-logo.png";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Top header section for logo + toggle */}
      <div className="sidebar-header d-flex align-items-center justify-content-between px-3 py-2">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={hazardLogo}
            alt="Logo"
            width="160"
            height="40"
            className="my-2"
          />
        </Link>

        {/* Toggle button */}
        <button className={`sidebar-toggle ${isOpen ? "active" : ""}`} onClick={toggleSidebar}>
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Sidebar overlay (mobile only) */}
      <div className={`admin-sidebar ${isOpen ? "open" : ""}`} onClick={closeSidebar}>
        <div className="sidebar-content" onClick={(e) => e.stopPropagation()}>
          <ul className="list-unstyled px-4 mt-5">
            <li className="mb-3">
              <i className="bi bi-border-style me-2 text-white"></i>
              <Link to="/admin" className="text-decoration-none text-white">
                Dashboard
              </Link>
            </li>
            <li className="mb-3">
              <i className="bi bi-file-earmark-text me-2 text-white"></i>
              <Link
                to="/admin/assessments"
                className="text-decoration-none text-white"
              >
                Assessments
              </Link>
            </li>
            <li className="mb-3">
              <i className="bi bi-megaphone me-2 text-white"></i>
              <Link
                to="/admin/announcements"
                className="text-decoration-none text-white"
              >
                Announcements
              </Link>
            </li>
            <li>
              <i className="bi bi-people me-2 text-white"></i>
              <Link to="/admin/users" className="text-decoration-none text-white">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
