import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [fields, setFields] = useState({username: "", password: ""});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFields(prev => ({...prev, [name]: value}));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", "nothing");
        navigate("/dashboard");
    };
    return (
        <div className="page login">
            <div className="login-form-card">
            <h2>LOGIN</h2>
            <form className="consultation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>USERNAME</label>
                    <input 
                        type="text" 
                        className="form-input"
                        name="username"
                        value={fields.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <div className="password-label">
                        <label>PASSWORD</label>
                        <div onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    <input 
                        type={showPassword ? "text" : "password"}
                        className="form-input"
                        name="password"
                        value={fields.password}
                        onChange={handleChange}
                        required
                    />
                    
                </div>
                <button type="submit" className="btn primary form-submit">
                  Login
                </button>
            </form>
            </div>
        </div>
    )
}
