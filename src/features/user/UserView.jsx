import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () =>{
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    console.log(user, "haaa")
    useEffect(() => {
       dispatch(fetchUsers())
    },[])

    return(
        <>
         List of Users are here
         {user.loading && <div>Loading</div>}
         {!user.loading && user.error ? <div>Error:{user.error}</div> :null}
         {!user.loading && user.users.length  ? (
         <ul>
            {user.users.map(x => <li>{x.name}</li>) } 
        </ul>) :null}

         {/* {console.log(userData, "haaa")} */}
        </>
    )
}

export default UserView;