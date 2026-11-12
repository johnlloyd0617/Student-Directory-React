import React, { useState } from "react";
import FormContainer from "../Component/FormContainer";
import HeaderContainer from "../Component/HeaderContainer";
import ListContainer from "../Component/ListContainer";

const StudentPage = () =>{
    const [data, setData] = useState([]);



    const getData = async () => {
        const response = await fetch('http://127.0.0.1:3000/student/all');

        if(!response.ok){
            throw new Error(response.status);
            
        }

        const data = response.json();

        return data;
    }

    getData().then((result) => {
        console.log(result);
        setData(result);
    }).catch((e) => {
        console.log(e);
    })






    return(
        <>  
             <HeaderContainer />
             <FormContainer />
             <ListContainer data={data} />
        </>
    )

}
export default StudentPage