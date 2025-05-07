
import "./globals.css";
import NuevoAppbar from "./components/NuevoAppbar";
import Footer from "./components/Footer"
import { Averia_Sans_Libre, Noto_Sans } from 'next/font/google';
import Provider from "./Provider";

//import CardAbout from "./components/CardAbout"
/*import FormContact from "./contact/FormContact";*/


const averia_sans_libre = Averia_Sans_Libre({
  subsets: ['latin'],
  weight: ['400', '700'], // Pesos que deseas usar
  variable: '--font-averia_sans_libre', // Nombre de la variable CSS
});

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Pesos que deseas usar
  variable: '--font-noto_sans', // Nombre de la variable CSS
});


export const metadata = {
  title: "Sancho Recabarren | Escritor",
  description: "Generado por Cecilia Sánchez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`${averia_sans_libre.variable} ${noto_sans.variable} antialiased`}>
      <Provider>
        <NuevoAppbar />      
      
        <main className="flex-grow" >
       
        {children}
        
        </main>
        <Footer />
        </Provider>
      </body>
    </html>
  );
}



{/*const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Pesos que deseas usar
  variable: '--font-roboto', // Nombre de la variable CSS
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Pesos que deseas usar
  variable: '--font-montserrat', // Nombre de la variable CSS
});*/}

