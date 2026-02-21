import { useState } from 'react'

const AddTodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onAddTodo(input.trim())
      setInput('')
    }
  }

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task... ✍️"
        className="todo-input"
      />
      <button type="submit" className="add-btn">
        + Add
      </button>
    </form>
  )
}

export default AddTodoForm