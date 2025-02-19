import type { Metadata } from 'next';
import '../styles/index.scss';
import { NavBar } from '@/widgets/NavBar';
import { Footer } from '@/widgets/Footer';
import { Jost } from 'next/font/google';


export const jost = Jost({
    weight: ['300', '400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'СальсаБрест - школа сальсы в Бресте | salsabrest.by',
    description: 'Учим танцевать парный танец сальса (salsa) с нуля в Бресте. Молодым людям до 28 лет скидки.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const bgFirst = 'var(--bg-color)';

    return (
        <html lang='ru'>
            <body>
                <div className={`${jost.className} app`}>
                    <NavBar />
                    {children}
                    <Footer backgroundColor={bgFirst} />
                </div>
                
                <div id='modal-root'></div>
            </body>
        </html>
    );
}
