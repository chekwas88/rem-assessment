/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'


interface IData {
    id: number;
    size: number;
    hirePeriod: number;
    price: number;
    vat: number;
    postCode: number;
    forbidden: boolean;
    allowedOnRoad: boolean;
    allowsHeavyWaste: boolean;

}

const useDataLoad = (url: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [payload, setData] = useState<IData[]>([])
    const [toggleRefetch, setRefetch] = useState(<boolean>(false))


    const fetchData = async () => {
        try {
            setIsError(false)
            setIsLoading(true);
            const response = await fetch(url)
            if(!response.ok){
                throw new Error('Failed to fetch skips')
            }
            
            const result: any [] = await response.json()
            if(!result){
                throw new Error('Failed to fetch skips')
            }
            
            const data:IData[] = result.map((res) => {
                return {
                    id: res.id,
                    size: res.size,
                    allowedOnRoad: res["allowed_on_Road"],
                    allowsHeavyWaste: res["allows_heavy_waste"],
                    vat: res.vat,
                    postCode: res.postcode,
                    price: res["price_before_vat"],
                    forbidden: res.forbidden,
                    hirePeriod: res["hire_period_days"],
                }
            })

            setData(data)
            setIsLoading(false)
            
        }catch(err){
            setIsError(true)
            setIsLoading(false)
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[toggleRefetch])


    return {isError, isLoading, payload, toggleRefetch, refetch: (b:boolean) => setRefetch(b),}
       
}
export default useDataLoad;
