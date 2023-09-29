// import reactHalfLogo from '../assets/half react logo.svg'

export default function Main() {
    return (
        <div className='main'>
            <h1 className='title'>
                Fun facts about React
            </h1>
            <div className='main-body'>
                <ul className='list'>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                {/* <img src={reactHalfLogo} alt='React Logo' /> */}
            </div>

        </div>
    )
}