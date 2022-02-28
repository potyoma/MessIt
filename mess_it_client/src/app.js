import { ChatEngine } from 'react-chat-engine'
import './app.css'
import ChatFeed from './components/chatFeed'
import LoginForm from './components/loginForm'

const App = () => {
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')

    return (
        username && password
            ?
            <ChatEngine
                height="100vh"
                projectID=""
                userName={username}
                userSecret={password}
                renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />} />
            :
            <LoginForm />
    )
}

export default App