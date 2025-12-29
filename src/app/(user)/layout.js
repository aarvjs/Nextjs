import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import Navgation from './components/navigation';


export default function RootLayout({ children }) {
  return (
    
      <html>
      <body>
        <Navgation />

        <>{children}</>
       
      </body>
    </html>
  );
}
