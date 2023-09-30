import { Link } from "react-router-dom";

export default function HomeScreen() {
  const job = "AI Research Intern";
  // Return Component
  return (
    <div className='bg-black h-screen'>
      <header>
        <div className="nav-box flex">
          <div className="nav-box-left flex">
            <Link to="https://github.com/arenslien">
              <div className="nav-box-left-logo">
                <b>Sunghoon Jung.</b>
              </div>
            </Link>
            <div className="nav-box-left-contacts flex">
              <ul className="flex">
                <li className="contact-li text-sm">+82 10-3921-9949</li>
                <li className="text-sm">arenslien@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="nav-box-right flex">
            <div className="nav-box-right-menu">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round">
							  	<line x1="3" y1="12" x2="21" y2="12"></line>
							  	<line x1="3" y1="6" x2="21" y2="6"></line>
							  	<line x1="3" y1="18" x2="21" y2="18"></line>
							  </svg>
              </a>
            </div>
          </div>
        </div>

      </header>

      <div className="text-white text-7xl font-bold w-1/2">
        Hi!<br/>
        I'm {job}
      </div>
    </div>
  );
}