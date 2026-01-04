import "./../index.css"

export default function Login() {
  return (
    <div className="login-container">   
        <h2>Login Page</h2>
        <form className="login-form">
            <label>Username:</label>
            <input type="text" name="username" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}