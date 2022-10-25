import I4G from '.././assets/I4G.png';
import Zuri from '.././assets/Zuri.png';


function Footer (){
    return (
        <footer className='flex mx-5 my-16 justify-between hidden lg:flex'>
            <a href="www.Zuri.com">
                <img src={Zuri} alt='Zuri logo' />
            </a>
            
            <p className='text-gray-600 text-xl text-center font-thin'>HNG Internship 9 Frontend Task</p>

            <a href="www.I4G.com">
                <img src={I4G} alt='I4G logo' />
            </a>
        </footer>    
    );
  }


export default Footer;