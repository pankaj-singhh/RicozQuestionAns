import React from "react";

const Contact = () => {
  return (
    <div>
      {/**for flex */}
      <div className=" flex flex-col lg:flex-row mt-10">
        <div className="border w-[95vw] ml-2.5 lg:w-[550px] lg:ml-16 lg:h-[35vh] lg:mt-6">
          <div className="flex ml-2">
            <div>
              <img src="./images/call.svg" alt="" />
            </div>
            <div className="ml-3">
              <p>0000 00 0000</p>
            </div>
          </div>
          <div className="w-[80vw] h-[1px] border mt-2 lg:w-[35vw]"></div>
          <div className="flex mt-5 ml-2">
            <div>
              <img src="./images/location.svg" alt="" />
            </div>
            <div className="ml-3">
              <p>Address</p>
            </div>
          </div>
          <div className="w-[80vw] h-[1px] border mt-2 lg:w-[35vw]"></div>
          <div className="flex mt-5 ml-2">
            <div>
              <img src="./images/msg.svg" alt="" />
            </div>
            <div className="ml-3 pb-3">
              <p>qwer@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" w-[45vw] border-[2px] mt-5 rounded-xl ml-3 lg:ml-16  ">
            <textarea
            className="w-[90vw] h-[40vh] lg:w-[45vw] lg:h-[28vh]"
             
             
              placeholder="Leave your query here our team will get back to you"
            ></textarea>
          </div>
          <div className="w-[150px] h-[40px] bg-red-400 text-center pt-2 rounded-xl ml-28 mt-5 mb-10 lg:ml-96 ">
            <button className="text-white">Submit</button>
          </div>
        </div>
      </div>
      {/*end flex */}
    </div>
  );
};

export default Contact;
