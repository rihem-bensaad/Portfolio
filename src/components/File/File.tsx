import './File.scss';

export default function File() {
    return (
        <div>
        <div className="jumbotron">
      <div className="container">  
        <div className="main">
          <h1>We are Broadway</h1>
          <a href="#" className="btn-main">Get Started</a>
          
        </div>
      </div>
    </div>

    <div className="supporting">
      <div className="container">
        <div className="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"/>
          <h2>Design</h2>
          <p>Make your projects look great and interact beautifully.</p>
          <a href="#" className="btn-default">Learn More</a>
          
        </div>
        <div className="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg"/>
          <h2>Develop</h2>
          <p>Use modern tools to turn your design into a web site</p>
          <a href="#" className="btn-default">Learn More</a>
          
        </div>
        <div className="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/deploy.svg"/>
          <h2>Deploy</h2>
          <p>Use modern tools to turn your design into a web site</p>
          <a href="#" className="btn-default">Learn More</a>
          
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
    </div>


        
    )
}