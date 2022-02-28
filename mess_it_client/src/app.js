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
                projectID="87b15f3a-77e1-4910-94ec-1c3f9fe541df"
                userName={username}
                userSecret={password}
                renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />} />
            :
            <LoginForm />
    )
}

export default App