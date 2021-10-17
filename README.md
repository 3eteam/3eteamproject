

# 3E

# 프로젝트명

## 👜👢🧢3E('NOCAP') - 쇼핑몰 커뮤니티
## 프로젝트 시작일 :2021-09-29

## 👜👢🧢[**서비스로 이동**](http://54.180.155.42:6002/)



p.s. 현재 서버를 닫은 관계로 실행이 되지 않습니다

--  
<img width="700" alt="스크린샷 2021-10-15 오후 3 51 02" src="https://user-images.githubusercontent.com/89692626/137611758-973688ea-0418-4b07-a945-e0b17c3d6fb0.png">

--  

Member. 



이동녘:[깃허브](https://github.com/dongnycklee)  
한경현:[깃허브](https://github.com/kyunghyunHan)  
이성재:[깃허브](https://github.com/seongjae-Leee)


--  
  
  

# 목차
[1.개요](#개요)

[2.목적](#목적)

- 기존 서비스와의 차별점

[3.전체 소스 코드](#전체-소스-코드-click)

[4.사용한 기술](#사용한-기술)

[5.주요 기능](#주요-기능)

[6.발생한 이슈 & 해결 방법](#발생한-이슈--해결-방법)

[7.상세 설명](#상세-설명)

 - DB 구조 (ERD)

 - 전체 흐름도
 
 - 프로젝트 설명 PPT

[8.시연 영상](#시연-영상)

[9.참여인원](#참여-인원-3명)

***

### 개요

패션 커뮤니티 활성화를 위한 쇼핑몰 구성

### 목적

>  패션 커뮤니티 활성화를 위한 쇼핑몰 구성
> 
> 1. 커뮤니티 활성화
> 2. 프로젝트 경험
> 3. 결제서비스 구현 숙달
> 

- **기존 서비스와의 차별점**

   - 소켓 I.O 를 활용한 실시간 채팅
   - 커뮤니티 서비스 제공
   - 자체 할인율 적용 결제서비스 연동(솔루션)
   

### 전체 소스 코드 -- 깃허브 전체코드

# 코드




### 사용한 기술

- 웹 화면 구성 : `HTML5` `CSS3` `bootstrap` `JavaScript``Scss``Nunjucks`
- 검색 결과 데이터 요청 및 출력 : `jQuery` `Ajax` `JSON``axios`
- DB 액션 처리 : `Sequelize`
- DBMS : `MySQL`
- 개발 Tool :`PostMan``Visual Studio Code` `Atom`
- AWS 배포 : `EC2` `RDS`
- 로그인 Api : `KakaoTalk API`
- 채팅 Api : `Gitpull`
- 프레임워크 : `NodeJs`
- 결제: `Bootpay`
- 프로젝트 관리 Tool : `Google Drive` `GitHub`
- 사용 모듈(v) : ` "axios": "^0.22.0",
                "bcrypt": "^5.0.1",
                "bootpay-js": "^3.3.3",
                "cookie-parser": "^1.4.5",
                "dotenv": "^10.0.0",
                "express": "^4.17.1",
                "express-session": "^1.17.2",
                "moment": "^2.29.1",
                "morgan": "^1.10.0",
                "multer": "^1.4.3",
                "mysql": "^2.18.1",
                "mysql2": "^2.3.0",
                "nodemon": "^2.0.13",
                "nunjucks": "^3.2.3",
                "passport": "^0.5.0",
                "passport-kakao": "^1.0.1",
                "passport-local": "^1.0.0",
                "sequelize": "^6.6.5",
                "sequelize-cli": "^6.2.0",
                "socket.io": "^4.2.0"`
### 주요 기능

- 로그인 : 일반 로그인, 카카오 로그인 `Sequelize``passport``mysql`
- 회원가입 : `Sequelize` `passport``mysql`
- 회원정보변경 :`Sequelize``mysql`
- 장바구니 : `Sequelize``mysql`
- 결제 : `Sequelize` `passport``Bootpay`
- 마이페이지 : `Sequelize``mysql`
- 게시판 :`Sequelize``mysql`
- 1:1 채팅 : 관리자 대화 `gitpull(api)`
- 실시간채팅:`socket.io``rg.rok`
- 검색 :`Sequelize``mysql`
- 관리자모드(상품등록 및 삭제) : `Sequelize``mysql`




# 발생한 이슈 & 해결 방법

### "Nodejs 처리에서의 문제점 파악 ,db및 구조설계 "

- Nunjucks 템플릿 엔진 사용에 미숙으로 인한 에러발생

[상황] nunjucks 동적인 처리 미숙으로 인해 템플릿 에러발생

[문제] nunjucks 동적인 처리 미숙으로 인해 템플릿 에러발생

[해결] public파일 생성후 에러 해결

- nunjucks for문 구현 시 화면에 구현 장애

[상황] 장바구니 구현시 nunjucks 활용

[문제] for문 과 mysql 관계 설정 미숙으로 인해 화면에 렌더링이 안댐

[해결] nunjucks 와 관게쿼리 해결 완료 로 인해 문제해결

- 라우트 get,post,CRUD 메서드 연결 구현 이해부족

[상황] 게시물,장바구니,상품등록,회원가입 구현에 있어서 에러발생

[문제] 게시물,장바구니,상품등록등 등 관계쿼리 사용부분에 있어서 CRUD에 대한 이해부족으로 인해 장애발생

[해결] 추가적인 학습과 관계쿼리 추가로 이해하면서 보안하여 장애 해결

- Git 브랜치 활용 미숙

[상황] 코드 병합

[문제] 각자 코드 작성 한것에 대한 코드 병합시 에러발생 (코드 병합시 코드 삭제댐)

[해결] 분업화 및 소통활성화 후에 코드 병합시 순차적으로 병합 



### "NodeJs를 통해 실시간 통신을 구현"

- 실시간 채팅 구현

[상황] 사용자들끼리 실시간 쇼핑관련 소통을하기위한 채팅

[문제] socket.io서버 를 코드에 추가할 떄 오류 발생

[해결] 서버의 순서도를 재배치 함으로써 문제 해결

- socket.id와 idx

[상황] 특정 사용자에게 메세지를 보내려면 해당 사용자의 socket.id를 알아야 함

[문제] socket.id는 브라우저를 킬 때마다 새롭게 생성됨, 고유한 key가 되지 못함

[해결] 해당 회원을 식별할 수 있는 idx 값을 활용:  idx값을 속성이름으로 추가, 그 속성의 값은 소켓의 ID값으로 할당함

- connected

[상황] 'ooo님이 채팅방에 입장/퇴장 하셨습니다' 기능을 추가해야함

[문제] 시간 부족으로 인해 미완성

[해결]  나중에 보안 할 예정

**NodeJs socket.io 깨달은 점 >**

실시간 사용자들끼리의  채팅이기에 socket.id를 사용하는 1:1 채팅을 구현했음. socket.io 특성 상 사용자 지정에 대한 이해도 숙지 
# 상세 설명




### DB구조 (ERD)
![KakaoTalk_Photo_2021-10-17-15-22-45](https://user-images.githubusercontent.com/88940298/137614327-8508ccda-6572-4a70-af91-d1f9063c4a60.jpeg)


### 프로젝트 기획안 PPT
[구글 프레젠테이션 파일](https://docs.google.com/presentation/d/1OXVmXrEVzpxmP-WIhmVdoelkYk0yFbY2/edit?usp=sharing&ouid=116791032032435384891&rtpof=true&sd=true)

# 시연 영상
[유튜브](https://www.youtube.com/watch?v=OLT4m52D7nY)



