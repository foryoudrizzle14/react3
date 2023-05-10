import React, { useState } from 'react';
import styled from 'styled-components';



  // name과 price의 초기값을 빈 문자열로 설정하고, useState를 사용하여 상태를 관리합니다.
function Inputs() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

// formatPrice 함수는 입력한 가격을 포맷팅합니다.
  const formatPrice = (target) => {
    // 입력한 값을 정규식을 이용하여 숫자만 추출합니다.
    const unformattedValue = target.value.replace(/[^0-9]/g, '');
    // 추출한 숫자를 로케일링하여 가격 형식으로 변환합니다.
    const formattedValue = Number(unformattedValue).toLocaleString();
    // 변환된 가격을 상태에 저장합니다.
    setPrice(formattedValue);
  };
  
  // onAddBtnClick 함수는 저장 버튼을 눌렀을 때 호출됩니다.
  const onAddBtnClick = (e) => {
    e.preventDefault();
    // name 또는 price가 빈 문자열일 경우 alert 창을 띄우고 함수를 종료합니다.
    if (name.trim() === '' || price.trim() === '') {
      alert('이름과 가격을 입력하세요!');
      return;
    }
    // name과 price 값을 alert 창으로 출력합니다.
    alert(`name: ${name}, price: ${price}`);
    setName(name);
    setPrice(price);
  };
  

  return (
    <>
      <h1>Input</h1>
      <Container>
        Name: <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        가격: <Input type="text" value={price} onChange={(e) => formatPrice(e.target)} />
        <div>
          <InputButton onClick={onAddBtnClick}>저장하기</InputButton>
        </div>
      </Container>
    </>
  );
}

export default Inputs;

// input, button, container의 스타일을 지정합니다.
export const Input = styled.input`
  width: 200px;
  height: 50px;
  border-radius: 10px;
`;

export const InputButton = styled.button`
  align-item: center;
  padding: 10px;
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
