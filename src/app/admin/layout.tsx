import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex items-start justify-between">
        <div className="hidden lg:flex min-w-[300px] border-r min-h-screen">
          <Sidebar />
        </div>
        <div 
          className="grid w-full h-full" /* TODO: REVISAR ESTOS ESTILOS, ROMPE EL ANCHO */
        >
          <Header />
          <div className="p-8">
            {children}
          </div>
        </div>
      </main>
    );
  }