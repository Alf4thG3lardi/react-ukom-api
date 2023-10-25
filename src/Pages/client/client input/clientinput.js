import React from 'react';

const Clientinput = () => {
  return (
    <div class="container bg-dark p-5" style={{minHeight:"100vh"}}>
        <form>
            <div class='mb-3 row'>
                <div class='col-3'>
                  <input type="text" readonly class="form-control-plaintext text-white" id="staticEmail2" value="Client Email: "/>
                </div>
                <div class="col-8">
                  <input type='email' class='form-control text-white bg-dark' placeholder='Email Here'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Clientinput