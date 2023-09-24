export default function Todo({
    id,
    text,
    isCompleted,
    toggleTodoStatus
}) {
    return (
        <tr key={id} className={`todo ${isCompleted ? 'is-completed' : ''}`.trim()}>
                        <td>{text}</td>
                        <td>{isCompleted ? 'Completed' : 'Not Completed'}</td>
                        <td className="todo-action">
                            <button className="btn todo-btn" 
                            onClick={() => toggleTodoStatus(id)}>Change status</button>
                    </td>
                    </tr>
    );
}