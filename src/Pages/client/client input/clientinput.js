import React, { useContext, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Connection from '../../../connect/connection';
import Sidebar from '../../sidebar/sidebar';

const Clientinput = () => {
  const {storeClient, clientValue, setClientForm} = useContext(Connection)
  useEffect(() => {

  }, [])  
  return (
    <div class="container bg-dark p-5" style={{minHeight:"100vh"}}>
        <form onSubmit={storeClient}>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Client Username: "/>
                </div>
                <div class="col-8">
                  <input type='text' name='username' value={clientValue['username']} onChange={setClientForm} class='form-control text-white bg-dark' placeholder='Email Here'/>
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Client fullname: "/>
                </div>
                <div class="col-8">
                  <input type='text' name='fullname' value={clientValue['fullname']} onChange={setClientForm} class='form-control text-white bg-dark' placeholder='Email Here'/>
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Client Email: "/>
                </div>
                <div class="col-8">
                  <input type='email' name='email' value={clientValue['email']} onChange={setClientForm} class='form-control text-white bg-dark' placeholder='Email Here'/>
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Client Phone: "/>
                </div>
                <div class="col-8">
                  <input type='tel' name='contact' value={clientValue['phone']} onChange={setClientForm} class='form-control text-white bg-dark' placeholder='Email Here'/>
                </div>
            </div>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readOnly class="form-control-plaintext text-white" id="staticEmail2" value="Client Role: "/>
                </div>
                <div class="col-8">
                  <input type='text' name='role' value={clientValue['role']} onChange={setClientForm} class='form-control text-white bg-dark' placeholder='Email Here'/>
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

export default Clientinput