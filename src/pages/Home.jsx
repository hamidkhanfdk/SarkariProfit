function Home() {
  return (
    <div>

      {/* 🔥 HERO SECTION */}
      <div className="hero-section text-white d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center">

      <div className="col-md-6">
        <h1 className="fw-bold">
          Welcome to <br />
          <span className="text-warning">SarkariProfit.com</span>
        </h1>
        <p>
          Get Latest Sarkari Yojna Updates, Govt Job Notifications,
          Admit Cards, Vacancies, Results & Useful Tools!
        </p>
        <button className="btn btn-warning px-4 py-2 fw-bold">
          Explore Now
        </button>
      </div>

      <div className="col-md-6 text-center">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
          alt="hero" 
          className="img-fluid"
        />
      </div>

    </div>
  </div>
</div>

      {/* 🔥 QUICK CATEGORIES */}
     <div className="container mt-4">
  <div className="d-flex justify-content-between gap-3 flex-wrap">

    <div className="btn btn-success w-100">📢 Govt Schemes</div>
    <div className="btn btn-warning w-100">💼 Latest Jobs</div>
    <div className="btn btn-primary w-100">🪪 Admit Cards</div>
    <div className="btn btn-danger w-100">📄 Answer Keys</div>

  </div>
</div>




      {/* 📊 LATEST UPDATES */}
      <div className="container mt-5">
        <h3 className="fw-bold mb-4">🔥 Latest Updates</h3>

        <div className="row">

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h6 className="fw-bold">SSC CGL 2026</h6>
              <p>Last Date: 20 May 2026</p>
              <button className="btn btn-primary btn-sm">View</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h6 className="fw-bold">Railway Group D</h6>
              <p>Apply Online</p>
              <button className="btn btn-success btn-sm">Apply</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h6 className="fw-bold">UP Police Result</h6>
              <p>Check Now</p>
              <button className="btn btn-warning btn-sm">Check</button>
            </div>
          </div>

        </div>
      </div>

      <div className="container mt-5">
  <div className="row">

    {/* LEFT SIDE (Jobs) */}
    <div className="col-md-8">
      <h4 className="fw-bold mb-3">Latest Govt Jobs</h4>

      <div className="card p-3 mb-3 shadow-sm">
        <h6>SSC CGL Recruitment</h6>
        <button className="btn btn-primary btn-sm">Apply</button>
      </div>

      <div className="card p-3 mb-3 shadow-sm">
        <h6>UPSC NDA Exam</h6>
        <button className="btn btn-primary btn-sm">Apply</button>
      </div>
    </div>

    {/* RIGHT SIDE (Tools) */}
    <div className="col-md-4">
      <h4 className="fw-bold mb-3">Useful Tools</h4>

      <div className="card p-2 mb-2">Image to PDF</div>
      <div className="card p-2 mb-2">PDF Compressor</div>
      <div className="card p-2 mb-2">Image Compressor</div>
      <div className="card p-2 mb-2">Passport Photo</div>
    </div>

  </div>
</div>

      {/* 🛠 TOOLS SECTION */}
      <div className="container mt-5">
        <h3 className="fw-bold mb-4">🛠 Useful Tools</h3>

        <div className="row text-center">

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <p>Image to PDF</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <p>Image Compressor</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <p>PDF Compressor</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <p>Photo Maker</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;