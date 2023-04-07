import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/cocktail-logo.png'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src={logo} width={80} height={80} />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/cocktail'>Cocktails</Link>
    </nav>
  )
}

export default Navbar
