import React, { FC, MouseEvent } from 'react'
import { Input, InputLabel } from './styled/TextInput.styles'
import cn from 'classnames'
import classNames from 'classnames'

interface ITextInput {
  type: string
  placeholder: string
  value: string
  onChange: (e) => void
  error?: boolean
  className?: string
  disabled?: boolean;
  required?: boolean
}
export const TextInput: FC<ITextInput> = (props) => {
  const {
    type,
    placeholder,
    value,
    onChange,
    error,
    className,
    required,
    disabled,
  } = props

  const classes = cn('input', {
    [`error`]: error,
    [`${disabled}`]: disabled
  }, className)

  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={classes}
      />
      <InputLabel
        className={classes}
      />
    </>
  )
}
