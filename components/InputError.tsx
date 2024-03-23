import React from "react"
import { FieldError } from "react-hook-form"

const InputError = ({ error }: { error: FieldError | undefined }) => {
  return (
    error && (
      <p className="text-red-500 text-xs px-2 font-semibold">{error.message}</p>
    )
  )
}

export default InputError
