import SecondScreen from '../components/SecondScreen';
import ThirdScreen from '../components/ThirdScreen';
import HomeScreen from '../components/HomeScreen';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const screenRef = useRef([]);
  
  // UseEffect 선언: []안의 값이 변경될 때 렌더링
  useEffect(() => {
    let scrollDirection = null;
    let flag = false;
    let screenIndex = 0;

    const scrollScreen = (scrollDirection) => {
      console.log("스크롤 함수의 방향 : " + scrollDirection);
      if (scrollDirection === "down" && screenIndex < 2) {
        screenIndex++;
        screenRef.current[screenIndex].scrollIntoView({behavior: "smooth"});
      } else if (scrollDirection === "up" && screenIndex > 0) {
        screenIndex--;
        screenRef.current[screenIndex].scrollIntoView({behavior: "smooth"});
      }
    };

    const onWheel = (e) => {
      // Atomic한 실행을 위한 flag 설정
      if (!flag) {
        // flag true로 설정
        flag = true;
        
        // 1.1 wheel의 움직임에 맞게 스크롤 방향 설정
        if (e.deltaY > 0) { // wheel down
          scrollDirection = "down";
        } else if (e.deltaY < 0) {
          scrollDirection = "up";
        }
        console.log("설정된 방향 : " + scrollDirection);

        // 1.2 방향에 맞게 스크롤
        scrollScreen(scrollDirection);
        setTimeout(() => {
          flag = false;
          console.log("flag false 설정");
        }, 1000);
      }

    };

    // 1. 마우스 휠에 대한 이벤트 리스너 등록
    document.addEventListener("wheel", onWheel);

    // 2. 이벤트 리스너 등록 헤제
    return () => {
      document.removeEventListener("wheel", onWheel);
    }
  });

  return(
    <div>
      <div ref={el => screenRef.current[0] = el}><HomeScreen/></div>
      <div ref={el => screenRef.current[1] = el}><SecondScreen/></div>
      <div ref={el => screenRef.current[2] = el}><ThirdScreen/></div>
    </div>
  );
}