import styled from "styled-components";

export const CardSC = styled.div`
  max-width: 370px;
  background: #e4e3e3;
  overflow: hidden;
  border-radius: 10px;
  transition: .4s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`
export const CardIblock = styled.div`
  height: 250px;
  margin-bottom: 15px;
  overflow: hidden;
`
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .3s ease-in-out;
  &:hover{
    transform: scale(1.1);
  }
`
export const CardText = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
`
export const CardTitle = styled.h1`
  font-size: 34px;
  color: #000;
  margin: 0;
  margin-bottom: 15px;
`
export const CardDesc = styled.p`
  font-size: 16px;
  color: #000;
  margin-bottom: 25px;
`
export const CardButton = styled.button`
  font-size: 20px;
  color: #fff;
  padding: 12px 40px;
  border: none;
  background: #1abc9c;
  border: 1px solid #1abc9c;
  border-radius: 10px;
  cursor: pointer;
  transition: .3s ease-in-out;
  &:hover{
    background: transparent;
    color: #1abc9c;
  }
`


