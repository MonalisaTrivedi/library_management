import React from "react";
import p1 from'../images/book_head.webp'
import p2 from '../images/The-Mouse-That-Was.jpg'
import p3 from '../images/book2.avif'
import p4 from '../images/images.jpeg'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="card mb-3">
              <img src={p1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Welcome to Our Library</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="text-center bg-danger">Books</h1>
  <div class="card-group">
  <div class="card">
    <img src={p2} class="card-img-top p-2" alt="Book1" height={'300px'} />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={p3} class="card-img-top p-2" alt="Book2" height={'300px'}/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={p4} class="card-img-top p-2" alt="Book3" height={'300px'}/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
