import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import './index.css'

function Login(): JSX.Element {
  return (
  <section className="w-full h-screen flex flex-col items-center justify-center bg-[#202A62]">
    <div className="w-[35rem] min-h-[10rem] bg-white rounded-lg shadow-lg p-4 flex flex-col gap-2">
   
      <Input label="Login" className="input" size="lg"/>

      <Input label="Senha" className="input" type="password" size="lg"/>

      <Button color="green" className="mt-4"> Acessar </Button>

      <Typography variant="small">
        Esqueceu a senha? 
          <strong className="font-bold hover:text-blue-gray-600 cursor-pointer transition-all">
            {" "} clique aqui
          </strong>
        </Typography>
    </div>
  </section>
  )
}

export { Login }
