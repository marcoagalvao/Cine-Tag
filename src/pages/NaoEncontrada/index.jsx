import styles from './NaoEncontrada.module.css'

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {

    const navigate = useNavigate()

  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>O conteúdo que você procura não foi encontrado</p>
        <button onClick={()=> navigate(-1)}>Voltar</button>
    </section>
  )
}
