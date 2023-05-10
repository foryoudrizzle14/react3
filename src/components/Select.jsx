import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';


//옵션 목록을 설정하고, 각 옵션에 대한 값을 설정하기
const options = [
  { value: '자바', label: '자바' },
  { value: '리액트', label: '리액트' },
  { value: '스프링', label: '스프링' },
  { value: '리액트네이티브', label: '리액트네이티브'},
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    width: '200px',
    height: '30px',
    marginRight: '10px', //두개의 select의 간격을 준다.
  }),
};

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 50px;
  display: flex;
  justify-content: middle;
`;

//React 클래스 컴포넌트인 App을 생성하고, 상태 값을 설정
class App extends React.Component {
  state = {
    selectedOption1: null,
    selectedOption2: null,
  };
  //첫 번째 Select의 핸들러 함수를 생성합니다. 선택한 옵션을 상태에 저장하고, 선택한 옵션을 콘솔에 출력
  handleChange1 = (selectedOption1) => {
    this.setState({ selectedOption1 }, () =>
      console.log(`Option selected:`, this.state.selectedOption1)
    );
  };
  //두 번째 Select의 핸들러 함수를 생성합니다. 선택한 옵션을 상태에 저장하고, 선택한 옵션을 콘솔에 출력
  handleChange2 = (selectedOption2) => {
    this.setState({ selectedOption2 }, () =>
      console.log(`Option selected:`, this.state.selectedOption2)
    );
  };
  //렌더링 메서드에서, 상태에서 선택한 옵션 값을 가져옵니다. Select 컴포넌트를 생성하고 옵션, 스타일 및 핸들러 함수를 전달
  render() {
    const { selectedOption1, selectedOption2 } = this.state;

    return (
        <>
        <h1>Select</h1>
        <Container>
      <div style={{ display: 'flex' }}/>
        <Select
          value={selectedOption1}
          onChange={this.handleChange1}
          options={options}
          styles={customStyles}
        />
        <Select
          value={selectedOption2}
          onChange={this.handleChange2}
          options={options}
          styles={customStyles}
        />
        
      </Container>
      </>
    );
  }
}

export default App;
