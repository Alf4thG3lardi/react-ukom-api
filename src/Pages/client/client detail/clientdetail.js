import React, { useContext, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';


const Clientdetail = () => {
    const {getClient, client, getProjects, projects} = useContext(Connection)
    let {id} = useParams()
    useEffect(() => {
        getClient(id)
        getProjects()
    }, [])
  return (
    <div class='row'>
        <div class='col-3'>
            <Sidebar/>
        </div>
        <div class='col-9 p-5' style={{minHeight:"100vh"}}>
            <div style={{minHeight:'30vh'}}>
                <h4 class='text-white'>User Detail</h4>
                <div class='card text-bg-dark border-light'>
                    <div class='card-header border-light text-uppercase'>
                        {client.username}
                    </div>
                    <div class='card-body'>
                        <div class='row'>
                            <div class='col-6'>
                                <div>
                                    <span class='fw-bolder'>Fullname</span> : <span class='mx-3'>{client.fullname}</span>
                                </div>
                            </div>
                            <div class='col-6'>
                                <div>
                                    <span class='fw-bolder'>Role</span> : <span class='mx-3'>{client.role}</span>
                                </div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-6'>
                                <div>
                                    <span class='fw-bolder'>Email</span> : <span class='mx-3'>{client.email}</span>
                                </div>
                            </div>
                            <div class='col-6'>
                                <div>
                                    <span class='fw-bolder'>Contact</span> : <span class='mx-3'>{client.contact}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <h4 class='text-white'>Project list</h4>
                <table class='table table-dark'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.filter(projects => projects.client_id == id).map(
                                (project) => {
                                    return (
                                        <tr>
                                            <td>{project.id}</td>
                                            <td>{project.project_name}</td>
                                            <td>{project.end}</td>
                                            <td>{project.status}</td>
                                            <td class='text-center'>
                                                <Link class='btn btn-outline-info' to={`/projectdetail/${project.id}`}>
                                                    Detail
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default Clientdetail