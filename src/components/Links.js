import {Link} from 'react-router-dom';

function Links () {

    const links = [
        {
          id: "twitter__link",
          url: "https://twitter.com/IAM_SOLOMUN",
          content: "Twitter Link"
        },
        {
          id: "btn__zuri",
          url: "https://training.zuri.team/",
          content: "Zuri Team"
        },
        {
          id: "books",
          url: "http://books.zuri.team",
          content: "Zuri Books"
        },
        {
          id: "book__zuri",
          url: "https://books.zuri.team/python-for-beginners?ref_id=solex55",
          content: "Python Books"
        },
        {
          id: "pitch",
          url: "https://background.zuri.team",
          content: "Backgroung Checks for Coders"
        },
        {
          id: "book__design",
          url: "https://books.zuri.team/design-rules",
          content: "Design Book"
        }/* ,
        {
          id: "contact",
          url: "/contact",
          content: "Contact Me"
        } */
      ]

    return (
      <div>
        <div className='flex flex-col w-full mx-auto text-sm md:text-2xl lg:text-2xl sm:text-xl items-center text-center mt-8 px-5'>
          {links.map((link) => ( 
            <a href={link.url} className='w-full bg-gray-300 rounded-lg active:bg-gray-700 mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id={link.id}>{link.content}</a>
            ))}
           <Link to={'/contact'}  id='contact' className='w-full bg-gray-300 rounded-lg active:bg-gray-700 mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200'>Contact Me</Link>
{/* 
          <a href={twitter} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="twitter__link">Twitter Link</a>
          <a href={btnZuri} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 shadow-sm font-bold hover:bg-gray-200' id="btn__zuri">Zuri Team</a>
          <a href={books} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="books">Zuri Books</a>
          <a href={bookPython} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="book__zuri">Python Books</a>
          <a href={pitch} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="pitch">Backgroung Checks for Coders</a>
          <a href={bookDesign} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="book__design">Design Books</a> 
*/}
        </div>
      </div>
    )
  }

export default Links;