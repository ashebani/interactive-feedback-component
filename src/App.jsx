import { useState } from "react";
import star from "./images/icon-star.svg";
import illustration from "./images/illustration-thank-you.svg";

const App = () => {
  const [feedback, setFeedback] = useState(null);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="App bg-primaryVeryDarkBlue">
      <main className="w-[370px] bg-primaryDarkBlue rounded-2xl">
        {submit === false ? (
          /* First Component */
          <div className="text-white py-8 px-6 grid gap-2">
            <img
              className="p-2 bg-gray-700 rounded-full mb-4"
              src={star}
              alt="star"
            />
            <h1 className="text-2xl mb-2">How did we do?</h1>
            <p className="text-primaryLightGrey mb-6 text-md">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us imporve our offering!
            </p>
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4, 5].map((number) => {
                return (
                  <button
                    onClick={() => setFeedback(number)}
                    className="cursor-pointer p-3 aspect-square text-center text-primaryLightGrey bg-gray-700 rounded-full w-12
                  focus:bg-primaryMediumGrey focus:text-white
                  hover:bg-primaryOrange hover:text-white
                  active:bg-primaryOrange active:text-white
                  "
                  >
                    {number}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setSubmit(true)}
              disabled={feedback === null}
              className="active:bg-white active:text-primaryOrange
          tracking-widest uppercase bg-primaryOrange rounded-full py-2.5"
            >
              Submit
            </button>
          </div>
        ) : (
          /* Second Component */

          <div className="text-center py-8 px-6 flex flex-col justify-start gap-4 items-center h-[388px] text-white">
            <img className="m-auto" src={illustration} alt="" />
            <div className=" text-primaryOrange bg-gray-700 rounded-full py-1 px-4 text-sm">
              You selected {feedback} out of 5
            </div>
            <h2 className="text-2xl mt-2">Thank you!</h2>
            <p className="text-md text-primaryLightGrey">
              We appreciate you taking the time to give a rating.If you need
              more support, don't hesitate to get in touch!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
