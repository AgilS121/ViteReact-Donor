// eslint-disable-next-line react/prop-types, no-unused-vars
const PopupForm = ({ isVisible, onClose }) => {
    return isVisible ? (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg w-screen max-w-3xl"> 
          <div className="flex justify-end mb-2">
            <button onClick={onClose} className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="font-bold text-lg">Masukkan Pengalaman Anda</p>
          <form className="flex flex-col" onSubmit={(event) => event.preventDefault()}>
            <div className="flex flex-col pt-3">
              <label htmlFor="kategori">Kategori</label>
              <input
                type="text"
                id="kategori"
                required
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="flex flex-col pt-3">
              <label htmlFor="title">Judul</label>
              <input
                type="text"
                id="title"
                required
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="flex flex-col pt-3">
              <label htmlFor="pengalaman">Masukkan Pengalaman</label>
              <textarea
                name="pengamalan"
                id="pengalaman"
                cols="30"
                rows="10"
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
  
            <div className="flex flex-col pt-3">
              <label htmlFor="file">Masukkan Foto Dokumentasi Anda</label>
              <input type="file" id="file" name="file" className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
  
            <input
              type="submit"
              value="Kirim"
              className="bg-red-700 rounded-xl text-white font-bold text-lg hover:bg-gray-700 p-2 mt-3"
            />
          </form>
          <hr className="my-2 border-t border-gray-300" />
          <div className="flex justify-end">
            <button onClick={onClose} className="text-red-500 font-semibold">
              Close
            </button>
          </div>
        </div>
      </div>
    ) : null;
  };
  
  export default PopupForm;
  