import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import "./SideNav.css";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSublinks: false, // Initially hide the sublinks
    };
  }

  toggleSublinks = () => {
    this.setState((prevState) => ({
      showSublinks: !prevState.showSublinks, // Toggle the state of showSublinks
    }));
  };

  render() {
    const { showSublinks } = this.state;

    return (
      <div className="sidenav">
       <a href="#">
  Dashboard
</a>

        <a href="#" onClick={this.toggleSublinks}>
          Personality Questions
        </a>
        {showSublinks && (
          <ul className="sublinks">
            <li>
              <Link to="/componentsAddPersonalityQuestions.js">Add Personality Question</Link>
            </li>
            <li>
              <Link to="/view-questions">View Questions</Link>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default SideNav;
