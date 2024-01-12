import { CiCircleMore } from "react-icons/ci";
const Main = () => {
  return (
    <div className="flex  flex-col h-screen ">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start  sm:items-end w-full h-auto p-4">
        <img
          className="w-60 "
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-desert-indie-album-song-cover-art-design-template-a82f1df5f64521d0a382c4d7f1bc491a_screen.jpg?ts=1597477501"
          alt=""
        />
        {/* Text Box */}
        <div className="ms-5 flex flex-col gap-y-2 mt-10 sm:mt-0">
          <p className="text-base  font-medium">PLAYLIST</p>
          <h1 className="text-4xl font-bold text-white">Driving</h1>
          <p className="text-base text-[15px]">Pop jams for the car</p>
          <p className="text-base text-[15px]">Create by Yodpeth Pimarthan</p>
          <div className="flex items-center w-full gap-x-1">
            <button className="btn btn-sm btn-primary w-32  text-white">
              Play
            </button>
            <details className="dropdown  dropdown-end">
              <summary className="m-1 btn border-none bg-transparent hover:bg-transparent">
                <CiCircleMore size={35} />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Edit Detail</a>
                </li>
                <li>
                  <a>Delete</a>
                </li>
              </ul>
            </details>
            <button></button>
          </div>
        </div>
      </div>
      <div className="bg-green-500 w-full h-full"></div>
    </div>
  );
};

export default Main;
