import '../Form.css';
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        guestAmount: 1,
        email: '',
        phone: '',
        time: '',
    });

    const navigate = useNavigate()


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Confirmation', {state: {propData: formData}});
    };

    return (
        <div className="Form">
        <form onSubmit={handleSubmit} className='FormBackground'>
            <div className='Form'>
                <div>
            <span>Please enter the amount of guests and date/time of the event</span><br/>
            <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required/></label><br/>
            <label>Date: <input type="date" name="date" value={formData.date} onChange={handleChange} required/></label><br/>
            <label>Time: <input type="time" name="time" value={formData.time} onChange={handleChange} required/></label><br/>
            <label>Number of Guests: <select name="numberOfGuests" value={formData.guestAmount} onChange={handleChange}>
                {[...Array(16)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
                </select>
                </label>
                <br />
                <span>Optional but helpful stuff:</span><br/>
                <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange}/></label><br/>
                <label>Phone: <input type="tel" name="phone" value={formData.phone} onChange={handleChange}/></label><br/><br/><br/>
                </div>
                </div>
                <div className='Form'>
                
                <button type="submit" className='Button'>Submit Reservation!</button><br/>
                </div>
                <span>Note: any parties bigger then 16 needs to call us directly.</span>
        </form>
        </div>
    )
    }

export default Form;
