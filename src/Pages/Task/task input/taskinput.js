import React, { useContext, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';

const Taskinput = () => {
  const {storeTask, taskValue, setTaskForm} = useContext(Connection)
  useEffect(() => {

  }, [])  
  return (
    <div class="container bg-dark p-5" style={{minHeight:"100vh"}}>
        <form onSubmit={storeTask}>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Task name: "/>
                </div>
                <div class="col-8">
                  <input type='text' name='task_name' value={taskValue['task_name']} onChange={setTaskForm} class='form-control text-white bg-dark'/>
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Project name: "/>
                </div>
                <div class="col-8">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
            </div>
            <div class='row'>
              <div class='col-3'>
              </div>
              <div class='col-8'>
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
              </div>
            </div>
        </form>
    </div>
  )
}

export default Taskinput