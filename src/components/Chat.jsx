import React, { useState, useRef, useEffect } from 'react';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [otherUserName, setOtherUserName] = useState('Other User'); // Set the other user's name here
    const messagesEndRef = useRef(null);

    const handleMessageSend = () => {
        if (inputValue.trim() === '') return;
        setMessages([...messages, { text: inputValue, sender: 'user' }]);
        setInputValue('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleMessageSend();
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#f0f0f0', overflowY: 'hidden' }}>
            {/* Navigation bar */}
            <nav style={{ backgroundColor: '#007bff', color: '#ffffff', padding: '10px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 1 }}>
                Chatting with {otherUserName}
            </nav>
            {/* Chat messages */}
            <div style={{ flex: '1', overflowY: 'auto', padding: '20px' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left', color: message.sender === 'user' ? '#808080' : '#000', backgroundColor: message.sender === 'user' ? '#f0f0f0' : '#fff', padding: '5px 10px', borderRadius: '5px', marginBottom: '5px', maxWidth: '70%', wordWrap: 'break-word' }}>
                        {message.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            {/* Input field and send button */}
            <div style={{ padding: '20px', position: 'sticky', bottom: 0, zIndex: 1 }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
                />
                <button onClick={handleMessageSend} style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#ffffff', cursor: 'pointer' }}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chat;
