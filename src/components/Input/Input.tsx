import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string
}

export const Input = ({ placeholder, className, ...props }: InputProps) => {
  return <input placeholder={placeholder} className={className} {...props} />
}
