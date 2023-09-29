import SecondScreen from '../components/SecondScreen';
import ThirdScreen from '../components/ThirdScreen';
import HomeScreen from '../components/HomeScreen';
import { useEffect, useRef, useState } from 'react';

function HomePage() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [screenIndex, setScreenIndex] = useState(0);
  const screenRef = useRef([]);
  const delay = 500;

  useEffect(() => {
    const onWheel = (event) => {
      console.log(event.deltaY);
      if (event.deltaY > 0) {
        setScrollDirection("down");
      } else if (event.deltaY < 0) {
        setScrollDirection("up");
      } else {
        setScrollDirection(null);
      }
      moveScreen(scrollDirection);
      console.log(scrollDirection);
    };

    const moveScreen = (scrollDirection) => {
      if (scrollDirection === "down" && screenIndex < 2) {
        setScreenIndex(screenIndex + 1);
        screenRef.current[screenIndex].scrollIntoView({behavior: "smooth"});
      } else if (scrollDirection === "up" && screenIndex > 0) {
        setScreenIndex(screenIndex - 1);
        screenRef.current[screenIndex].scrollIntoView({behavior: "smooth"});
      }
    }
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener("wheel", (event) => {
      onWheel(event)
      setTimeout(() => {
      }, delay);
    });
    

    // 컴포넌트가 언마운트될 대 이벤트 리스너 제거
    return () => {
      window.removeEventListener("wheel", (event) => {
        onWheel(event)
        setTimeout(() => {    
        }, delay);
      });
    }
  }, [scrollDirection, screenIndex]);

  

  return(
    <div>
      <div ref={el => screenRef.current[0] = el}><HomeScreen/></div>
      <div ref={el => screenRef.current[1] = el}><SecondScreen/></div>
      <div ref={el => screenRef.current[2] = el}><ThirdScreen/></div>
    </div>
  );
}

export default HomePage;