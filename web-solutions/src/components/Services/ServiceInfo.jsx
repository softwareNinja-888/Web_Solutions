import { useParams } from "react-router"
export function ServiceInfo(){

    const {service} = useParams()

    console.log(service)
    return (
        <>
            <div className="text-4xl text-red-700">
                Service Information: {service}
            </div>
        </>
    )
}