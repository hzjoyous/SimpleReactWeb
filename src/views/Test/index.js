import React, { Component } from 'react'

var synthVoice = function (text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    synth.speak(utterance);
}


export default class index extends Component {
    constructor() {
        super()
        this.state = {
            text: "中文"
        }
    }
    say = () => {
        synthVoice(this.state.text)
    }
    handleInputChange = (e) => {
        this.setState({
            text: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.handleInputChange} />
                <button onClick={this.say}>{'按钮'}</button>
            </div>
        )
    }
}
