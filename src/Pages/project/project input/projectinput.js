import React, { useContext, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';

const Projectinput = () => {
  const {storeProject, projectValue, setProjectForm} = useContext(Connection)
  useEffect(() => {

  }, [])  
  return (
    <div class="container bg-dark p-5" style={{minHeight:"100vh"}}>
        <form onSubmit={storeProject}>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Project Title: "/>
                </div>
                <div class="col-8">
                  <input type='text' name='project_name' value={projectValue['project_name']} onChange={setProjectForm} class='form-control text-white bg-dark'/>
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Project Description: "/>
                </div>
                <div class="col-8">
                  <input type='text' name='desc' value={projectValue['desc']} onChange={setProjectForm} class='form-control text-white bg-dark' />
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Project Start date: "/>
                </div>
                <div class="col-8">
                  <input type='date' name='start' value={projectValue['start']} onChange={setProjectForm} class='form-control text-white bg-dark' placeholder='Email Here'/>
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Project End date: "/>
                </div>
                <div class="col-8">
                  <input type='date' name='end' value={projectValue['end']} onChange={setProjectForm} class='form-control text-white bg-dark' placeholder='Email Here'/>
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Project Client: "/>
                </div>
                <div class="col-8">
                  <input type='text' name='client_id' value={projectValue['client_id']} onChange={setProjectForm} class='form-control text-white bg-dark' placeholder='Email Here'/>
                </div>
            </div>
            <div class='mb-3 row visually-hidden'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Project Client: "/>
                </div>
                <div class="col-8">
                  <input type='text' name='client_id' value={projectValue['client_id']} onChange={setProjectForm} class='form-control text-white bg-dark' placeholder='Email Here' oninput="0"/>
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

export default Projectinput