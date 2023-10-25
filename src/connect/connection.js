import {createContext, useState} from 'react';
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
const Connection = createContext();

const clientForm = {
    username : "",
    fullname : "",
    email: "",
    phone : ''
}

const projectForm = {
    project_name : "",
    desc : "",
    start: "",
    end : '',
    client_id : '',
    status : ''
}

const taskForm = {
    project_id: '',
    task_name : "",
    desc : "",
    assigned_to: "",
    priority : '',
    status : '',
    deadline : ''
}

export const ConnectionProvider  = ({children}) => {

    const [clientValue, setClientValue] = useState(clientForm)
    const [clients, setClients] = useState([])
    const [client, setClient] = useState([])
    const [clientCount, setClientCount] = useState([])


    const getClients = async() => {
        try {
            const response = await axios.get('client')
            setClients(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log('error fetching data:', error)
        }
    }

    const getClient = async(id) => {
        try {
            const response = await axios.get('client/' + id)
            const clientdata = response.data.data
            setClient(clientdata)
            setClientValue({
                username: clientdata.username,
                fullname : clientdata.fullname,
                email : clientdata.email,
                phone : clientdata.contact
            })
        } catch (error) {
            console.log('error fetching data:', error)

        }
    }

    const getClientsCount = async() => {
        const response = await axios.get('client')
        setClientCount(response.data.length)
    }

    // Project section

    const [projectValue, setProjectValue] = useState(projectForm)
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState([])

    const getProjects = async() => {
        try {
            const response = await axios.get('project')
            setProjects(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log('error fetching data:', error)
        }
    }

    const getProject = async(id) => {
        try {
            const response = await axios.get('project/'+id)
            const projectdata = response.data.data
            setProject(projectdata)
            setProjectValue({
                project_name : projectdata.project_name,
                desc : projectdata.desc,
                start : projectdata.start,
                end : projectdata.end,
                client_id : projectdata.client_id,
                status : projectdata.status
            })
        } catch (error) {
            console.log("error : ", error)
        }
    }

    //Task Section

    const [taskValue, setTaskValue] = useState(taskForm)
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState([])

    const getTasks = async() => {
        try {
            const response = await axios.get('task')
            setTasks(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log('error fetching data:', error)
        }
    }

    const getTask =  async(id) =>{
        try {
            const response = await axios.get('task/' + id)
            const taskdata = response.data.data
            setTask(taskdata)
            setTaskValue({
                project_id: taskdata.project_id,
                task_name : taskdata.task_name,
                desc : taskdata.desc,
                assigned_to: taskdata.assigned_to,
                priority : taskdata.priority,
                status : taskdata.status,
                deadline : taskdata.deadline
            })
        } catch (error) {
            console.log(error)
        }
    }

    //Attachment Section

    const [attachments, setAttachments] = useState([])

    const getAttachments = async() => {
        try {
            const response = await axios.get('attachment')
            setAttachments(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log('error fetching data:', error)
        }
    }

    //Comment Section

    const [comments, setComments] = useState([])

    const getComments = async() => {
        try {
            const response = await axios.get('comment')
            setComments(response.data.data)
            console.log(response.data.data)
        } catch (error) {
            console.log(error)   
        }
    }

    return <Connection.Provider value={{
        getClients, clients, setClients, clientForm, clientValue, setClientValue, getClient, client, setClient,
        getProjects, projects, setProjects, projectForm, projectValue, setProjectValue, getProject, project, setProject,
        getTasks, tasks, setTasks, taskForm, taskValue, setTaskValue, getTask, task, setTask,
        getAttachments, attachments, setAttachments,
        getComments, comments, setComments,
        getClientsCount, clientCount, setClientCount,
    }}>
        {children}
    </Connection.Provider>
}

export default Connection