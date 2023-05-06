import React, { useState } from 'react';
import styled from 'styled-components';


function Modals() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleModal1Close = () => {
    setShowModal1(false);
  };

  const handleModal2Close = () => {
    setShowModal2(false);
  };

  return (
    <div>
        <h1>Modals</h1>
      {/* 첫 번째 모달 */}
      {showModal1 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleModal1Close} // 모달 외부를 클릭하면 모달이 사라집니다.
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: 20,
            }}
            onClick={(event) => event.stopPropagation()} // 모달 내부를 클릭하면 모달이 사라지지 않도록 합니다.
          >
            <h2>외부를 클릭할시 모달이 닫힙니다.</h2>
          </div>
        </div>
      )}

      {/* 두 번째 모달 */}
      {showModal2 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: 20,
            }}
            onClick={(event) => event.stopPropagation()} // 모달 내부를 클릭하면 모달이 사라지지 않도록 합니다.
          >
            <h2>두 번째 모달</h2>
            <button onClick={handleModal2Close}>닫기</button>
          </div>
        </div>
      )}

      {/* 모달을 열기 위한 버튼들 */}
      <Button onClick={() => setShowModal1(true)}>첫 번째 모달 열기</Button>
      <Buttons onClick={() => setShowModal2(true)}>두 번째 모달 열기</Buttons>
    </div>
  );
}

export default Modals;


export const Buttons = styled.button`
  background-color: #f9a3e1;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f486c1;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const Button = styled.button`
  background-color: #f3a3f9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f486f4;
  }

  &:active {
    transform: translateY(2px);
  }
`;