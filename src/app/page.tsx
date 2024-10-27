'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PublicRoute from './PublicRoute'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters."}).max(50),
})

export default function Home() {

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  type Credentials = {
    email: string;
    password: string;
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Obtener el arreglo de usuarios del localStorage
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

    // Buscar el usuario en el arreglo
    const user = users.find((user: User) => user.email === values.email && user.password === values.password)
    
    if (user) {
      // Guardar el estado de inicio de sesión en localStorage
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('loggedInUser', JSON.stringify({ name: user.name, email: user.email }))
      alert('Logged in successfully!')
      // Redirigir a la página de la aplicación
      router.push('/admin')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <PublicRoute>
      <main className="container h-screen mx-auto md:grid md:grid-cols-2 gap-10 p-5 items-center">
        <div>
          <h1 className="text-slate-900 font-black text-3xl md:text-4xl lg:text-6xl">Inicia Sesión y Administra tus personajes <span className="text-slate-500">favoritos</span></h1>
        </div>

        <div className="mt-8 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }: { field: any}) => (
                  <FormItem className='my-5'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder="Tu Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }: { field: any}) => (
                  <FormItem className='my-5'>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder="Tu password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex justify-start'>
                <Button
                  size={'lg'} 
                  className='my-5 text-lg'
                  type="submit"
                  value="Iniciar Sesión"
                >Login</Button>
              </div>


            </form>
          </Form>

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link className="block text-center my-5 text-gray-500" href="/registrar">¿No tienes una cuenta? Registrate Aquí</Link>
            <Link className="block text-center my-5 text-gray-500" href="/olvide-password">Olvide mi password</Link>
          </nav>
        </div>
      </main>
    </PublicRoute>
  );
}
