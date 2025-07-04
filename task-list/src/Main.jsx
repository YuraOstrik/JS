import {useState, useEffect} from 'react';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';

function Main(){

    const [tasks,setTasks] = useState(()=>{
        const storedTodos = localStorage.getItem('tasks');
        if(!storedTodos){
            return []
        } else {
            return JSON.parse(storedTodos);
        }
    });
    const [tasksTitle, setTasksTitle] = useState('');

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks])

    const addTask = (e) => {
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        if (tasksTitle.trim()){
            setTasks([
                ...storedTodos, {
                    id: uuidv4(),
                    title: tasksTitle,
                    status: false
                }
            ]);
            setTasksTitle('');
        }
        
    }

    const date = new Date();
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <div className='container'>
            <h1>Note your tasks</h1>
            <span>{month + ' ' + day + ', ' + year}</span>
            <div className='input-filed'>
                <div style={{display: 'flex'}}>
                    <input type='text' 
                    value={tasksTitle}
                    onChange={event => setTasksTitle(event.target.value)}
                    />
                    <button
                        onClick={addTask}
                        title='Добавить задачу'
                        className="material-icons"
                        style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        fontSize: '18px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}
                    >
                        add
                    </button>
                </div>
                <label>Task name</label>
            </div>
            <List tasks={tasks} />
        </div>
    );
}

export default Main;