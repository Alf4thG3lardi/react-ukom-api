import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';

const Clientlist = () => {
    const {clients, getClients} = useContext(Connection)
    useEffect(() => {
        getClients()
    }, [])
  return (
    <div class='row'>
        <div class='col-3'>
        <Sidebar/>
        </div>
    <div class='col-9 bg-dark p-5' style={{minHeight:"100vh", width:'70vw'}}>
            <h4 class='text-white'>User List</h4>
        <table class='table table-dark' style={{minWidth:"90%"}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    clients?.map((client) => {
                        return (
                            <tr>
                                <td>{client.id}</td>
                                <td>{client.username}</td>
                                <td>{client.email}</td>
                                <td>{client.contact}</td>
                                <td>{client.role}</td>
                                <td>
                                    <Link to={`/clientdetail/${client.id}`}class="btn btn-outline-info" >
                                        Detail
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Clientlist