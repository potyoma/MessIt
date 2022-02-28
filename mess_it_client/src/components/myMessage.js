const MyMessage = ({ message, imgStyle, textStyle }) => {
    return (
        message?.attachments?.length > 0
            ?
            <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className="message-image"
                style={imgStyle || { float: 'right' }} />
            :
            <div
                className="message"
                style={textStyle || {
                    float: 'right',
                    marginRight: '18px',
                    color: 'white',
                    backgroundColor: '#3B2850'
                }}>
                {message.text}
            </div>
    )
}

export default MyMessage