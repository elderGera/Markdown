const initialState  = `# Heading 1
## Heading 2
### Heading 3
  
**bold**

[link](https://rozetka.com.ua)

\`<div></div>\`

> code
  
\`\`\`
  
let x = 0;
  
\`\`\`

- List item 1
- List item 2
- List item 3

![FreeCodeCamp](http://ixbt.photo/photo/812167/47702Qi9BGgVw8y/1099385w.jpg)
`;

class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    const { text } = this.state;
    
    const markdown = marked.parse(text, {breaks: true});
    
    return(
      <div>
        <h2 className="text-center m-3 pt-3">Convert your Markdown</h2>
        <div className="row m-4">
          <div className="col-md-6">
            <h5 className="text-center m-3">Enter your markdown:</h5>
            <textarea className="form-control" id="editor" value={text} onChange={this.handleChange} />
          </div>
          <div className="col-md-6">
            <h5 className="text-center m-3">See the result:</h5>
              <div className="preview rounded p-1" id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
          </div>  
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
