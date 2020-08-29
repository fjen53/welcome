import React, { Component } from "react";
import Display from "../display/Display";
//import our service
import JeopardyService from "../../jeopardyServices";

class Jeopardy extends React.Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        Answer: "",
      },
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((curentState) => {
      let formData = { ...curentState.formData };
      formData.Answer = "";
      let newScore = curentState.score;
      if (curentState.formData.Answer === curentState.data.answer) {
        newScore = newScore + curentState.data.value;
      } else {
        newScore = newScore - curentState.data.value;
      }
      return {
        score: newScore,
        formData: formData,
      };
    });
    this.getNewQuestion();
  };

  render() {
    let category = "loading";
    if (this.state.data.category && this.state.data.category.title) {
      category = this.state.data.category.title;
    }

    return (
      <div className="Play">
        {/* <Display  */}
        {/* // data={this.state.data} 
        // formData={this.state.formData} 
        // /> */}
        <strong>Question:</strong> {this.state.data.question}
        <br />
        <strong>Value:</strong> {this.state.data.value}
        <br />
        <strong>Category:</strong> {category}
        <br />
        <strong>Score:</strong> {this.state.score}
        <br />
        <div className="Jeopardy">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="Answer">
                {" "}
                <strong> Answer:</strong>
              </label>
              <input
                type="text"
                name="Answer"
                value={this.state.formData.Answer}
                onChange={this.handleChange}
              />
            </div>

            <button onClick={this.handleSubmit}>Submit</button>
          </form>

          <div>{this.state.formData.Answer}</div>
        </div>
      </div>
    );
  }
}
export default Jeopardy;
