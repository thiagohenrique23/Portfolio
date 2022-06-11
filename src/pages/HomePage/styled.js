import styled from "styled-components"
import back from "../../assets/back.webp"


////////////////////////////////////////////////////////////////////////////////////////////////


export const TitleCard = styled.h1`
  font-family: "Times New Roman", Times, serif;
  color: #FFFFFF;
  text-align: justify;
`

export const SubTitleCard = styled.h2`
  font-family: "Times New Roman", Times, serif;
  color: #FFFFFF;
  text-align: justify;
`

export const SubSubTitleCard = styled.h3`
  font-family: "Times New Roman", Times, serif;
  color: #FFFFFF;
  text-align: justify;
`

////////////////////////////////////////////////////////////////////////////////////////////////

export const Card1 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-image: url(${back});
  height: 500px;
`

export const Buttons = styled.p`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: nowrap;
  padding: 0px 200px 0px 10px;
`

export const ButtonImg = styled.img`
  width: 30px;
  height: 30px;
`

////////////////////////////////////////////////////////////////////////////////////////////////

export const Card2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #063447;
  height: 500px;
`

export const ImgProfile = styled.img`
  width: 200px;
  height: 250px;
  margin: 10px;
  padding: 10px;
  border-radius: 100%;
` 

export const Profile = styled.div`
  display: flex;
`

////////////////////////////////////////////////////////////////////////////////////////////////

export const Card3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #4eaccf;
  height: 500px;
`

export const Knowledge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Info = styled.div`
  display: flex;
  margin: 50px;
  flex-direction: column;
`

////////////////////////////////////////////////////////////////////////////////////////////////

export const Card4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #292929;
  height: 500px;
`

////////////////////////////////////////////////////////////////////////////////////////////////

export const Card5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #063447;
`
