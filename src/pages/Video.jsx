import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import styled from 'styled-components';
import Comments from '../Components/Comments';
import Card from '../Components/Card';

const Container = styled.div`
    display: flex;
    gap: 24px;
`

const Content = styled.div`
    flex: 5;
`


const VideoWrapper = styled.div`
    
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Info = styled.div`
    color: ${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`
const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid ${({ theme }) => theme.soft};
`

const Recommendation = styled.div`
    flex: 2;
`

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
    font-weight: 500;
`
const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`
const Description = styled.p`
    font-size: 14px;
`

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`


const Video = () => {
  return (
    <Container>
        <Content>
            <VideoWrapper>

            </VideoWrapper>
        <Title>Test video</Title>
        <Details>
            <Info>1.8M views - 2 years ago</Info>
            <Buttons>
                <Button><ThumbUpOutlinedIcon /> 123</Button>
                <Button><ThumbDownOutlinedIcon /> Dislike</Button>
                <Button><ReplyAllOutlinedIcon /> Share</Button>
                <Button><AddTaskOutlinedIcon /> Save</Button>
            </Buttons>
        </Details>
        <Hr />
        <Channel>
            <ChannelInfo>
                <Image src='' />
                <ChannelDetail>
                    <ChannelName>Web Dev</ChannelName>
                    <ChannelCounter>200k subscribers</ChannelCounter>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor dolorem inventore, fugiat voluptatem cupiditate saepe non ipsam, nihil at eaque officiis est. Dolores nisi itaque molestias, ut cupiditate asperiores.
                    </Description>
                </ChannelDetail>
            </ChannelInfo>
            <Subscribe>Subscribe</Subscribe> 
        </Channel>
        <Hr />
        <Comments />
        </Content>
        <Recommendation>
            <Card type = "sm"/>
        </Recommendation>
    </Container>
  )
}

export default Video