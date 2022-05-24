import Head from 'next/head'
import Navbar from './Navbar'


export default function Layout({ children, user = '' ,title = 'Anderson Forest Products, Inc.' }) {
  return (
    <div className='min-h-screen dark:bg-bg_dark transition-colors'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar level={user.level} />
      {children}
    </div>
  )
}
