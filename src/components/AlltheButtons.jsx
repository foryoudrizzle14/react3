import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';



// 버튼의 색상 값 정의
const largeButtonColor = '#ff5050';
const mediumButtonColor = '#ffcc33';
const smallButtonColor = '#6699ff';

//styled-componenet에 keyframe 가져오기 
const glow = keyframes`
  from {
    box-shadow: 0 0 0px #000000;
  }

  to {
    box-shadow: 0 0 10px #ffffff;
  }
`;


// 버튼 컴포넌트들을 styled-components로 구현
const LargeButton = styled.button`
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 1em 2em;
  border: 2px solid ${largeButtonColor};
  border-radius: 3px;
  vertical-align: middle;
  background-color: ${largeButtonColor};
  color: white;
  animation: ${glow} 1s ease-in-out infinite alternate;
  &:hover {
    background-color: #ff9999;
  position: relative;
 }
  
`;

const LargeButton1 = styled.button `
  display: inline-block;
  font-size: 1em;
  margin: 1em;
  padding: 1em 2em;
  border: 2px solid ${largeButtonColor};
  border-radius: 3px;
  vertical-align: middle;
  background-color: ${largeButtonColor};
  color: white;
  animation: ${glow} 1s ease-in-out infinite alternate;
  &:hover {
    background-color: #ff9999;
  position: relative;
   &:after {
    content: "🔔"; /* 아이콘 추가 */
    position: absolute;
    right: 10px; /* 왼쪽 여백 */
    top: 50%; /* 버튼 세로 중앙 */
    transform: translateY(-50%);
    font-size: 1.2em;
    
  }}
`
const MediumButton = styled.button`
  vertical-align: middle;
  font-size: 0.8em;
  padding: 0.5em 1.5em;
  animation: ${glow} 1s ease-in-out infinite alternate;
  border: 2px solid ${mediumButtonColor};
  background-color: ${mediumButtonColor};
  &:hover {
    background-color: #ffdd99;
  }
`;

const SmallButton = styled.button`
  vertical-align: middle;
  font-size: 0.6em;
  margin: 1em;
  padding: 0.3em 1em;
  animation: ${glow} 1s ease-in-out infinite alternate;
  border: 2px solid ${smallButtonColor};
  background-color: ${smallButtonColor};
  &:hover {
    background-color: #99ccff;
  }
`;


// 모든 버튼을 관리하는 컴포넌트
function AlltheButtons() {
  const [buttonClicked, setButtonClicked] = useState(false);


  // 버튼 클릭시 호출할 함수들
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const handleInputClick = () => {
    let userInput = prompt('만들기가 어려우신가요?');
    console.log(userInput);
  };

  const handleAlertClick = () => {
    alert('버튼을 만들어보세요!');
  };

  return (  
    <>
      <h1>Buttons</h1>
      <div>
        <LargeButton clicked={buttonClicked} onClick={handleAlertClick}>
          LargeButton 
        </LargeButton>
        <MediumButton clicked={buttonClicked} onClick={handleButtonClick}>
          MediumButton 
        </MediumButton>
        <SmallButton clicked={buttonClicked} onClick={handleButtonClick}>
          SmallButton 
        </SmallButton>
      </div>
      <div>
        <LargeButton1 clicked={buttonClicked} onClick={handleInputClick}>
          LargeButton1 
        </LargeButton1>
        <MediumButton clicked={buttonClicked} onClick={handleButtonClick}>
          MediumButton1
        </MediumButton>
        <SmallButton clicked={buttonClicked} onClick={handleButtonClick}>
          SmallButton1 
        </SmallButton>
      </div>
    </>
  );
}

export default AlltheButtons;