import MyMessage from "./myMessage"

const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.userName

    const imgStyle = {
        marginLeft: isFirstMessageByUser ? '4px' : '48px'
    }
    const textStyle = {
        float: 'left',
        backgroundColor: '#CABCDC',
        marginLeft: isFirstMessageByUser ? '4px' : '48px'
    }

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{
                        backgroundImage: `url(${message?.sender?.avatar})`
                    }} />
            )}
            <MyMessage
                message={message}
                imgStyle={imgStyle}
                textStyle={textStyle} />
        </div>
    )
}

export default TheirMessage