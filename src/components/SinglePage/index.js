import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class SinglePage extends Component {
  state = {
    category: 'HEALTH',
    taskcharacter: '',
    alltasks: [],
    clickedcategory: '',
  }

  handleOptionChange = e => {
    this.setState({category: e.target.value})
  }

  onchanginginput = e => {
    this.setState({taskcharacter: e.target.value})
  }

  onadding = () => {
    const {category, taskcharacter, alltasks} = this.state
    const newObject = {
      id: uuidv4(),
      tasks: taskcharacter,
      categorys: category,
    }

    this.setState({
      alltasks: [...alltasks, newObject],
      taskcharacter: '',
      category: 'HEALTH',
    })
  }

  onclickedButton = e => {
    this.setState({clickedcategory: e})
  }

  render() {
    const {category, taskcharacter, alltasks} = this.state
    const length = alltasks.length > 0
    console.log(alltasks)
    return (
      <div className="outermostContainer">
        <li className="FirstPart">
          <h1 className="heading">Create a task!</h1>
          <div>
            <label htmlFor="enterTask" className="labels">
              Task
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter The Task Here"
              value={taskcharacter}
              onChange={this.onchanginginput}
              id="enterTask"
              className="inputs"
            />
            <br />
            <label htmlFor="dropdown">Tags</label>
            <br />
            <select
              id="dropdown"
              value={category}
              onChange={this.handleOptionChange}
              className="inputs"
            >
              {tagsList.map(eachitem => (
                <option value={eachitem.optionId}>
                  {eachitem.displayText}
                </option>
              ))}
            </select>
            <br />
            <button type="button" onClick={this.onadding} className="Adding">
              Add Task
            </button>
          </div>
        </li>

        <li className="SecondPart">
          <ul>
            <h1>Tags</h1>
            {tagsList.map(eachitem => (
              <button
                type="button"
                className="buttons1"
                onClick={() => this.onclickedButton(eachitem.optionId)}
              >
                {eachitem.displayText}
              </button>
            ))}
          </ul>
          <ul>
            <h1>Tasks </h1>
            {length ? (
              <div>
                {alltasks.map(eachitem => (
                  <li className="innermostContainer">
                    <p>{eachitem.tasks}</p>
                    <p className="backgrounddiff">{eachitem.categorys}</p>
                  </li>
                ))}
              </div>
            ) : (
              <div>
                <p>No Tasks Added Yet</p>
              </div>
            )}
          </ul>
        </li>
      </div>
    )
  }
}

export default SinglePage
