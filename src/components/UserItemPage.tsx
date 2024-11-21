import React, { FC, useEffect, useState } from "react";
import { Params, useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";

interface UserItemPageParams {
    id: string
}


export const UserItemPage: FC = () => {
    const [userInfo, setUserInfo] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchUsersItem();
    }, [])


    const backToHome = () => {
        navigate('/users');
    } 

    async function fetchUsersItem(){
        try{
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
            setUserInfo(response.data);
        } catch(e){
            alert(e);
        }
    }

    return (
        <>
        <button onClick={backToHome}>Назад</button>
            <div>
                 {userInfo?.email} {userInfo?.id} {userInfo?.name}
            </div>
        </>
    )
}