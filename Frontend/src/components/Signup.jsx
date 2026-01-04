import "./../index.css"

export default function Signup() {
  return (
    <div className="signup-container">
        <h2>Signup Page</h2>
        <form className="signup-form">
            <label>Username:</label>
            <input type="text" name="username" required />
            <label>Email:</label>   
            <input type="email" name="email" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <div className="row">
                <label>age:</label>
                <input type="number" name="age" required />
                <label>weight:</label>
                <input type="number" name="weight" required />
            </div>
            <div className="row">
                <label>height:</label>
                <input type="number" name="height" required />
                <label>fitness goal:</label>
                <input type="text" name="goal" required />
            </div>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}
