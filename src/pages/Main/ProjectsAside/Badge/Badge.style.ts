import styled from 'styled-components/macro'


export const BadgeWrapper = styled.i`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 30px;
  cursor: pointer;
  &.grey {
    background-color: #c9d1d3;
  }

  &.lime {
    background-color: #b6e6bd;
  }

  &.purple {
    background-color: #c355f5;
  }

  &.black {
    background-color: #08001a;
  }

  &.red {
    background-color: #ff6464;
  }

  &.green {
    background-color: #42b883;
  }

  &.blue {
    background-color: #64c4ed;
  }

  &.pink {
    background-color: #ffbbcc;
  }
  
  &.active {
    border: 2px solid black;
  }
`;