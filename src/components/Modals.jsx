import React, { useState } from 'react';
import styled from 'styled-components';

function Modals() {
  // 첫 번째 모달 상태 설정
  const [outModal, setOutModal] = useState(false);
  // 두 번째 모달 상태 설정
  const [inModal, setInModal] = useState(false);

  // 첫 번째 모달 닫기 핸들러
  const handleModal1Close = () => {
    setOutModal(false);
  };

  // 두 번째 모달 닫기 핸들러
  const handleModal2Close = () => {
    setInModal(false);
  };

  return (
    <div>
      <h1>Modals</h1>

      {/* 첫 번째 모달 */}
      {outModal && (
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
          onClick={handleModal1Close}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: 20,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <h2>외부를 클릭할시 모달이 닫힙니다.</h2>
            <button onClick={handleModal1Close}>닫기</button> {/* 첫 번째 모달에 닫기 버튼 추가 */}
          </div>
        </div>
      )}

      {/* 두 번째 모달 */}
      {inModal && (
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
            onClick={(event) => event.stopPropagation()}
          >
            <h2>두 번째 모달</h2>
            <button onClick={handleModal2Close}>닫기</button>
          </div>
        </div>
      )}

      {/* 모달을 열기 위한 버튼들 */}
      <Button onClick={() => setOutModal(true)}>첫 번째 모달 열기</Button>
      <Buttons onClick={() => setInModal(true)}>두 번째 모달 열기</Buttons> {/* 버튼 이름 오타 수정 */}
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