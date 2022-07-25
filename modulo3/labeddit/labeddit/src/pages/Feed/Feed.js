import React from 'react'
import Header from '../../components/Header/Header'
import { BoxPost, ButtonNewPost, ContarinerFeed, LineDivisorPost, SentBy, TextBoxPost } from './style'

export default function Feed() {
  return (
    <>
    <Header/>
    <ContarinerFeed>
      <TextBoxPost placeholder='Escreva seu post...'/>      
      <ButtonNewPost>Postar</ButtonNewPost>
      <LineDivisorPost />
      <BoxPost>
        <SentBy>Enviado por: User</SentBy>
      </BoxPost>
    </ContarinerFeed>
    </>
  )
}
