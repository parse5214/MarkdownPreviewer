let initialState = `
 # Heading
 ## Subheading 

 [This is a link](https://randomwordgenerator.com)

 This is an inline code \`int x = 5\`

 This is a code block

 \`\`\`
 sort(vec.begin(), vec.end(), customSort);
 List<Integer> li = new ArrayList<>();
 for (key, val) in dic.items():
 \`\`\`

 This is a list
 - item 1
 - item 2
 - item 3

 > This is blockquote

 ![This is an image](https://funvizeo.com/media/memes/9b2ace08f1513ee7/do-not-question-the-fruity-one-meme-145bd35163caae3e-a51982786949ff81.jpg)

 **This is a bolded text**
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text : initialState
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text : event.target.value
    })
  }

  render() {
    let markdown = marked.parse(this.state.text, {breaks : true});
    return (
    <div className="container-md">
      <h1 className="text-center my-4 text-dark">Markdown Previewer</h1>
      <div className="row my-3">
        <div className="col-md-6 offset-md-3">
          <textarea className="form-control" value={this.state.text} id="editor" onChange={this.handleChange}>
          </textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 my-3">
          <div className="form-control" id="preview" dangerouslySetInnerHTML={{__html : markdown}}>
          </div>
        </div>
      </div>
    </div>);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);