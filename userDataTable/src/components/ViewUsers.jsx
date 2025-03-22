import React from 'react'

const ViewUsers = ({users}) => {
    
    const usersData = users.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.skill}</td>
                <td>{item.email}</td>
            </tr>
        )
    })
  return (
    <div className='box box--l'>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SKILL</th>
                <th>EMAIL</th>
            </tr>
        </thead>
        <tbody>
            {usersData}
        </tbody>
      </table>
    </div>
  )
}

export default ViewUsers
