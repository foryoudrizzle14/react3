import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

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

class App extends React.Component {
  state = {
    selectedOption1: null,
    selectedOption2: null,
  };
  
  handleChange1 = (selectedOption1) => {
    this.setState({ selectedOption1 }, () =>
      console.log(`Option selected:`, this.state.selectedOption1)
    );
  };
  
  handleChange2 = (selectedOption2) => {
    this.setState({ selectedOption2 }, () =>
      console.log(`Option selected:`, this.state.selectedOption2)
    );
  };
  
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
