import I4G from '.././assets/I4G.png';
import Zuri from '.././assets/Zuri.png';


function Footer (){
    return (
        
        <footer className='flex flex-col md:flex-row lg:flex-row justify-between mx-5 my-16 border-t-2 border-gray-300'>
            <a href="www.Zuri.com" className='py-4'>
                <img src={Zuri} alt='Zuri logo' />
            </a>
            
            <p className='text-gray-600 text-xl py-4 font-thin'>HNG Internship 9 Frontend Task</p>

            <a href="www.I4G.com" className='py-4'>
                <img src={I4G} alt='I4G logo' />
            </a>
        </footer> 
    );
  }


export default Footer;