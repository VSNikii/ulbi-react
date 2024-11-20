import React, { FC, useEffect, useState } from "react";
import { Params } from "react-router-dom";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface UserItemPageParams {
    id: string
}


export const UserItemPage: FC = () => {
    const [userInfo, setUserInfo] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    const history = useHistory();
    console.log(params);
    
    useEffect(() => {
        fetchUsersItem();
    }, [])

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
        <button>Назад</button>
            <div>
                 {userInfo?.email} {userInfo?.id} {userInfo?.name}
            </div>
        </>
    )
}