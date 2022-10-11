import styled from 'styled-components'

export const TasksWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }

  a {
    text-decoration: none;
  }
`
export const TasksTitle = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  margin-top: 0;
  color: #64c4ed;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;

  &:hover {
    img {
      opacity: 0.2;
    }
  }

  img {
    opacity: 0;
    cursor: pointer;
    margin-left: 15px;

    &:hover {
      opacity: 0.8;
    }
  }
`
export const TasksItems = styled.div`
  margin-top: 30px;

  h2 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 22px;
    color: #c9d1d3;
    position: absolute;
    left: 50%;
    top: 50%;
  }
`