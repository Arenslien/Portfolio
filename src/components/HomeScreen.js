
export default function HomeScreen() {
  const job = "AI Research Intern";
  
  // Return Component
  return (
    <div className='home-screen bg-black h-screen'>
      <div className="text-white text-7xl font-bold w-1/2">
        Hi!<br/>
        I'm {job}
      </div>
    </div>
  );
}