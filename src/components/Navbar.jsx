import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-custom shadow-sm">

      <div className="container d-flex align-items-center justify-content-between">

        {/* LOGO */}
        <h4 className="fw-bold m-0">
          <span className="text-primary">Sarkari</span>
          <span className="text-warning">Profit</span>
        </h4>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search jobs, schemes, tools..."
          className="form-control w-50"
        />

        {/* MENU */}
        <div>
          <Link to="/" className="mx-2 nav-link-custom">Home</Link>
          <Link to="/jobs" className="mx-2 nav-link-custom">Jobs</Link>
          <Link to="/tools" className="mx-2 nav-link-custom">Tools</Link>
        </div>

      </div>

    </div>
  );
}

export default Navbar;