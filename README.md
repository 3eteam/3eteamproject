

# 프로젝트팀명:3E  


## 👜👢🧢3E('NOCAP') - 쇼핑몰 커뮤니티
## 프로젝트 시작일 :2021-09-29

## 👜👢🧢[**서비스로 이동**](http://54.180.155.42:6002/)



p.s. 현재 서버를 닫은 관계로 실행이 되지 않습니다

--  
<img width="700" alt="스크린샷 2021-10-15 오후 3 51 02" src="https://user-images.githubusercontent.com/89692626/137611758-973688ea-0418-4b07-a945-e0b17c3d6fb0.png">

---   

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
   

### 전체 소스 코드 [소스](https://github.com/3eteam/3eteamproject)


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



### "NodeJs ,Socket.IO 를 통해 실시간 통신을 구현"

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

**NodeJs socket.io 깨달은 점 **

실시간 사용자들끼리의  채팅이기에 socket.id를 사용하는 1:1 채팅을 구현했음. socket.io 특성 상 사용자 지정에 대한 이해도 숙지 
# 상세 설명
전체 코드 : [코드](https://github.com/3eteam/3eteamproject)

    - 폴더 설명
    views : html(Nunjucks)
    video : video files(front 영상)
    vendor : cdn파일(scss, jQuery 모음)
    uploads : img파일(게시글 등록, 상품 등록 시 자동생성되어 이미지를url로 mySQL DB에 저장)
    routes : 페이지별 라우트 생성(CRUD, sequelize)
    public : front 동적(css, js, img)
    profileimg : img파일(회원가입 시 자동생성되어 이미지를url로 mySQL DB에 저장)
    passport : 로그인 관리
    node_modeules
    models : DB 테이블 생성(sequelize, 관계도 형성)
    imgages/icons : favicon파일
    fonts : 다운받은 폰트 모음
    config : AWS RDS 연동
    
    

서버(app.js) : [코드](https://github.com/3eteam/3eteamproject/blob/f2a2e1500f375490e0b2090779ab612237ae2039/3e/app.js)
-> 각 페이지별 라우터 설정, passport 6002번, express 모듈로 넌적스를 http로 연결

###페이지별 설명(views-html)   
##main :   
<img width="500" alt="KakaoTalk_20211017_155220801" src="https://user-images.githubusercontent.com/89692626/137615265-9ad9ddb3-b1d6-4db4-bdb6-f2149972f03c.png">
<img width="500" alt="KakaoTalk_20211017_155218347" src="https://user-images.githubusercontent.com/89692626/137615273-95e3f65a-1164-441f-ac89-3f3542a194f2.png">   
<img width="500" alt="KakaoTalk_20211017_155218347" src="https://user-images.githubusercontent.com/89692626/137615345-4e4a92e5-1c7b-4268-b977-5571b5c23497.png">
<img width="500" alt="KakaoTalk_20211017_155218347" src="https://user-images.githubusercontent.com/89692626/137615352-e36c765b-5200-4258-8306-83da5bf6c4c5.png">   
<img width="172" alt="KakaoTalk_20211017_155727405" src="https://user-images.githubusercontent.com/89692626/137615422-0ed93abb-4870-485c-9070-72e82848ea4d.png">   
<img width="361" alt="3" src="https://user-images.githubusercontent.com/89692626/137615827-c3b77f28-3216-4a4b-9163-93e9c337a1a6.png">    
<img width="500" alt="" src="https://user-images.githubusercontent.com/89692626/137615821-08abdf2e-32d1-421a-b38e-1b0539e8535d.png">     
   
##join :    
<img width="1133" alt="KakaoTalk_20211017_155846026" src="https://user-images.githubusercontent.com/89692626/137615487-14824b09-a5c0-4588-aeb9-65cf9e11a997.png">   
<img width="500" alt="KakaoTalk_20211017_160205029" src="https://user-images.githubusercontent.com/89692626/137615680-b3adccde-f3f7-4179-bb99-24159d6414b0.png">    
<img width="500" alt="KakaoTalk_20211017_160215296" src="https://user-images.githubusercontent.com/89692626/137615638-d9c36e30-2816-46b4-b8e1-084fc5a800f6.png">   
<img width="500" alt="KakaoTalk_20211017_160202804" src="https://user-images.githubusercontent.com/89692626/137615615-6990152d-b8ae-4fe8-b5f2-2176442aa8e1.png">    

    
##login :  
<img width="500" alt="KakaoTalk_20211017_160529161" src="https://user-images.githubusercontent.com/89692626/137615748-7cd43437-9eaf-4d75-9412-ac5f205757fe.png">   
<img width="393" alt="1" src="https://user-images.githubusercontent.com/89692626/137615766-aa64fd48-cf60-4750-91ab-ad5a16be19e9.png">   
<img width="602" alt="2" src="https://user-images.githubusercontent.com/89692626/137615784-ec660a00-550b-460c-8a6c-e60582821ad0.png">  
  
##catlist(관리자 모드) :    
<img width="500" alt="11" src="https://user-images.githubusercontent.com/89692626/137615880-456ebc39-d110-4f02-9205-49ff64616984.png">  
<img width="500" alt="22" src="https://user-images.githubusercontent.com/89692626/137615883-06bfd619-cab6-4ac8-9962-fed0ca6b7b5e.png">  
<img width="500" alt="4" src="https://user-images.githubusercontent.com/89692626/137615937-b948f740-7fa6-4984-854e-3ceecaeda524.png">   
<img width="500" alt="5" src="https://user-images.githubusercontent.com/89692626/137615991-ee481480-c48d-4688-b3ab-402393c8d307.png">  
<img width="500" alt="6" src="https://user-images.githubusercontent.com/89692626/137615998-5f48cb9a-28ea-4ce7-a7df-04bae5e03e36.png">  
<img width="500" alt="7" src="https://user-images.githubusercontent.com/89692626/137616060-072cef9a-be20-4cd1-9a7c-986eb67b0af3.png">  
<img width="500" alt="8" src="https://user-images.githubusercontent.com/89692626/137616064-b5da190d-3dc7-4094-983e-b37d0deb1b16.png">  
  
##nike :   
<img width="400" alt="9" src="https://user-images.githubusercontent.com/89692626/137616135-b6a95861-90cc-4617-8ee6-9fff2eaa6648.png">   
<img width="400" alt="10" src="https://user-images.githubusercontent.com/89692626/137616142-e4a68889-f17b-45a3-bd52-292862b73263.png">  
  
##alllist :   
<img width="400" alt="12" src="https://user-images.githubusercontent.com/89692626/137616175-df939fbd-b875-4f22-9397-02e1a6c74f71.png">  
<img width="400" alt="13" src="https://user-images.githubusercontent.com/89692626/137616199-51fcfcb7-9c24-41d2-9bbb-c7aa68749d06.png">  
<img width="400" alt="14" src="https://user-images.githubusercontent.com/89692626/137616235-8f035ea5-9872-436d-979f-72e7dbe269a0.png">  
  
  
##search :   
<img width="400" alt="15" src="https://user-images.githubusercontent.com/89692626/137616275-b2377a89-77a0-4d6a-bcf4-9c39fcc8980d.png">  
  
##cart :   
<img width="400" alt="16" src="https://user-images.githubusercontent.com/89692626/137616301-2a3ad31a-9388-41ca-8c30-43441c59d250.png">  
<img width="400" alt="23" src="https://user-images.githubusercontent.com/89692626/137616473-132a255d-463f-4262-8b9c-4590b29c0a63.png">  
<img width="400" alt="24" src="https://user-images.githubusercontent.com/89692626/137616469-5729844f-ff74-4501-8e6a-99b3eefc70a0.png">  
<img width="400" alt="25" src="https://user-images.githubusercontent.com/89692626/137616470-5e0e98b7-b71c-469f-97ca-057cbe332b87.png">  
<img width="400" alt="26" src="https://user-images.githubusercontent.com/89692626/137616471-affad1db-6fb4-4826-9051-7a5a6dce756d.png">  
<img width="400" alt="27" src="https://user-images.githubusercontent.com/89692626/137616472-50152136-9c18-4a2d-b19c-2ce2e6ba0c70.png">  
  
##profile :  
<img width="400" alt="28" src="https://user-images.githubusercontent.com/89692626/137616553-60e806f8-f496-4023-8186-431b4f2ed0cd.png">  
<img width="400" alt="29" src="https://user-images.githubusercontent.com/89692626/137616555-458eeff7-4a3b-4def-acdc-52df795f3bea.png">  
<img width="400" alt="30" src="https://user-images.githubusercontent.com/89692626/137616556-720fc3a8-46c8-45d8-99c0-f79b3b6c3c3a.png">  
<img width="400" alt="31" src="https://user-images.githubusercontent.com/89692626/137616581-65a3d05e-04f8-4fb0-abb6-8c27912ad5f4.png">  

##board :  


  












 







### DB구조 (ERD)
![KakaoTalk_Photo_2021-10-17-15-22-45](https://user-images.githubusercontent.com/88940298/137614327-8508ccda-6572-4a70-af91-d1f9063c4a60.jpeg)


### 프로젝트 기획안 PPT
[구글 프레젠테이션 파일](https://docs.google.com/presentation/d/1OXVmXrEVzpxmP-WIhmVdoelkYk0yFbY2/edit?usp=sharing&ouid=116791032032435384891&rtpof=true&sd=true)

# 시연 영상
[유튜브](https://www.youtube.com/watch?v=OLT4m52D7nY)



