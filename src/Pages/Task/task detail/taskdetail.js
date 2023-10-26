import React, { useContext, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';

const Taskdetail = () => {
    const {getTask, task, getAttachments, attachments, getClient, client, getComments, comments} = useContext(Connection)
    let {id} = useParams()
    useEffect(() =>{
        getTask(id)
        getAttachments()
        getComments()
    }, [])
  return (
    <div class='row'>
    <div class='col-3'>
      <Sidebar/>
    </div>
    <div class='col-9 p-3 bg-dark text-white'>
      <h4>{task.task_name}</h4>
      <div class="card text-bg-dark">
        <div class="card-body">
          <div class='row'>
            <div class='col-6'>
                <h4>Description</h4>
              <textarea class='form-control bg-dark text-white h-75' value={task.desc}></textarea>
            </div>
            <div class='col-6'>
              <h3>Detail</h3>
              <hr class='border-white'/>
              <ul class='list-group list-group-flush w-75'>
                <li class='list-group-item bg-dark text-white'>assigned_to : </li>
                <li class='list-group-item bg-dark text-white'>priority : {task.priority}</li>
                <li class='list-group-item bg-dark text-white'>Deadline : {task.deadline}</li>
                <li class='list-group-item bg-dark text-white'>
                  Status : { task.status == 0 ? "Not finished" : "Finished" }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class='my-4 row'>
        <div class='col-md-6'>
            <h5>File Attachment</h5>
            <hr class='border-white w-50'/>
            <table class='table table-dark'>
                <thead>
                    <tr>
                        <th>filename</th>
                        <th>file location</th>
                        <th>from</th>
                        <th>upload date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    attachments.filter(attachments => attachments.task_id == id).map(
                        (attach) => (
                            <tr>
                            <td>{attach.filename}</td>
                            <td>
                                <a href={attach.filepath} class='btn btn-outline-info'>
                                    See
                                </a>
                            </td>
                            <td>
                                {getClient(attach.uploaded_by), client.username}
                            </td>
                            <td>{attach.upload_time}</td>
                            </tr>
                        )
                        
                    )
                    }
                </tbody>
            </table>
        </div>
        <div class='col-md-6'>
            <h5>Comment</h5>
            <hr class='border-white w-50'/>
            <div class='overflow-y-scroll' style={{maxHeight:'25vh'}}>
                {
                    comments.filter(comments => comments.task_id == id).map(
                        (comment) => (
                            <div class='card text-bg-dark mb-2'>
                                <div class='card-body'>
                                    <h6 class='card-title fw-bolder'>{getClient(comment.client_id),client.username}</h6>
                                    <p class='card-text'>{comment.comment}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Taskdetail