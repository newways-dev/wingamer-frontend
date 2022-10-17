import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder?: string
  type?: 'checkbox' | 'email' | 'password' | 'text'
}

export const Input = ({
  placeholder,
  type,
  className,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  )
}
