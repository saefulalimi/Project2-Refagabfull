import React, {useState} from "react"

const FormLogin = () => {
    const [user, setUser] = useState(null);
    const [pass, setPass] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser('')
        setPass('')

    }

    const inputUser = (e) =>{
        setUser(e.target.value)
    }
    const inputPass = (e) =>{
        setPass(e.target.value)
    }

    return(
        <div>
            <h1>FormLogin</h1>
            <form onSubmit = {handleSubmit}>
                <input type="text" onChange={inputUser} value={user} name="nama" placeholder="Input Username"  />
                <input type="text" onChange={inputPass} value={pass} name="nama" placeholder="Password" />
                <button type="button">Login</button>
            </form>
        </div>
    )
}

export default FormLogin