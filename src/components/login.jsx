import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Add your authentication logic here
      // If authentication is successful:
      history.push('/dashboard');
    };
  
    if (log){
            return (
                <div>
                  <h1>Login</h1>
                  <form onSubmit={handleLogin}>
                    <input 
                      type="text" 
                      placeholder="Username" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)} 
                      required 
                    />
                    <input 
                      type="password" 
                      placeholder="Password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required 
                    />
                    <button type="submit">Login</button>
                  </form>
                </div>
        )
    }
}

export default Login;




 

