# javascript-p4-bmtown

웹풀스택 프로젝트#4 - 부캠타운

# 배포 URL

[J25A-Special-bmtown](https://bmtown-j25a.tk)

- →←↑↓ : **이동**
- Shift : **달리기**


# BE

## api description

    - GET /user
        - 로그인시 이용
        - params: {userId}

    - POST /user
        - 회원가입시 이용
        - body: {userId, nickname, accessToken}

    - POST /auth
        - github에서 받아온 code를 통해 accessToken 발금

# FE

## Router

    - mainPage : Home.js
        - 로그인, 회원가입 진행 화면

    - townPage : Town.js
        - 맵, 채팅, 화상공유 화면
       
