import AxiosInstance from "./AxiosInstance"
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

type UserType = {
    id: number;
    email: string;
};
export default function Home() {
    const [myData, setMyData] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(true)

    const GetData = () => {
        AxiosInstance.get<UserType[]>(`users/`)
            .then((res) => {
                setMyData(res.data)
                console.log(res.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
            });
    };

    useEffect(() => {
        GetData();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading Data...</p>) :
                myData.length === 0 ? (
                    <div>No Users Found.</div>
                ) : (
                    myData.map((item, index) => (
                        <Box key={index} sx={{ p: 2, m: 2, boxShadow: 3 }}>
                            <div>ID: {item.id}</div>
                            <div>Email: {item.email}</div>
                        </Box>
                    ))
                )
            }
        </div>
    )
}