import {createContext, useState} from 'react';
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
const Connection = createContext();

const clientForm = {
    username : "",
    fullname : "",
    password:'',
    email: "",
    contact : '',
    role: ''
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

const attachmentForm = {
    task_id: '',
    filename : "",
    filepath : "",
    upload_time: "",
    uploaded_by : '',
}

const commentForm = {
    user_id: '',
    task_id: '', 
    comment: ''
}
export const ConnectionProvider  = ({children}) => {


    const [clientValue, setClientValue] = useState(clientForm)
    const [clients, setClients] = useState([])
    const [client, setClient] = useState([])
    const [clientCount, setClientCount] = useState([])


    const setClientForm = (e) => {
        const {name, value} = e.target;
        setClientValue({...clientValue, [name]: value});
    }

    const getClients = async() => {
            const response = await axios.get('client')
            setClients(response.data.data)
            console.log(response.data.data)
    }

    const getClient = async(id) => {
        const response = await axios.get('client/' + id)
        const clientdata = response.data.data
        setClient(clientdata)
        setClientValue({
            username: clientdata.username,
            fullname : clientdata.fullname,
            password :clientdata.password, 
            email : clientdata.email,
            contact : clientdata.contact
        })
    }

    const storeClient = async(e) => {
        e.preventDefault();
        await axios.post("client", clientValue)
        setClientValue(clientForm);
    }


    // Project section

    const [projectValue, setProjectValue] = useState(projectForm)
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState([])

    const setProjectForm = (e) => {
        const {name, value} = e.target;
        setProjectValue({...projectValue, [name]: value});
    }

    const getProjects = async() => {
        const response = await axios.get('project')
        setProjects(response.data.data)
        console.log(response.data.data)
    }

    const getProject = async(id) => {
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
    }

    const storeProject = async(e) => {
        e.preventDefault();
        await axios.post("project", projectValue)
        setProjectValue(projectForm);
    }
    //Task Section

    const [taskValue, setTaskValue] = useState(taskForm)
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState([])

    const setTaskForm = (e) => {
        const {name, value} = e.target;
        setTaskValue({...taskValue, [name]: value});
    }

    const getTasks = async() => {
        const response = await axios.get('task')
        setTasks(response.data.data)
        console.log(response.data.data)
    }

    const getTask =  async(id) =>{
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
    }

    const storeTask = async(e) => {
        e.preventDefault();
        await axios.post("task", taskValue)
        setTaskValue(taskForm);
    }

    //Attachment Section

    const [attachmentValue, setAttachmentValue] = useState(attachmentForm)
    const [attachments, setAttachments] = useState([])

    const setAttachmentForm = (e) => {
        const {name, value} = e.target;
        setAttachmentValue({...attachmentValue, [name]: value});
    }

    const getAttachments = async() => {
        const response = await axios.get('attachment')
        setAttachments(response.data.data)
        console.log(response.data.data)
    }

    const storeAttachment = async(e) => {
        e.preventDefault();
        await axios.post("attachment", attachmentValue)
        setAttachmentValue(attachmentForm);
    }
    //Comment Section

    const [commentValue, setCommentValue] = useState(commentForm)
    const [comments, setComments] = useState([])

    const setCommentForm = (e) => {
        const {name, value} = e.target;
        setCommentValue({...commentValue, [name]: value});
    }

    const getComments = async() => {
        const response = await axios.get('comment')
        setComments(response.data.data)
        console.log(response.data.data)
    }

    const storeComment = async(e) => {
        e.preventDefault();
        await axios.post("comment", commentValue)
        setCommentValue(commentForm);
    }

    return <Connection.Provider value={{
        getClients, clients, setClients, clientForm, clientValue, setClientValue, getClient, client, setClient, storeClient, setClientForm, 
        getProjects, projects, setProjects, projectForm, projectValue, setProjectValue, getProject, project, setProject, storeProject, setProjectForm,
        getTasks, tasks, setTasks, taskForm, taskValue, setTaskValue, getTask, task, setTask, storeTask, setTaskForm,
        getAttachments, attachments, setAttachments, attachmentForm, attachmentValue, setAttachmentValue, setAttachmentForm, storeAttachment,
        getComments, comments, setComments, commentForm, commentValue, setCommentValue, setCommentForm, storeComment
    }}>
        {children}
    </Connection.Provider>
}

export default Connection