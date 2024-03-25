import React from 'react'

export const List = ({userList = [] }) => {
    //const userList = ["Prem" , "Sam", "Ram"];
  return (
    <div>

        <ul>

            {
                userList.map((name, i) => (
                    <li key={i}> {name}</li>

               ) )}

           

        </ul>
      
    </div>
  )
}


