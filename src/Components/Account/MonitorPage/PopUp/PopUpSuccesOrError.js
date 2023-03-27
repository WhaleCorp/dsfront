import { useEffect, useState } from "react"

export default function PopSuccesOrError({ text, isSuccess }) {
    const [className, setClassName] = useState('')
    useEffect(() => {
        if (isSuccess)
            setClassName("w-full rounded-t-md bg-green-300")
        else
            setClassName("w-full rounded-t-md bg-red-300")
    },[])
    return (
        <div className={className}>
            <h1 className="font-[Poppins] px-8 py-2.5 text-center text-xl">{text}</h1>
        </div>
    )
}