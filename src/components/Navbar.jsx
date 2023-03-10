import SearchContact from "./contact/SearchContact";

import { BACKGROUND, PINKNAVY, WHITE } from "../helpers/colors";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-sm shadow-lg"
      style={{ backgroundColor: BACKGROUND }}
    >
      <div className="container">
        <div className="row w-100">

              <div className="col">
            <SearchContact />
          </div>
          <div className="col">
            <div className="navbar-brand" style={{ color: PINKNAVY }}>
              Contact management   {"  "}
              <span style={{ color: WHITE }}>web application</span>
              <i className="fas fa-id-badge" style={{ color: PINKNAVY }} />{" "}

            </div>
          </div>
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
