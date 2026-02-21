const TodoStats = ({ todos }) => {
  const total = todos.length
  const completed = todos.filter(t => t.completed).length
  const active = total - completed

  return (
    <div className="todo-stats">
      <div className="stat">
        <span className="stat-label">Total</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Active</span>
        <span className="stat-value">{active}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Completed</span>
        <span className="stat-value">{completed}</span>
      </div>
    </div>
  )
}

export default TodoStats