import './globals.css'

import { Manrope, Open_Sans as Open, Raleway} from 'next/font/google'

import { Roboto_Flex as Roboto} from 'next/font/google'



const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const manrope = Raleway({ subsets: ['latin'], variable: '--font-raleway', weight: ['300', '400', '500', '600', '700', '800'] });
const open = Open({ subsets: ['latin'], variable: '--font-open' });

export const metadata = {
  title: 'Ícaro Teodoro.',
  description: 'Meu portifólio criado com React usando Next.js!',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body className={`${manrope.variable}`}>{children}</body>
    </html>
  )
}
