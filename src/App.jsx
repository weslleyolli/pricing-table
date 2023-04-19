import "./styles/global.css"
import checked from "./assets/checked.svg"
import info from "./assets/info.svg"


function App() {
  return (
    <div className="bg-gray-100 w-screen h-screen mobile:h-full flex mobile:flex-col justify-center items-center gap-8 ">
      <div className="w-1/4 mobile:w-fit h-2/3 border border-gray-200 bg-white rounded-lg pt-12 p-8 flex flex-col gap-8 hover:border-purple200 mobile:mx-3">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-semibold text-base text-purple200">For you start</span>
          </div>
          <div className="flex justify-between gap-3">
            <h1 className="font-bold text-3xl">Essential</h1>
            <div className="flex items-end gap-1">
              <span className="text-base">$</span>
              <div className="flex items-center">
                <h1 className="font-bold text-2xl mobile:text-base">19,97</h1>
                <h1 className="font-bold">/mounth</h1>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full border-2 border-black rounded px-6 py-4 hover:bg-gray900 hover:text-white">Subscribe now</button>
        <div className="w-full h-0.5 bg-gray-200"></div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={checked} alt="" />
              <p>Until 3 user</p>
            </div>
            <div>
              <img src={info} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={checked} alt="" />
              <p>Self service</p>
            </div>
            <div>
              <img src={info} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 mobile:w-fit h-2/3 rounded-lg border bg-gray900 pt-12 p-8 flex flex-col gap-8 text-white hover:border-purple200 mobile:mx-3">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-semibold text-base text-purple100">For you to travel</span>
          </div>
          <div className="flex justify-between mobile:gap-3">
            <h1 className="font-bold text-3xl">Ultimate</h1>
            <div className="flex items-end gap-1">
              <span className="text-base">$</span>
              <div className="flex items-center">
                <h1 className="font-bold text-2xl mobile:text-base">29,97</h1>
                <h1 className="font-bold">/mounth</h1>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-purple100 rounded px-6 py-4 hover:bg-purple200">Subscribe now</button>
        <div className="w-full h-0.5 bg-gray-700"></div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={checked} alt="" />
              <p>User unlimited</p>
            </div>
            <div>
              <img src={info} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={checked} alt="" />
              <p>Support 24Hrs</p>
            </div>
            <div>
              <img src={info} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={checked} alt="" />
              <p>CSM dedicated </p>
            </div>
            <div>
              <img src={info} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={checked} alt="" />
              <p>Trainings</p>
            </div>
            <div>
              <img src={info} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 mobile:w-fit h-2/3 border border-gray-200 bg-white rounded-lg pt-12 p-8 flex flex-col gap-8 hover:border-purple200 mobile:mx-3">
        <div className="flex flex-col gap-8">
          <div>
            <span className="font-semibold text-base text-purple100">For you company</span>
          </div>
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Enterprise</h1>
          </div>
        </div>
        <button className="w-full bg-white border-2 border-black rounded px-6 py-4 hover:bg-gray900 hover:text-white">Subscribe now</button>
        <div className="w-full h-0.5 bg-gray-200"></div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={checked} alt="" />
              <p>Customized plan especially for <br/> the needs of your business</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
