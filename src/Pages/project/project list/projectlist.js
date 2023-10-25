import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';

const Projectlist = () => {
    const {getProjects, projects, getClient, client} = useContext(Connection)
    useEffect(() =>{
        getProjects()
    }, [])
  return (
    <div class='row'>
        <div class='col-3'>
            <Sidebar/>
        </div>
        <div class='col-9 bg-dark p-5'>
                <h4 class='text-white'>Project List</h4>

            <table class='table table-dark'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Project name</th>
                    <th>Client</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    projects.map(
                        (project) => (
                            <tr>
                                <td>{project.id}</td>
                                <td>{project.project_name}</td>
                                <td>{getClient(project.client_id), client.username}</td>
                                <td>{project.end}</td>
                                <td>{project.status}</td>
                                <td>
                                    <Link class='btn btn-outline-info' to={`/projectdetail/${project.id}`}>
                                        Detail
                                    </Link>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default Projectlist