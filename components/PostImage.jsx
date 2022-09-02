import styled from 'styled-components/native'


const Image = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 350px;
`

export const PostImage = ({imageUrl}) => {
    return (
        <Image source={{ uri: imageUrl}}/>
    )
}
