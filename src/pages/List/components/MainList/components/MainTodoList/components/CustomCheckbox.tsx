import React, { FC } from 'react'
import { Checkbox } from './styles/Checkbox.styles'
import { Check } from 'components/Icons/Check/Check'

interface ICustomCheckbox {
  id: number
  completed: boolean | undefined

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const CustomCheckbox:FC<ICustomCheckbox> = ({
    onChange,
    completed,
    id
  }) => {
  return (
    <Checkbox className="checkbox">
      <input
        onChange={onChange}
        id={`task-${id}`}
        type="checkbox"
        checked={completed}
      />
      <label htmlFor={`task-${id}`}>
        <Check
          size={20}
          color='#ffffff'
        />
      </label>
    </Checkbox>
  )
}

export default CustomCheckbox