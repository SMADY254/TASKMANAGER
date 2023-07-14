import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FaHome, FaBook, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import './header.css';
import { useContext, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Context } from '../context/userContext/Context';

function Header() {
  const { user, dispatch } = useContext(Context);
  const [isFeaturesVisible, setFeaturesVisible] = useState(false);
  const [isPlansVisible, setPlansVisible] = useState(false);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const featuresContent = (
    <div className='dropdown-menu'>
      <h4>workflowpro makes it easy for your team to get work done.</h4>
      <p> No matter the project, workflow, or type of team, workflow can help keep things organized.<br />
        It’s simple – sign-up, create a board, and you’re off! Productivity awaits.</p>
    </div>
  );

  const plansContent = (
    <div className='dropdown-menu'>
      <h3>Our Plans</h3>
      <ul>
        <li>Basic Plan: $9.99/month</li>
        <li>Standard Plan: $19.99/month</li>
        <li>Premium Plan: $29.99/month</li>
      </ul>
    </div>
  );

  return (
    <div className="header-wrapper">
      <img src={logo} alt="my logo" />
      <Link to="/" style={{ color: '#F024A6' }}><FaHome id="icons" /> Home</Link>

      <div>
       <span
          onMouseEnter={() => setFeaturesVisible(true)}
          onMouseLeave={() => setFeaturesVisible(false)}
          style={{ color: '#ffb084' }}

        >
          Features <RiArrowDropDownLine /> {isFeaturesVisible && featuresContent}
        </span>
      </div>

      <div>
        <span
          onMouseEnter={() => setPlansVisible(true)}
          onMouseLeave={() => setPlansVisible(false)}

          style={{ color: '#ffb084' }}

        >
          Plans  <RiArrowDropDownLine /> {isPlansVisible && plansContent}
        </span>
      </div>
      <Link to="/signup" style={{ color: '#4685ff' }} >
        <FaInfoCircle id="icons" /> Signup
      </Link>

      {user && (
        <>
          <Link to="/tasks" style={{ color: '#3CD3AD' }}>
            <FaBook id="icons" /> Tasks
          </Link>

          <Link onClick={handleLogout} style={{ color: '#E64D10' }} >
            <FaSignOutAlt id="icons" /> Logout
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;
