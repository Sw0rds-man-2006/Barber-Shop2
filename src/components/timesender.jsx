import React, { useState } from "react";
import "./TimeSender.css"; // فایل استایل جداگانه

const TimeSender = () => {
    const [time, setTime] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!time) {
            alert("Please select a time!");
            return;
        }

        setResponseMessage("");
        setLoading(true);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ time })
            });

            const data = await response.json();
            setResponseMessage(`✅ Time sent successfully: ${time}`);
        } catch (error) {
            setResponseMessage("❌ Failed to send time.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="time-sender">
            <h2 className="time-sender__title">Enter a Time</h2>
            <form className="time-sender__form" onSubmit={handleSubmit}>
                <input className="time-sender__input" type="time" value={time} onChange={handleChange} required />
                <button className="time-sender__button" type="submit">Send Time</button>
                {loading && <div className="time-sender__loading"></div>}
            </form>
            <p className="time-sender__message">{responseMessage}</p>
        </div>
    );
};

export default TimeSender;