import React, { useState } from 'react';
import Footer from './Footer';


const FlawlessHelper = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I am Flawless Helper. Type 'quit' to end the conversation." },
  ]);
  const [input, setInput] = useState('');

  const pairs = [
    [/(hi|hello|hey)/i, ["Hello! I'm Flawless Helper from Fit_Calda. How can I assist you today?", "Hi there! How can I help?", "Hey, what's up?"]],
    [/(what types of fitness wear do you offer\??)/i, ["At Fit_Calda, we offer leggings, sports bras, crop tops, jackets, and more—perfect for active women."]],
    [/(are your clothes suitable for (hiit|high[- ]intensity workouts)\??)/i, ["Yes! Our fitness wear is made for intense workouts like HIIT, CrossFit, and cardio."]],
    [/(what materials are your products made from\??)/i, ["We use premium blends like nylon-spandex and polyester-elastane for comfort, flexibility, and durability."]],
    [/(are your clothes squat[- ]proof\??)/i, ["Absolutely! Our leggings and shorts are tested to be 100% squat-proof."]],
    [/(how do i choose the right size\??)/i, ["You can check our detailed size chart on each product page. When in doubt, size up for a relaxed fit."]],
    [/(do your clothes run true to size\??)/i, ["Yes, most of our customers find our sizes to be very accurate."]],
    [/(do you offer international shipping\??)/i, ["Yes, Fit_Calda ships worldwide! Shipping costs and delivery times will be calculated at checkout."]],
    [/(what is your return policy\??)/i, ["You can return any unworn, unwashed items within 30 days. Just keep the tags attached."]],
    [/(are your products ethically made\??)/i, ["Yes, Fit_Calda works with ethical, eco-conscious manufacturers committed to fair practices."]],
    [/(do you offer plus[- ]size options\??)/i, ["Yes! We proudly offer sizes ranging from XS to 3XL."]],
    [/(how should i wash my (workout clothes|fitness wear)\??)/i, ["Machine wash cold and hang dry to keep your Fit_Calda gear looking fresh."]],
    [/(who are you|what is your name\??)/i, ["Hello there i am flawless helper"]],
    [/(bye|quit)/i, ["It was great chatting with you . have a great day"]],
    [/(Thanks|Thank you|You are so helpful)/i, ["Always availablee to offer help"]],
  ];
  
   

  const getBotResponse = (input) => {
    for (let [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "Sorry, something went wrong.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    let botMessage;

    if (input.toLowerCase() === 'quit') {
      botMessage = { sender: 'bot', text: "Goodbye! Have a nice day." };
    } else {
      const response = getBotResponse(input);
      botMessage = { sender: 'bot', text: response };
    }

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="minee">
        <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">Helper ChatBot</h5>
          <div className="border p-2 mb-3" style={{ height: '300px', overflowY: 'auto' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div
                  className={`p-2 rounded ${
                    msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                  }`}
                  style={{ maxWidth: '75%' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
     
    </div>
    <Footer/>
    </div>
    
  );
};

export default FlawlessHelper;