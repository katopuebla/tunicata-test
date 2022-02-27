import React from 'react';

const RegisterLogin = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleRegisterUser = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, pass)
            .then( resp => alert('Usiario registrado'))
    }

    return ( 
        <div className="mt-4">
            <form onSubmit={handleRegisterUser} className="mt-3">
                <input type="email" className="fromControl mb-3" placeholder="usuario" onChange={e => setEmail(e.target.value)}/>
                <input type="password" className="fromControl mb-3" placeholder="Contraseña" onChange={e => setPass(e.target.value)}/>
                <buttton type="submit" className="btn btn-block btn-info">Registrarse</buttton> 
            </form>
        </div>
     );
}
 
export default RegisterLogin;