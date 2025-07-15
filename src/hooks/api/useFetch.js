import { useEffect, useState } from "react";

export function useFetch({ API_URL }) {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!API_URL) return

        setError(false)
        setLoading(true)

        const getData = async () => {

            try {
                const response = await fetch(API_URL)
                if (!response.ok) throw new Error(`Error: ${response.status}`)
                const result = await response.json()
                setData(result)

            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }

        }

        getData()

    }, [API_URL])

    return { data, error, loading }
}