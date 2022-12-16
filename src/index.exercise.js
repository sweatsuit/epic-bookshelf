// 🐨 you'll need to import react and createRoot from react-dom up here
import * as React from 'react'
import {createRoot} from 'react-dom/client'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'
// 🐨 you'll also need to import the Logo component from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(e) {
    e.preventDefault()
    const {username, password} = e.target.elements
    onSubmit({
      username: username.value,
      password: password.value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          <input id="username" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <input id="password" type="password" />
        </label>
      </div>

      <button>{buttonText}</button>
    </form>
  )
}
function App() {
  const [openDialog, setOpenDialog] = React.useState('none')

  const handleDismiss = () => setOpenDialog('none')
  const handleSubmit = formData => console.log('login', formData)
  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenDialog('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenDialog('register')}>Register</button>
      </div>
      <Dialog
        isOpen={openDialog === 'login'}
        onDismiss={handleDismiss}
        aria-label="login"
      >
        <button onClick={() => setOpenDialog('none')}>Close</button>
        <h3>Login</h3>
        <LoginForm onSubmit={handleSubmit} buttonText="Login" />
      </Dialog>
      <Dialog
        isOpen={openDialog === 'register'}
        onDismiss={handleDismiss}
        aria-label="register"
      >
        <button onClick={() => setOpenDialog('none')}>Close</button>
        <h3>Register</h3>
        <LoginForm onSubmit={handleSubmit} buttonText="Register" />
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
export {root}
