import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToPage } from '../../routes/coordinator';
import { Button } from './styled';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      ErrorPage
      <Button onClick={() => goToPage(navigate,"") }>Home</Button>
    </div>
  )
}
