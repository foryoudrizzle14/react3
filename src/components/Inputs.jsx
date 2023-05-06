import React, { useState } from 'react';
import styled from 'styled-components';

function Inputs() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const formatPrice = (target) => {
    const formattedValue = target.value.replace(/[^0-9]/g, '').toLocaleString();
    setPrice(formattedValue);
  };

  const onAddBtnClick = (e) => {
    e.preventDefault();
    if (name.trim() === '' || price.trim() === '') {
      alert('이름과 가격을 입력하세요!');
      return;
    }
   
    setName('');
    setPrice('');
  };

  return (
    <>
      <h1>Input</h1>
      <Container>
        Name: <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        가격: <Input type="text" value={price} onChange={(e) => formatPrice(e.target)} />
        <div>
        <InputButton onClick={onAddBtnClick}>입력하기</InputButton>
        </div>
      </Container>
    </>
  );
}

export default Inputs;


export const Input = styled.input`
    width: 200px;
    height: 50px;
    border-radius: 10px;
   `
    

export const InputButton = styled.button`
     align-item: center;
     padding: 10px;
     border-radius: 10px;
     
    `
export const Container = styled.div`
display: flex;
flex-direction: row;
align-item: middle;
justify-content: middle;
`;