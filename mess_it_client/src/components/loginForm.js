import { useState } from "react"
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const authObject = {
            'Project-ID': "87b15f3a-77e1-4910-94ec-1c3f9fe541df",
            'User-Name': username,
            "User-Secret": password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload()
        } catch (err) {
            setError(`Ой. Что-то пошло не так. ${err}`)
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">MessIt</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        className="input"
                        placeholder="Имя пользователя"
                        required />
                    <input
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        className="input"
                        placeholder="Ваш пароль"
                        required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Войти</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm