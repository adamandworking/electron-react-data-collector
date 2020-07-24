import React from 'react';
import BarOfProgress from './BarOfProgress'
import './TestingPage.css';

class TestingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfQuestion: props.data.numberOfQuestion,
      testImagePath: props.data.testImagePath,
      testInstruction: props.data.testInstruction,
      resultsDescription: props.data.resultsDescription,
      timestamp: props.data.timestamp,
      testTitle: props.data.testTitle,
      currentIndex: -2,
      progress: 0,
      isYSbtnClicked: false,
      nextBtnActivated: true,
      result: [],
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.submitform = this.submitform.bind(this);
    this.returnBtnClicked = this.returnBtnClicked.bind(this);
    this.cancelButtonClicked = this.cancelButtonClicked.bind(this);
    this.returnYNResult = this.returnYNResult.bind(this);
    this.homeButtonClicked = this.homeButtonClicked.bind(this);
  }

  nextQuestion() {
    this.setState((state, props) => {
      return {
        currentIndex: state.currentIndex + 1,
        progress: 1 / state.numberOfQuestion * (state.currentIndex + 1) * 100,
        isYSbtnClicked: false,
        nextBtnActivated: true,
      }
    }, callback);

    function callback() {
      console.log(this.state.currentIndex)
      console.log(this.state.testImagePath[this.state.currentIndex])
    }
  }

  clickButton(choice) {
    this.state.result.push(choice)
    this.setState((state, props) => {
      return {
        isYSbtnClicked: true,
        choice: choice,
        nextBtnActivated: false,
      }
    })
  }

  submitform() {
    let age = document.getElementById("age").value
    let isMale = document.getElementById("inlineRadio1").checked  //? 1 : 0
    let isFemale = document.getElementById("inlineRadio2").checked
    let continent = document.getElementById("continent").selectedIndex
    let gender;
    if (isMale) {
      gender = 1
    } else if (isFemale) {
      gender = 2
    } else {
      gender = 0
    }
    if (age === "" || gender === 0 || continent === 0) {
      return false
    }
    this.state.result.push(age)
    this.state.result.push(gender)
    this.state.result.push(continent)
    this.setState((state, props) => {
      return {
        currentIndex: state.currentIndex + 1,
      }
    })
  }

  returnBtnClicked() {
    const fs = window.fs
    fs.appendFile("log/" + String(this.state.timestamp) + ".txt", this.state.result + ';\n', function (err) {
      if (err) throw err;
    });
    this.setState((state, props) => {
      return {
        currentIndex: -1,
        progress: 0,
        isYSbtnClicked: false,
        nextBtnActivated: true,
        result: [],
      }
    })
  }

  cancelButtonClicked() {
    this.setState((state, props) => {
      return {
        currentIndex: -1,
        progress: 0,
        isYSbtnClicked: false,
        nextBtnActivated: true,
        result: [],
      }
    })
  }

  homeButtonClicked() {
    this.setState((state, props) => {
      return {
        currentIndex: -2,
        progress: 0,
        isYSbtnClicked: false,
        nextBtnActivated: true,
        result: [],
      }
    })
  }

  returnYNResult(boolean) {
    if (boolean) {
      return (
        <td className="text-success">Yes</td>
      )
    } else {
      return (
        <td className="text-danger">No</td>
      )
    }

  }

  render() {
    let view
    if (this.state.currentIndex === -2) {
      view = (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto align-self-center">
              <div className="pad150">
                <img src="./image/logo.png"></img>
              </div>
              <div className="text-center pad70">
                <h4>Guided Vision Test System for Early <br></br>Diagnosis of Ocular Dieases</h4>
              </div>
              <div className="text-center pt-5">
                <button type="button" class="btn btn-outline-dark wider-button" onClick={this.cancelButtonClicked}>Start</button>
              </div>
              <div className="text-center pt-5">
                <button type="button" class="btn btn-outline-dark wider-button">About</button>
              </div>
              <div className="text-center pt-3">
                <a onClick={() => { console.log("Hello World") }}><small>Disclaimer</small></a>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.currentIndex === -1) {
      view = (
        <div className="container">
          <div className="center">
            <div className="row">
              <div className="col">
                <div className="card mt-5">
                  <div className="card-body">
                    <form>
                      <div className="form-group row">
                        <label htmlFor="age" className="col-2 col-form-label col-form-label-lg">Age</label>
                        <div className="col-4">
                          <input type="age" className="form-control form-control-lg" id="age" placeholder="Your Age" required />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="gender" className="col-2 col-form-label-lg">Gender</label>
                        <div className="form-check form-check-inline pl-3 pb-1">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                          <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline mb-1">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                          <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                        </div>

                      </div>
                      <div className="form-group row">
                        <label htmlFor="continent" className="col-2 col-form-label col-form-label-lg">Continent</label>
                        <div className="col-4">
                          <select required className="custom-select custom-select-lg mb-3" id="continent" defaultValue={"DEFAULT"}>
                            <option value="DEFAULT">Open this select menu</option>
                            <option value="1">Africa</option>
                            <option value="2">Antarctica</option>
                            <option value="3">Asia</option>
                            <option value="4">Europe</option>
                            <option value="5">North America</option>
                            <option value="6">Australia</option>
                            <option value="7">South America</option>
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-outline-dark wider-button" onClick={this.submitform}>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      if (this.state.currentIndex < this.state.numberOfQuestion) {
        view = (
          <div className="container">
            <div className="row justify-content-end mt-5">
              <button type="button" className="btn btn-danger" onClick={this.cancelButtonClicked}>Cancel</button>
            </div>
            <div className="row">
              <div className="col my-5">
                <BarOfProgress progress={this.state.progress} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <img src={this.state.testImagePath[this.state.currentIndex]} className="img-thumbnail" width="500" height="500" alt={this.state.testImagePath[this.state.currentIndex]} />
              </div>
              <div className="col-6 d-flex flex-column">
                <div className="mb-auto p-2">
                  <h1>{this.state.testTitle[this.state.currentIndex]}</h1>
                  <h4>Test Instruction</h4>
                  <ul className="list-group list-group-flush">
                    {this.state.testInstruction[this.state.currentIndex].map((instruction, index) =>
                      <li key={index} className="list-group-item">{index + 1}. {instruction}</li>
                    )}
                  </ul>
                </div>
                <div className="d-flex justify-content-around">
                  <button className="btn btn-outline-dark wider-button" onClick={() => this.clickButton(1)} disabled={this.state.isYSbtnClicked}>Yes</button>
                  <button className="btn btn-outline-dark wider-button" onClick={() => this.clickButton(0)} disabled={this.state.isYSbtnClicked}>No</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-11">
                {this.state.isYSbtnClicked && <div className="my-5">
                  <h5>Result</h5>
                  <p>
                    {this.state.resultsDescription[this.state.currentIndex][this.state.choice]}
                  </p>
                </div>}
              </div>
            </div>
            <a onClick={() => { console.log("Hello World!") }}>
              <img className="circle-btn" src="./image/audio.svg" alt="Avatar" />
            </a>
            <button className="bottom-right btn btn-outline-dark wider-button" onClick={this.nextQuestion} disabled={this.state.nextBtnActivated}>Next</button>
          </div>)
      }
      else {
        view = (
          <div className="container">
            <div className="row">
              Result Page : {this.state.result}
              {console.log(this.state.result)}
            </div>
            <div className="row">
              <button className="btn btn-outline-dark wider-button" onClick={this.returnBtnClicked}>Return</button>
            </div>
          </div>
        )

        view = (
          <div className="container">
            <div className="row justify-content-end mt-5">
              <button type="button" className="btn btn-danger" onClick={this.cancelButtonClicked} disabled>Cancel</button>
            </div>
            <div className="row">
              <div className="col my-5">
                <BarOfProgress progress={this.state.progress} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h3 className="text-center">Your Results:</h3>
                <img className="rounded mx-auto d-block py-5" src="./image/smile.jpg" />
                <div className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum tempor scelerisque. Cras libero dui, aliquam sit amet ornare rutrum, tempus et dui. Quisque eget odio in ligula blandit molestie. Nullam imperdiet arcu eu tortor malesuada tincidunt. Etiam a convallis massa. Nunc vitae interdum lectus, eu dictum lacus. Proin in ullamcorper elit. In elementum mauris facilisis justo gravida convallis eu in magna. Proin ac cursus mauris.
                </div>
              </div>
              <div className="col-6 d-flex flex-column">
                <div className="mb-auto p-2">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ocular Diseases</th>
                        <th scope="col">Confirmed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.testTitle.map((diseaseName, index) => 
                      <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{diseaseName}</td>
                      {this.returnYNResult(this.state.result[index + 3])}
                    </tr>
                    )}
                    </tbody>
                  </table>

                </div>
                <div className="d-flex justify-content-around">
                  <button className="btn btn-outline-dark wider-button" onClick={this.returnBtnClicked}>Test Again</button>
                  <button className="btn btn-outline-dark wider-button" onClick={this.homeButtonClicked}>Home</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-11">
                {this.state.isYSbtnClicked && <div className="my-5">
                  <h5>Result</h5>
                  <p>
                    {this.state.resultsDescription[this.state.currentIndex][this.state.choice]}
                  </p>
                </div>}
              </div>
            </div>
          </div>)
      }
    }
    return (view)
  }
}

export default TestingPage;