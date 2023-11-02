import styled from "styled-components";
import NavBar from "../components/NavBar";
import boardimg from "../assets/BoardImg.png"
import heartline from "../assets/Heart.png"
import share from "../assets/Share.png"
import userimg from "../assets/UserImg.png"
import github from "../assets/GitHub.png"
import mail from "../assets/Mail.png"

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: #121212;    
    overflow-x: hidden;
`;

const Body = styled.div`
    /* background: #121212; */
    /* width: 100%; */
    height: 100vh;
    margin: 10% 20%;
    display: flex;
    flex-direction: column;  
    /* overflow-x: hidden; */
`;

const Header = styled.div`
    margin: 20px 10px;
    justify-content: left;
`;

const Title = styled.div`
    color: #ECECEC;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20px;
`;

const BoardInfo = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    vertical-align: middle;
`;

const User = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    /* line-height: normal; */
    margin-right: 20px;
`;

const DateTime = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    /* line-height: normal; */
`;

const KeyWord = styled.a`
    
    border-radius: 20px;
    background: #414141;
    padding: 0.4rem 1rem;
    margin-right: 20px;

    color: #96F2D7;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const KeyWordBox = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    margin-top: 10px;
`;

const Main = styled.div`
    margin-top: 10%;
    box-sizing: inherit;
    display: block;
    align-items: center;
`;

const Sentence = styled.p`
    box-sizing: inherit;
    margin: 5px 10px;
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.6px;
`;

const BoardImage = styled.img`

    margin: auto;
    display: block;
    margin-bottom: 10%;
    width: 546px;
    height: 327px;

`;

const Box = styled.div`
    box-sizing: inherit;
    display: block;
    position: relative;
    /* margin-top: 1rem; */

`
const SideBox = styled.div`
    position: absolute;
    left: -7rem;
    box-sizing: inherit;
`
const AbsoluteBox = styled.div`
    position: absolute;
    left: 100%;
    box-sizing: inherit;
`
const SideBoxRight = styled.div`
    box-sizing: inherit;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 240px;
    margin-left: 5rem;
    border-left: 2px solid #2a2a2a;
    padding: 0.25rem 0.75rem;
    color: #acacac;
`;

const Summary = styled.p`
    display: block;
    margin-bottom: 8px;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const SideBoxLeft = styled.div`
    position: fixed;
    width: 4rem;
    background: #1e1e1e;
    border: 1px solid #2a2a2a;
    border-radius: 2rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CircleBox = styled.div`
    box-sizing: inherit;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e1e1e;
    border: 1px solid #4d4d4d;
    border-radius: 1.5rem;
    /* color: #acacac; */
    cursor: pointer;
    z-index: 5;
`;

const LikeNum = styled.div`
    margin-top: 0.5rem;
    color: #d9d9d9;
    line-height: 1;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    font-weight: bold;
`

const Like = styled.img`
    width: 24px;
    height: 24px;
`

const Share = styled.img`
    width: 24px;
    height: 24px;
`
const Bottom = styled.div`
    box-sizing: inherit;
    margin-top: 30%;
    margin-bottom: 2rem;
    /* margin-left: auto;
    margin-right: auto; */
    display: block;
`;

const ProfileBox = styled.div`
    box-sizing: inherit;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;
const Profile = styled.div`
    display: flex;
    align-items: center;
`;

const UserBox = styled.div`
    box-sizing: inherit;
    height: 6rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 1.5rem;
    margin: 10px;
`;
const UserImg = styled.img`
    width: 135px;
    height: 135px;
`;
const UserText = styled.div`
    display: felx;
    flex-direction: column;
    margin-left: 2rem;
`;
const UserName = styled.p`
    margin-bottom: 10px;
    color: #ECECEC;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
`;
const UserIntro = styled.p`
    color: #ECECEC;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
`;
const HorizonLine = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    background: #252525;
`;
const UserLink = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;
const GitHub = styled.img`
    margin: 0px 15px;
    margin-left: 0px;
    width: 35px;
    height: 35px;
    fill: #C0C0C0;
`
const Mail = styled.img`
    margin: auto 10px;
    margin-top: 5px;
    margin-left: 0px;
    width: 38px;
    height: 32px;
`;

const CommentArea = styled.div`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
`;
const InputBox = styled.div`
    display: block;
`;
const CommentCnt = styled.p`
    color: #ececec;
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
`;
const Input = styled.textarea`
    margin: 1.5rem 0px;
    height: 70px;
    width: 100%;
    padding: 1rem 1rem 1.5rem;
    outline: none;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    font-size: 1rem;
    color: #ececec;
    background: #1e1e1e;
    line-height: 1.75;
    min-height: 6rem;
`;
const BtnWrapper = styled.div`
    display: flex;
    justify-content: end;
`;
const InputBtn = styled.button`
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: #96f2d7;
    height: 2.5rem;
    padding: 0 1.5rem;

    color: #121212;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
`;

const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
    border-bottom: 1px solid #2a2a2a;
`;

const CommentUserBox = styled.div`
    display: flex;
    align-items: center;
`;
const CommentImg = styled.img`
    width: 57px;
    height: 57px;
`;
const CommentInfo = styled.div`
    display: felx;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
`;
const CommentUser = styled.p`
    margin-bottom: 4px;
    color: #ECECEC;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
`;
const CommentTime = styled.p`
    color: #b8b8b8;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`;

const Comment = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0;
`;
const CommentLine = styled.p`
    color: #ECECEC;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.5rem;
`;

export default function BoardPage(){
    return(
        <Background>
            <NavBar/>
            
            
            <Body>
                <Header>
                    <Title>Promise 실전에서 사용해보기</Title>
                    <BoardInfo>
                        <User>sososo</User>
                        <DateTime>2023년 10월 12일</DateTime>
                    </BoardInfo>
                    <KeyWordBox>
                        <KeyWord>Javascript</KeyWord>
                        <KeyWord>Javascript</KeyWord>
                        <KeyWord>Javascript</KeyWord>
                    </KeyWordBox>
                    <Box>
                        <SideBox>
                            <SideBoxLeft>
                                <CircleBox>
                                    <Like src={heartline}/>
                                </CircleBox>
                                <LikeNum>7</LikeNum>
                                <CircleBox>
                                    <Share src={share}/>
                                </CircleBox>
                            </SideBoxLeft>
                        </SideBox>

                    </Box>
                    <Box>
                        <AbsoluteBox>
                            <SideBoxRight>
                                <Summary>사이드 프로젝트란 무엇일까?</Summary>
                                <Summary>promise를 생성하는 방법</Summary>
                                <Summary>promise를 생성하는 방법</Summary>
                                <Summary>promise를 생성하는 방법</Summary>
                            </SideBoxRight>
                        </AbsoluteBox>
                    </Box>
                </Header>
                
                <Main>
                    <BoardImage src={boardimg}/>
                    <Sentence>
                    비동기 작업이란 특정 코드의 로직이 끝날 때까지 기다리지 않고, 나머지 코드를 먼저 실행하는 것이에요. 웹사이트 개발에는 비동기 작업을 자주 사용해요. 서버에서 데이터를 불러올 때 오래 걸릴 수도 있는데, 그동안 다른 코드를 실행하지 않고 가만히 기다리면 웹 사이트를 로딩하는 게 굉장히 오래 걸리기 때문이죠.
                    </Sentence>
                </Main>

                <Bottom>
                    <ProfileBox>
                        <Profile>
                            <UserBox>
                                <UserImg src={userimg}></UserImg>  
                            </UserBox>
                            <UserText>
                                <UserName>송유림</UserName>
                                <UserIntro>안녕하세요.</UserIntro>
                            </UserText>
                        </Profile>
                        <HorizonLine/>
                        <UserLink>
                            <GitHub src={github}/>
                            <Mail src={mail}/>
                        </UserLink>
                    </ProfileBox> 
                </Bottom>

                <CommentArea>
                    <InputBox>
                        <CommentCnt>1개의 댓글</CommentCnt>
                        <Input placeholder="댓글을 작성하세요"/>
                        <BtnWrapper>
                            <InputBtn>댓글 작성</InputBtn>
                        </BtnWrapper>
                    </InputBox>

                    <CommentBox>
                        <CommentUserBox>
                            <CommentImg src={userimg}/>
                            <CommentInfo>
                                <CommentUser>송유림</CommentUser>
                                <CommentTime>1일 전</CommentTime>
                            </CommentInfo>
                        </CommentUserBox>
                        <Comment>
                            <CommentLine>잘 봤습니다.</CommentLine>
                            <CommentLine>잘 봤습니다.</CommentLine>
                        </Comment>
                        
                    </CommentBox>
                </CommentArea>




                
            </Body>

        </Background>
        

    );
}