import { Link } from "react-router-dom";

export default function HomeScreen() {
  // Return Component
  return (
    <div className='bg-black h-screen text-white'>
      <h1>HomePage</h1>
      <Link to="/test">To Test Page</Link>
    </div>
  );
}