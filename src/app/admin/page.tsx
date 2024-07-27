

export default function Admin() {
  return (
    <div className="bg-white mt-5 px-5 py-10 rounded-md border md:w-3/4 mx-auto">
        <h1 className="text-gray-600 font-bold text-2xl normal-case text-center">Resultados Aproximados 📊</h1>
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-2">
            <div className="mt-4 mx-2 py-2 px-1 border border-slate-400 rounded-md">
                <h1 className="text-2xl font-bold text-center p-2">826</h1>
                <p className="w-full text-center">📈Personajes Encontrados</p>
            </div>

            <div className="mt-4 mx-2 py-2 px-1 border border-slate-400 rounded-md">
                <h1 className="text-2xl font-bold text-center p-2">Rick Sanchez</h1>
                <p className="w-full text-center">💞Favorito</p>
            </div>

            <div className="mt-4 mx-2 py-2 px-1 border border-slate-400 rounded-md">
                <h1 className="text-2xl font-bold text-center p-2">Evil Morty</h1>
                <p className="w-full text-center">👎Impopular</p>
            </div>
        </div>

        <div className="mt-3">
            <h1 className="text-gray-600 font-bold text-2xl normal-case text-center">Estadisticas generales</h1>
            <p className="mt-2">Datos totales relacionados con la serie</p>
            <div className="mt-4 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-3">
                
                <div className="flex justify-between md:block w-full py-3 px-1 bg-gray-50 border border-slate-400 rounded-md gap-x-1">
                    <h1 className="text-center flex items-center md:block text-md md:text-2xl font-bold">Creadores</h1>
                    <div className="flex flex-col my-2 items-center justify-center">
                        <h3>Justin Roiland</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center my-2">
                        <h3>Dan Harmon</h3>
                    </div>

                    <div className="flex flex-col my-2 text-center items-center text-2xl font-bold">
                        <h3>País de origen</h3>
                        <p className="text-base font-normal">🗽 Estados Unidos</p>
                    </div>
                </div>
    
                <div className="flex justify-between md:block w-full py-3 px-1 bg-gray-50 border border-slate-400 rounded-md gap-x-1">
                    <h1 className="text-center flex items-center md:block text-md md:text-2xl font-bold">Idiomas</h1>
                    <div className="flex flex-col my-2 text-center">
                        <p className="text-md">Inglés</p>
                    </div>

                    <div className="flex flex-col text-center items-center my-2">
                        <h3 className="font-bold text-2xl">Episodios</h3>
                        <p className="font-normal text-md">51</p>
                    </div>
                </div>
    
                <div className="flex justify-between md:block w-full py-3 px-1 bg-gray-50 border border-slate-400 rounded-md gap-x-1">
                    <h1 className="text-center flex items-center md:block text-md md:text-2xl font-bold">Puntuación en IMDb</h1>
                    <div className="flex flex-col my-2 text-center">
                        <p className="font-bold text-md md:text-xl">9.1 ⭐</p>
                    </div>

                    <div className="flex flex-col text-center items-center my-2">
                        <h3>Streaming</h3>
                        <p className="font-bold text-md md:text-xl">Prime Video</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
