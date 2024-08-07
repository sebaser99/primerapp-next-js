import { WidgetGrid } from "@/components/dashboard/WidgetGrid";
import { Metadata } from "next";

export const generateMetadata = ():Metadata => {
  return {
      title: `Dashboard Main`,
      description: `Página principal del dashboard  `
  }
}
const MainPage = () => {
  return (
    <div className="text-black p-3">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información General</span>
      
      <WidgetGrid />
    </div>
  )
}

export default MainPage;