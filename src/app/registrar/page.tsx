import Link from 'next/link'

export default function Registrar() {
    return (
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
        <h1 className="text-slate-900 font-black text-3xl md:text-6xl capitalize">Crea tu cuenta y administra tus {' '}<span className="text-slate-600">personajes</span></h1>

        <form 
          className="my-10 bg-white shadow rounded-lg p-10"
        >
          <div className="my-5 ">
              <label 
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="nombre"
              >Nombre</label>
              <input 
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                // value={nombre}
                // onChange={e => setNombre(e.target.value)}
              />
          </div>
  
          <div className="my-5 ">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="email"
            >Email</label>
            <input 
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              autoComplete="email"
              // value={email}
              // onChange={e => setEmail(e.target.value)}
            />
          </div>
  
          <div className="my-5 ">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >Password</label>
            <input 
              id="password"
              type="password"
              placeholder="Password de Registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              autoComplete="current-password"
              // value={password}
              // onChange={e => setPassword(e.target.value)}
            />
          </div>
  
          <div className="my-5 ">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password2"
            >Repetir Password</label>
            <input 
              id="password2"
              type="password"
              placeholder="Repetir tu Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              autoComplete="current-password"
              // value={repetirPassword}
              // onChange={e => setRepetirPassword(e.target.value)}
            />
          </div>
  
          <input 
            type="submit"
            value="Crear Cuenta"
            className="bg-slate-900 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-slate-600 transition-colors"
          />

            <nav className="lg:flex lg:justify-between ">
                <Link
                    className="block text-center my-3 text-slate-500 uppercase text-sm"
                    href="/"
                >¿Ya tienes una cuenta? Inicia sesión aquí</Link>
        
                <Link
                    className="block text-center my-3 text-slate-500 uppercase text-sm"
                    href="/olvide-password"
                >Olvide mi password</Link>
            </nav>
        </form>
  
      </main>
    )
  }