import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToPage } from '../../routes/coordinator';
import { Logo } from '../Home/styled';
import { Button, ErrorContainer, TitleError } from './styled';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      <Logo>LabeX</Logo>
      <TitleError>PÁGINA NÃO ENCONTRADA</TitleError>
      <Button onClick={() => goToPage(navigate,"") }>Home</Button>
    </ErrorContainer>
  )
}
