import styled from 'styled-components'

export const BadgeContainer =  styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 8px;
  margin-right: ${(p) => p.theme.margin.default};
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.mainColorDark};
  cursor: pointer;
  
  &.selected {
	 border: 2px solid red;
  }

  &.badge {
    &--aside {
      margin-right: 0;
    }
    &--grey {
      background-color: #c9d1d3;
    }
    &--lime {
      background-color: #b6e6bd;
    }
    &--purple {
      background-color: #c355f5;
    }
    &--black {
      background-color: #08001a;
    }
    &--red {
      background-color: #ff6464;
    }
    &--green {
      background-color: #42b883;
    }
    &--blue {
      background-color: #64c4ed;
    }
    &--pink {
      background-color: #ffbbcc;
    }
  }
`
