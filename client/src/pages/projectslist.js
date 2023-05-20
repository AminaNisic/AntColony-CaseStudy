import React, { useEffect, useState} from  "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function projectslist() {

    let id = "";

    axios.get("http://localhost:3001/auth/getid").then((response => {
        console.log(response.data)
    }))

   /*axios.get(`http://localhost:3001/projects/ById/${id}` 
    ).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
              } else {
              }
        console.log(response);
    })*/


  return (
    <div>
      
    </div>
  )
}

export default projectslist
