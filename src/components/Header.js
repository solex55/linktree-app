import Profile from '.././assets/profileImage.png';
import HoverProfile from '.././assets/HoverProfileImage.png';
import Github from '.././assets/github.png';
import Shareicon from '.././assets/share.png';
import Moreicon from '.././assets/more.png';
 
function Header() {
    return (
      <div>
            <div className='flex flex-col w-full mx-auto mt-5 items-center text-center font-inter relative'>
                <a href="www.twitter.com" className='relative'>
                    <img src={Profile} alt='Profile Pic' className='opacity-100 hover:opacity-0' id='profile__img' style={{borderRadius: '50%', width:'100px', height:'100px' }} />
                    <img src={HoverProfile} alt='Profile Pic' className='opacity-0 hover:opacity-100 absolute top-0' style={{borderRadius: '50%', width:'100px', height:'100px' }} />
                </a>
                <a href={Github} >
                    <img src={Shareicon} alt='Share icon' className='absolute top-3 right-5 hidden lg:flex borderR'/>
                    <img src={Moreicon} alt='More icon' className='absolute border-dashed border-5 border-gray-400 right-5 top-0 lg:hidden' />                    
                </a>
                <div className='text-xl md:text-3xl lg:text-3xl font-bold' id='twitter'>
                    <h1>Solomon Achugwoh</h1>
                </div>
                <div className='text-xl md:text-3xl lg:text-3xl font-bold hidden' id='slack'>
                    <h1>Solex55</h1>
                </div>
            </div>
      </div>
    )
  }

export default Header;