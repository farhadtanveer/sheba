import React from "react";

const ServiceWorkflow = () => {
  return (
    <div>
      <div className="h-[450px] font-poppins mb-10">
        <div className="max-w-screen-lg mx-auto">
          <div className=" pt-12">
            <p className="text-sm flex justify-start items-center gap-3">
              <p className=" w-8 h-[1px] bg-gray-400"></p>
              <p>HOW IT WORKS</p>
            </p>
            <p className=" text-3xl mt-3 font-semibold tracking-wide">
              Easiest way to get a service
            </p>
          </div>
          <div className=" flex justify-between gap-12 mt-8">
            <div className=" w-full">
              <iframe
                className="rounded-lg h-[330px] w-full"
                src="https://www.youtube.com/embed/OMW0BfVYSOI"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col justify-between gap-6 w-full">
              <div className="flex justify-center items-center gap-4">
                <p className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#56cad0] to-[#036481] text-2xl text-white text-center p-3">
                  1
                </p>
                <div>
                  <p className="text-xl font-semibold tracking-wide mb-2">
                    Select the Service
                  </p>
                  <p className="text-sm tracking-wider">
                    Pick the service you are looking for- from the website or
                    the app.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4">
                <p className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#56cad0] to-[#036481] text-2xl text-white text-center p-3">
                  2
                </p>
                <div>
                  <p className="text-xl font-semibold tracking-wide mb-2">
                    Pick your schedule
                  </p>
                  <p className="text-sm tracking-wider">
                    Pick your convenient date and time to avail the service.
                    Pick the service provider based on their rating.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-4">
                <p className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#56cad0] to-[#036481] text-2xl text-white text-center p-3">
                  3
                </p>
                <div>
                  <p className="text-xl font-semibold tracking-wide mb-2">
                    Place Your Order & Relax
                  </p>
                  <p className="text-sm tracking-wider">
                    Review and place the order. Now just sit back and relax.
                    We’ll assign the expert service provider’s schedule for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWorkflow;
