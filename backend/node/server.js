const path = require("path");
const express = require('express')
const cors = require('cors');

const app = express();
const PORT = 5000;

// express.static : Express의 미들웨어 함수로, 정적 파일을 서버에서 클라이언트로 제공할 수 있게 해줌
// __dirname: 현재 파일 경로
// -> 서버에서 React 애플리케이션의 정적 빌드 파일들을 클라이언트의 브라우저에 띄울 수 있도록 제공하는 역할
// app.use(express.static(path.join(__dirname, "../../my-app/dist")));

// CORS 미들웨어를 추가하여 모든 도메인에서의 요청을 허용하는 역할
// app.use(cors()); 

// 특정 도메인만 허용하도록 설정할 수도 있다.
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get("/api/test", (req, res) => {
    res.send("hello Javascript")
});

app.get("/bpi/test", (req, res) => {
    res.send("hello Javascript")
});


// app.listen(post, callback): 5000번 포트로 서버가 실행됨, callback: 서버가 정상적으로 실행되었을 때 호출되는 콜백 함수
// 즉, 5000번 포트로 서버를 실행시키겠다
app.listen(PORT, () => {
    console.log("5000번 포트로 서버가 열렸습니다!")
})