import { ChangeEvent, InputHTMLAttributes, MutableRefObject } from "react";

export interface CurrencyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    changeHandler?: (value: string, unmaskedValue?: string, event?: ChangeEvent<HTMLInputElement>) => void
    clearHandler?: VoidFunction
    containerWidth?: string
    darkBackground?: boolean
    errorMessage?: string
    id?: string
    isError?: boolean
    label?: string
    name?: string
    placeholder?: string
    ref?: MutableRefObject<HTMLInputElement>
    value?: string
}