import AxiosInstance from "./AxiosInstance"
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import dayjs from 'dayjs'

type UserType = {
    id: number;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    email: string;
    date_of_birth: string;
};
export default function Users() {
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
                            <div>Admin: {item.is_superuser ? 'True' : 'False'}</div>
                            <div>First Name: {item.first_name}</div>
                            <div>Last Name: {item.last_name}</div>
                            <div>Date of Birth: {dayjs(item.date_of_birth).format('DD/MM/YYYY')}</div>
                            <div>Email: {item.email}</div>
                        </Box>
                    ))
                )
            }
        </div>
    )
}