import React from 'react';
import { Button } from 'react-bootstrap';
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
      currentIndex: -1,
      progress: 0,
      isYSbtnClicked: false,
      nextBtnActivated: true,
      result: [],
    }
    this.nextQuestion = this.nextQuestion.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.submitform = this.submitform.bind(this);
    this.returnBtnClicked = this.returnBtnClicked.bind(this);
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
    let gender = document.getElementById("inlineRadio1").checked ? 1 : 0
    this.state.result.push(age)
    this.state.result.push(gender)
    this.setState((state, props) => {
      return {
        currentIndex: state.currentIndex + 1,
      }
    })
  }

  returnBtnClicked() {
    console.log('hi')
    this.setState((state, props) => {
      return {
        currentIndex: -1,
        
      }
    })
  }

  render() {
    let view
    if (this.state.currentIndex === -1) {
      view = (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card mt-5">
                <div className="card-body">
                  <form>
                    <div className="form-group row">
                      <label htmlFor="age" className="col-sm-2 col-form-label col-form-label-lg">Age</label>
                      <div className="col-2">
                        <input type="age" className="form-control form-control-lg" id="age" placeholder="Your Age" />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="gender" className="col-2 col-form-label-lg">Gender</label>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                      </div>
                    </div>

                  </form>
                  <button className="btn btn-primary" onClick={this.submitform}>Submit</button>
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
            <div className="row">
              <div className="col my-5">
                <BarOfProgress progress={this.state.progress} />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <img src={this.state.testImagePath[this.state.currentIndex]} className="img-thumbnail" width="455" height="455" alt={this.state.testImagePath[this.state.currentIndex]} />
              </div>
              <div className="col-7 d-flex flex-column">
                <div className="mb-auto p-2">
                  <h2> Test Instruction</h2>
                  <ul className="list-group list-group-flush">
                    {this.state.testInstruction[this.state.currentIndex].map((instruction, index) =>
                      <li key={index} className="list-group-item">{index + 1}. {instruction}</li>
                    )}
                  </ul>
                </div>
                <div className="d-flex justify-content-around">
                  <Button size="lg" onClick={() => this.clickButton(1)} disabled={this.state.isYSbtnClicked}>　　　Yes　　　</Button>
                  <Button size="lg" onClick={() => this.clickButton(0)} disabled={this.state.isYSbtnClicked}>　　　No　　　</Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {this.state.isYSbtnClicked && <div className="my-5">
                  <h5>Result</h5>
                  <p>
                    {this.state.resultsDescription[this.state.currentIndex][this.state.choice]}
                  </p>
                </div>}
              </div>
            </div>
            <Button className="bottom-right" size="lg" onClick={this.nextQuestion} disabled={this.state.nextBtnActivated}>　　　Next　　　</Button>
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
              <Button size="lg" onClick={this.returnBtnClicked}>　　　Return　　　</Button>
            </div>
          </div>
        )
      }
    }
    return (view)
  }
}

export default TestingPage;