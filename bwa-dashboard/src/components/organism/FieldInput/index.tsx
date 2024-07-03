import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { FC, ReactNode } from "react";



interface FieldInputProps{
    children: ReactNode
    title: string
    subTitle: string
}
const FieldInput:FC<FieldInputProps> = ({children,subTitle,title})=> {

    return (
        <>
        <div className="flex flex-row items-center">
            <div className="w-[35%]">
                <div className="font-semibold">{title}</div>
                <div className="text-gray-400 w-80">{subTitle}</div>
            </div>
            {children}
        </div>
        <Separator />
        </>
    )
}

export default FieldInput