import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';

const Tasklist = () => {
    const {tasks, getTasks} = useContext(Connection)
    useEffect(() => {
        getTasks()
    }, [])
  return (
    <div class='row'>
        <div class='col-3'>
        <Sidebar/>
        </div>
    <div class='col-9 bg-dark p-5' style={{minHeight:"100vh", width:'70vw'}}>
        <h4 class='text-white'>Task List</h4>
        <table class='table table-dark' style={{minWidth:"90%"}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>priority</th>
                    <th>Status</th>
                    <th>Deadline</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task) => {
                        return (
                            <tr>
                                <td>{task.id}</td>
                                <td>{task.task_name}</td>
                                <td>{task.priority}</td>
                                <td>{task.status == 1 ? 'Finished' : 'On going'}</td>
                                <td>{task.deadline}</td>
                                <td>
                                    <Link to={`/taskdetail/${task.id}`}class="btn btn-outline-info" >
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

export default Tasklist