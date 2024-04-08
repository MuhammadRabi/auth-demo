import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"

type props = {
  type: string
  placeholder: string
  register: UseFormRegisterReturn<string>
  label: string
  id: string
}
const FormInput = ({ type, placeholder, register, label, id }: props) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register} placeholder={placeholder} />
    </>
  )
}

export default FormInput
