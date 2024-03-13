import React from "react";
import pic from '../images/book1.jpg'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="bg-danger text-center mt-3">About Us..</h1>
            <div className="font-weight-bold text-monospace">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo
              cum, illo, rerum voluptatum eligendi alias tempora eos accusamus
              ipsa facilis, enim at aliquid? Quo porro sequi rerum dolores,
              dolore amet! Animi perferendis est, beatae, illo porro iusto ex
              iure cumque quas possimus eligendi praesentium! Magni illo est
              provident quia possimus sed voluptate! Repellat sunt soluta,
              dignissimos earum exercitationem, laboriosam beatae odio quas,
              delectus obcaecati omnis excepturi odit. Qui dolor animi laborum
              adipisci facilis quos totam dolores ipsa vero soluta? Fugiat
              doloremque consectetur alias quae beatae velit minus, a totam
              impedit saepe vel dolorum molestias cupiditate ducimus, assumenda
              qui eius!
            </div>
            <div><img src={pic} alt="Book's Image" width={'100%'} height={'400px'} className="mt-3 mb-4"/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
