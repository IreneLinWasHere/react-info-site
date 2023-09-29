import reactLogo from '../assets/react.svg'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <img src={reactLogo} alt='React Logo' className='logo-img' />
                <h1 className='logo-h1'>
                    ReactFacts
                </h1>
            </div>

            <h4 className='extra-title'>React Course - Project 1</h4>
        </nav>
    )
}
