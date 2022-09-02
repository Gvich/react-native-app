import styled from 'styled-components/native'

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  background-color: aliceblue;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  border-bottom-style: solid;
`

const PostImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  margin-right: 15px;
`

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`

const PostDetails = styled.View`
    justify-content: center;
    flex: 1;
`


export const Post = ({title, imageUrl, author}) => {
    return (
        <PostView>
            <PostImage source={{ uri: imageUrl}}/>

            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{author}</PostDate>
            </PostDetails>
        </PostView>
    )
}
