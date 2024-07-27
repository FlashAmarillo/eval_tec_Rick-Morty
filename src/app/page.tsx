'use client'

import Link from 'next/link'
import { useState } from 'react';

export default function Home() {

  type Credentials = {
    email: string;
    password: string;
  }

  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  })

  const handleChange = (e: any) => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('enviando...', credentials);
  }

  return (
    <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
      <div>
        <h1 className="text-slate-900 font-black text-3xl md:text-4xl lg:text-6xl">Inicia Sesión y Administra tus personajes <span className="text-slate-500">favoritos</span></h1>
      </div>

        <div className="mt-8 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label htmlFor='email' className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email de Registro"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        autoComplete="username"
                        required
                        //value={email}
                        onChange={handleChange}
                    />
                </div>

                <div className="my-5">
                    <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Tu password"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        autoComplete="current-password"
                        required
                        //value={password}
                        onChange={handleChange}
                    />
                </div>

                <input 
                    type="submit"
                    value="Iniciar sesión"
                    className="bg-slate-900 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-slate-600 md:w-auto transition-colors" 
                />
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-500" href="/registrar">¿No tienes una cuenta? Registrate Aquí</Link>
                <Link className="block text-center my-5 text-gray-500" href="/olvide-password">Olvide mi password</Link>
            </nav>
        </div>

    </main>
  );
}
