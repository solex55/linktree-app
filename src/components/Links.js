
function Links () {
    const twitter = "https://twitter.com/IAM_SOLOMUN"
    const btnZuri = "https://training.zuri.team/"
    const books = "http://books.zuri.team"
    const bookPython = "https://books.zuri.team/python-for-beginners?ref_id=solex55"
    const pitch = "https://background.zuri.team"
    const bookDesign = "https://books.zuri.team/design-rules"

    return (
      <div>
        <div className='flex flex-col w-full mx-auto text-sm md:text-2xl lg:text-2xl sm:text-xl items-center text-center mt-8 px-5'>
          <a href={twitter} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="twitter__link">Twitter Link</a>
          <a href={btnZuri} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 shadow-3xl font-bold hover:bg-gray-200' id="btn__zuri">Zuri Team</a>
          <a href={books} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="books">Zuri Books</a>
          <a href={bookPython} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="book__zuri">Python Books</a>
          <a href={pitch} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="pitch">Backgroung Checks for Coders</a>
          <a href={bookDesign} className='w-full bg-gray-300 rounded-lg mb-5 p-3 md:p-5 lg:p-5 font-bold hover:bg-gray-200' id="book__design">Design Books</a>
      </div>
      </div>
    )
  }

export default Links;