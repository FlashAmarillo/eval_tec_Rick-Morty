import Link from 'next/link'

const page = () => {
  return (
    <main className="container h-screen mx-auto md:grid md:grid-cols-2 gap-10 p-5 items-center">
        <h1 className="text-slate-900 font-black text-4xl md:text-6xl">Recupera tu Acceso y no Pierdas {""}<span className="text-slate-600">tus Pacientes</span></h1>
        
        <form className="mt-8 md:mt-5 shadow px-5 py-10 rounded-xl bg-white">
            
            <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                <input 
                    type="email"
                    placeholder="Tu Email"
                    className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                    
                />
            </div>
            
            <input 
                type="submit"
                value="Enviar Instrucciones"
                className="bg-slate-900 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-slate-600 md:w-auto" 
            />

            <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-500" href="/">¿Ya tienes una cuenta? Inicía Sesión</Link>
                <Link className="block text-center my-5 text-gray-500" href="/registrar">¿No tienes una cuenta? Registrate Aquí</Link>
            </nav>
        </form>
        
    </main>
  )
}

export default page