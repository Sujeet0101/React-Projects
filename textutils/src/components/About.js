import React from "react";

export default function About(props) {
  // const [mystyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "grey",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (mystyle.color === "black") {
  //     setMyStyle({
  //       color: "grey",
  //       backgroundColor: "black",
  //       border: "1px solid grey",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "grey",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <>
      <div className="container" style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: 'grey'}} >
        <h4 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>About Us</h4>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: 'grey'}} 
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: 'grey'}} >
              TextUtils gives you a way to analyze your text quickly and efficiently.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: 'grey'}} 
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: 'grey'}} >
                TextUtils is a free character count tool that provides instant character count and word count statistics
                for a given text. TextUtils reports the number of words and characters. This is suitable for writing text
                with suitable word/character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: 'grey'}} 
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: 'grey'}} >
                This word counter software works in any browser like Chrome, Firefox, Microsoft Edge, Safari, Opera.
                It suits to count character in facebook, blogs, book, excel document, pdf document etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
