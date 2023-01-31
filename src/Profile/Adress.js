import React from "react"
class Adress extends React.Component {
    constructor() {
        super();
        this.state = { show: true };
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.setState(prevState => ({
          show: !prevState.show
        }));
      }
    render() {
        return (
            <div>
            {this.state.show ?  <h2>My adress is: Appartment 16, 3 roof, Madaghachkar street, Rabat, MOROCCO</h2>: 'OFF'}    
            <button onClick={this.handleClick}> Is it True or False</button>
            </div>)
    }
}
export default Adress

