import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function SignupPage() {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ nationality, setNationality ] = useState("en")

  const [ formSubmitted, setFormSubmitted ] = useState(false)

  const hanldeChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeNationality = (e) => {
    setNationality(e.target.value)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" onChange={hanldeChangeEmail} value={email} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" onChange={handleChangePassword} value={password} />
        </FormGroup>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input type="select" name="nationality" onChange={handleChangeNationality} value={nationality}>
            <option value='en'>en</option>
            <option value='de'>de</option>
            <option value='fr'>fr</option>
          </Input>
        </FormGroup>
        <Button color="primary" onClick={handleSignup}>Sign up</Button>
      </Form>
      {formSubmitted &&  (
        <div>
          <p>{nationality === 'en' ? 'Hello' : nationality === 'de' ? 'Hallo' : 'Bonjour'}</p>
          <p>Your email address is: {email}</p>
        </div>
      )}      
    </div>
  )
}
