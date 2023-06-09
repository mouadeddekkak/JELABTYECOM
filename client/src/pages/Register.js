import React from 'react'
import styled from 'styled-components'
import mobile from '../responsive';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { inscrire } from '../redux/FontionAPI';



const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const Wrapper = styled.div`
  width: 40%;
  padding: 30px;
  background-color: white;
  ${mobile({ width: "75%"})}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-color: ${(props) => props.border === "" ? "none" : "red"};
  color: ${(props) => props.border === "" ? "none" : "red"};
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;  

  &:hover{
    background-color: #D0D0D0;
    }
`

export default function Register() {
  // State variables

  const [inputs, setInputs] = useState();
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();

  // Handle input change

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
    // Handle register button click


  const handleClick = (e) => {
    e.preventDefault();
    if(validate()){
      inscrire(dispatch, inputs);
    }
  };

    // Form validation

  const validate = () => {
    let input = inputs;
    let errors = {};
    let isValid = true;
    // Check for empty name field

    if (!input["name"]) {
      isValid = false;
      errors["name"] = true;
    }
    // Check for empty email field

    if (!input["email"]) {
      isValid = false;
      errors["email"] = true;
    }
    // Check email format

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = true;
      }
    }
    // Check for empty password field

    if (!input["password"]) {
      isValid = false;
      errors["password"] = true;
    }
    // Check for empty lastname field

    if (!input["lastname"]) {
      isValid = false;
      errors["lastname"] = true;
    }
    // Check for empty username field

    if (!input["username"]) {
      isValid = false;
      errors["username"] = true;
    }
    // Check for empty confirm_password field

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = true;
    }
    // Check if password and confirm_password match

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
      if (input["password"] !== input["confirm_password"]) {
        isValid = false;
        errors["password"] = true;
        errors["confirm_password"] = true;
      }
    } 

    setErrors(errors);

    return isValid;
}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" name="name" border={errors?.name ? "ok" : "" } onChange={handleChange}/>          {/* Name input */}
          <Input placeholder="lastname" name="lastname" border={errors?.lastname ? "ok" : "" } onChange={handleChange}/>{/* Lastname input */}
          <Input placeholder="username" name="username" border={errors?.username ? "ok" : "" } onChange={handleChange}/>{/* Username input */}
          <Input placeholder="email" name="email" border={errors?.email ? "ok" : "" } onChange={handleChange}/>{/* Email input */}
          <Input placeholder="password" name="password" type="password" border={errors?.password ? "ok" : ""  } onChange={handleChange}/>{/* Password input */}
          <Input placeholder="confirm password" name="confirm_password" type="password" border={errors?.confirm_password ? "ok" : "" } onChange={handleChange} />{/* Confirm Password input */}
          {/* Agreement text */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {/* Register button */}
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}
