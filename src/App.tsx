import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        text: ""
    }

    render = () => {
        return (
            <div className="App">
                <div className="Writer">
                    <form>
                        <h1>Writer mode</h1>
                        <textarea onChange={this.handleChange}/>
                    </form>

                </div>
                <div className="Tome">
                    <div className="Content">
                        {this.state.text
                            .split("\n\n")
                            .filter((paragraph: string) => { return paragraph.trim().length })
                            .map((paragraph: string) => {

                            if (paragraph.includes("@chart")) { // bartchart page
                                return <div className="Page Barchart">
                                    <div className="Box Text">
                                        <div className="Text">
                                            {paragraph.replace("@chart", "")}
                                        </div>
                                    </div>
                                    <div className="Box Chart">
                                        <div className="Chart">
                                            <img src="tome/images/barchart.png"/>
                                        </div>
                                    </div>
                                </div>
                            } else if (paragraph.includes("@giphy theoffice")) {
                                return <div className="Page Giphy">
                                    <div className="Box Text">
                                        <div className="Text">
                                            {paragraph.replace("@giphy theoffice", "")}
                                        </div>
                                    </div>
                                    <div className="Box Giphy">
                                        <div className="Giphy">
                                            <img src="tome/images/giphy.gif"/>
                                        </div>
                                    </div>
                                </div>
                            } else if (paragraph.startsWith("#")) {
                                return <div className="Page Box Text">
                                    <h1 className="Text">
                                        {paragraph.replace("#", "")}
                                    </h1>
                                </div>
                            } else { // text page
                                return <div className="Page Box Text">
                                    <p className="Text">
                                        {paragraph}
                                    </p>
                                </div>
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }

    handleChange = (event: any) => {
        console.log(event.target.value)
        this.update_tome(event.target.value)
    }

    update_tome = (text: string) => {
        this.setState({
            text: text
        });
    };
}

export default App;
