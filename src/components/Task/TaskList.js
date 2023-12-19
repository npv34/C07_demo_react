import "./TaskList.css";
import {useState} from "react";

const listTask = [
    {
        id: 1,
        title: "Di cho nau com",
        complete: false
    },
    {
        id: 2,
        title: "Hoc bai cu",
        complete: false
    },
    {
        id: 3,
        title: "Lam bai tap",
        complete: false
    }
]
function TaskList({name, age}) {
    const [data, setData] = useState(listTask);

    const completedTask = (index) => {
        const currentTask = data[index];
        currentTask.complete = !currentTask.complete;
        const newData = data.filter(item => item.complete !== true)
        setData([...newData])
    }

    return (
        <>
            <h3>Name: {name } - {age}</h3>
            <h2>{data.length} : task</h2>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                { data.map((item, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>
                            <input type="radio" onClick={() => completedTask(index)} checked={item.complete}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default TaskList;