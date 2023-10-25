import React, { useContext, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';

const Projectdetail = () => {
  const {getProject, project, getTasks, tasks} = useContext(Connection)
  let {id} = useParams()
  useEffect(() =>{
    getProject(id)
    getTasks()
  }, [])
  return (
    <div class='row'>
      <div class='col-3'>
        <Sidebar/>
      </div>
      <div class='col-9 p-5 bg-dark text-white'>
        <h4>{project.project_name}</h4>
        <div class="card text-bg-dark">
          <div class="card-body">
            <h4>Progress</h4>
            <div class="progress mb-5" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style={{width:'50%'}}></div>
            </div>
            <div class='row'>
              <div class='col-6'>
                <h4>Description</h4>
                <textarea class='form-control bg-dark text-white h-75' value={project.desc}></textarea>
              </div>
              <div class='col-6'>
                <h3>Detail</h3>
                <hr class='border-white'/>
                <ul class='list-group list-group-flush w-75'>
                  <li class='list-group-item bg-dark text-white'>Start : {project.start}</li>
                  <li class='list-group-item bg-dark text-white'>End : {project.end}</li>
                  <li class='list-group-item bg-dark text-white'>Price : {project.price}</li>
                  <li class='list-group-item bg-dark text-white'>
                    Status : { project.status == 0 ? "Not finished" : "Finished" }
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class='my-4'>
          <h4>Task List</h4>
          <table class='table table-dark'>
            <thead>
                <tr>
                  <th>id</th>
                  <th>Task name</th>
                  <th>Status</th>
                  <th>Deadline</th>
                  <th></th>
                </tr>
            </thead>
            <tbody>
              {
                tasks.filter(tasks => tasks.project_id == id).map(
                  (task) => (
                    
                      <tr>
                        <td>{task.id}</td>
                        <td>{task.task_name}</td>
                        <td>{task.status}</td>
                        <td>{task.deadline}</td>
                        <td>
                          <Link to={`/taskdetail/${task.id}`} class='btn btn-outline-info'>
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
    </div>
  )
}

export default Projectdetail