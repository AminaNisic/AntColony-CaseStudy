import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

    const[ listOfPipelines, setListOfPipelines] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/dashboard").then((response) => {
          setListOfPipelines(response.data);
        })
      }, [])

  return (
    <div>
      {listOfPipelines}
    </div>
  )
}

export default Home