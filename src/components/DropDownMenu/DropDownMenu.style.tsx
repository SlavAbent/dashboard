import styled from 'styled-components'

const DropDownMenuWrapper = styled.div`
    width: 104px;
    height: auto;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 53px;
    z-index: 1000;
    background-color: white;
    border-radius: 8px;
    &.open {
        display: flex;
    }
    &.close {
        display: none;
    }
`

export { DropDownMenuWrapper }