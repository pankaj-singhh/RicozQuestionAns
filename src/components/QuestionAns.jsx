import React from "react";

const QuestionAns = () => {
  return (
    <div>
      <div className="w-[95vw] ml-2.5 bg-gray-200 mt-5">
        <div className="text-center text-2xl lg:text-5xl">
          <h1 className="font-bold">Frequently Asked Questions</h1>
        </div>
        <div className="w-[85vw] lg:w-[90vw] ml-5 mt-5">
          <div>
            <p className="text-red-400">
              Q: How can I find a contractor for my specific project?
            </p>
            <p>
              A: Absolutely! Our experts can assist you in creating harmonious
              color combinations that suit your style and the mood you want to
              achieve in your space.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-red-400">
            Q: How do I request a service from NAME?
            </p>
            <p>
            A: Simply click on the "Request Service" button on our website or contact us through the provided contact form. Share essential project details and preferences, and we will connect you with the right contractors.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-red-400">
            Q: How long does it take to complete a project with NAME?
            </p>
            <p>
            A: Project timelines may vary depending on the scope and complexity of the work. Our contractors work efficiently to minimize delays and complete projects within reasonable timeframes.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-red-400">
            Q: Is there a warranty for NAME's services?
            </p>
            <p>
            A: Yes, NAMEt offers warranties on our services to ensure your peace of mind. The specific warranty details will be provided during the project proposal stage.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-red-400">
            Q: What payment options does NAME accept?
            </p>
            <p>
            A: NAME accepts various payment options, including credit/debit cards, bank transfers, and online payment platforms, for your convenience.
            </p>
          </div>
          
          <div className="mt-8 pb-10">
            <p>If you have any other questions or need further information, feel free to reach out to our customer support team. At ProCoat, we are committed to providing you with exceptional service and addressing all your queries to ensure a smooth and successful project experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAns;
