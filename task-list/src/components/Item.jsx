import {useState} from 'react';

export default function Item({title, id, status}){

    const [checked, setChecked] = useState(status);
    const classes = ['todo'];


    if (checked) {
        classes.push('status');
    }

    const updateStatus = () => {
        setChecked(!checked);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        storedTodos.map((el)=>{
            if(el.id === id){
                el.status = !checked;
            }
            return true
        })
        localStorage.setItem('tasks',JSON.stringify(storedTodos));
    }

    const [visible,setVisible] = useState(true);

    const removeElement = () => {
        setVisible(prev => !prev);
        const storedTodos = JSON.parse(localStorage.getItem('tasks'));
        let removeTodos = storedTodos.filter(item => {
            if(item.id !== id){
                return true
            }
            return false
        });
        localStorage.setItem('tasks',JSON.stringify(removeTodos));
    }

    return (
        <>
            {visible && (
                <li className={classes.join(' ')}>
                    <label>
                        <input type="checkbox"
                        checked={checked}
                        onChange={updateStatus} />
                        <span>{title}</span>
                        <button className="material-icons red-text"
                        onClick={removeElement}
                        style={{backgroundColor: 'white',
                        color: 'red',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        fontSize: '18px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',}}>
                            Delete
                        </button>
                    </label>
                </li>
            )}
        </>
    )
}