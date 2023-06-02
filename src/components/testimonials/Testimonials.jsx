import "./testimonials.scss"

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img className="user" src="https://www.joomshaper.com/images/increase-credibility.jpg" alt="" />
            <img className="right" src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Quae explicabo ipsum 
            praesentium itaque vitae iste, repellendus 
            amet voluptatem magni! 
          </div>
          <div className="bottom">
            <h3>
              Shawkat Sujon
            </h3>
            <h4>Software Engineer</h4>
          </div>
          </div>
        </div>
    </div>
  )
}
