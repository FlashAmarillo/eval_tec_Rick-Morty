'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PublicRoute from '../PublicRoute'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from '@/components/ui/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters."}).max(50),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters."}).max(50),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters.", }).max(50)
}).refine((data) => (data.password === data.confirmPassword),{
  message: "Ambos password no coinciden",
  path: ["confirmPassword"]
})

export default function Registrar() {

  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    // Obtener el arreglo de usuarios del localStorage
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')

    // Verificar si el usuario ya existe
    const userExists = users.some(user =>
      user.name === values.name &&
      user.email === values.email &&
      user.password === values.password
    )

    if (userExists) {
      toast({
        title: "Usuario ya registrado",
        description: (
          <span>
            Este usuario ya ha sido registrado previamente.{' '}
            <Link href="/" className="underline text-blue-500">Inicia sesión aquí</Link>.
          </span>
        )
      })
      return // No continuar con el registro
    }

    // Añadir el nuevo usuario al arreglo
    users.push({
      name: values.name,
      email: values.email,
      password: values.password
    })

    // Guardar el nuevo arreglo de usuarios en el localStorage
    localStorage.setItem('users', JSON.stringify(users))

    router.push('/')

  }

  return (
    <PublicRoute>
      <main className="container h-screen mx-auto md:grid md:grid-cols-2 gap-10 p-5 items-center">
        <h1 className="text-slate-900 font-black text-3xl md:text-6xl capitalize">Crea tu cuenta y administra tus {' '}<span className="text-slate-600">personajes</span></h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-10 bg-white shadow rounded-lg p-10"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }: { field: any}) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder="Tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
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
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder="Tu Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>

              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }: { field: any}) => (
                <FormItem>
                  <FormLabel>Repetir Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder="Repite tu Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              className='my-5'
              type="submit"
              value="Crear Cuenta"
            >Crear Cuenta</Button>

            <nav className="lg:flex lg:justify-between ">
              <Link
                className="block text-center my-3 text-slate-500"
                href="/"
              >¿Ya tienes una cuenta? Inicia sesión aquí</Link>
      
              <Link
                className="block text-center my-3 text-slate-500"
                href="/olvide-password"
              >Olvide mi password</Link>
            </nav>

          </form>
        </Form>
        
      </main>
    </PublicRoute>
  )
}