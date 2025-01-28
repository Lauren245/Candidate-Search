import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;

  return (
    <div className='nav'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link
            to='/'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Search Candidates
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to= '/SavedCandidates'
            className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}
          >
            View Saved Candidates
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default Nav;
