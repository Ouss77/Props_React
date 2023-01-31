import React from "react";
class MyComponent extends React.Component {
    state = {
      timeSinceLastMount: 0
    };
  
    componentDidMount() {
      this.intervalId = setInterval(() => {
        this.setState(prevState => ({
          timeSinceLastMount: prevState.timeSinceLastMount + 1
        }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  
    render() {
      return (
        <div>Time since last mount: {this.state.timeSinceLastMount} seconds</div>
      );
    }
  }
   export default MyComponent