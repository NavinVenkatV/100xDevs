import { ReactNode } from "react";

export default function({children} : {children : ReactNode}){
    return <div>
        <div className="text-center font-bolder text-3xl">
            20% discount for the next three days
        </div>
        {children}
    </div>
}