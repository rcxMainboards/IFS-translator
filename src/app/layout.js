import { Inter } from 'next/font/google';
import { Providers } from './Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'IFS-CDR',
    description: 'IFS traductor de comentarios',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
