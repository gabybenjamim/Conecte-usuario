import { useNavigate } from 'react-router-dom'

import CriarForm from '../CriarForm/CriarForm'
import styles from './Criar.module.css'







function Criar() {
    const navigate = useNavigate()
function createPost(usuario) {
    // inicializar cost and services
    
    usuario.email = 0
    usuario.senha = []

    .fetch("http://localhost:5000/usuarios", {
        method: 'GET',
        headers: {
            'Context-Type': 'application/json',
        },
    }) 
}








    return (
        <div className={styles.criar_container}>
            <h1>Criar Conta</h1>
            <p>Crie uma conta e junte-se a nós</p>
            <CriarForm />
        </div>
    )
}

export default Criar