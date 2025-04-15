import "./globals.css";
import BottomTopArrow from './components/BottomTopArrow'
import {Web3Provider} from '../app/hooks/WebProvider'
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Token Gainers",
  description: "Token Gainers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./assets/favicon.png" sizes="32x32" />
        <link rel="icon" href="./assets/favicon.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="./assets/favicon.png" />
      </head>
      <body>
        <Toaster  autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
        <Web3Provider>
           {children}
        </Web3Provider>
        <BottomTopArrow/>
      </body>
    </html>
  );
}
