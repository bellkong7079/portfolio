const logotext = "YJB";
const meta = {
    title: "윤종빈 포트폴리오",
    description: "풀스택 개발자 윤종빈의 포트폴리오입니다.",
};

const introdata = {
    title: "안녕하세요, 저는 윤종빈입니다",
    animated: {
        first: "Full-Stack Developer",
        second: "React & Node.js Developer",
        third: "Java & Spring Developer",
    },
    description: "단순히 작동하는 코드를 넘어, 왜 이렇게 설계했는가를 설명할 수 있는 개발자를 목표로 합니다.",
    your_img_url: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa",
};

const dataabout = {
    title: "저에 대해",
    aboutme: "유통·설비 분야에서 사회생활을 시작했지만, 개발의 가능성을 발견하고 과감히 전환했습니다. React, Node.js 기반 풀스택 개발과 Java/Spring Boot 백엔드 개발을 학습하며, 3개의 프로젝트를 완성했습니다. 장안대학교 창업대회 1등 수상 경험처럼, 아이디어를 실행으로 옮기는 것을 즐깁니다. DB 설계부터 REST API, 실시간 채팅, ETL 자동화까지 풀스택 흐름 전반을 이해하고 있습니다.",
};

const worktimeline = [
    {
        jobtitle: "풀스택 & 자동화 과정 수료",
        where: "㈜글로벌아카데미",
        date: "2025.11 - 2026.04",
    },
    {
        jobtitle: "FT 설치제어 유지보수",
        where: "영전엔지니어링",
        date: "2023.03 - 2025.01",
    },
    {
        jobtitle: "자재관리 및 생산",
        where: "㈜힘펠",
        date: "2019.07 - 2021.07",
    },
    {
        jobtitle: "창업대회 1등 수상",
        where: "장안대학교",
        date: "2022.11",
    },
];

const skills = {
    language: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
    framework: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
    devtools: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Vite", logo: "https://vitejs.dev/logo.svg" },
        { name: "DBeaver", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Eclipse", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
    ],
    database: [
        { name: "MariaDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
    etc: [
        { name: "Brity RPA", logo: require("./assets/images/brity-rpa.png") },
    ],
};

const services = [
    {
        title: "Frontend Development",
        description: "React 19 기반 SPA 개발. Context API 전역 상태 관리, Socket.IO 실시간 채팅, Chart.js 데이터 시각화, 반응형 UI 구현.",
    },
    {
        title: "Backend Development",
        description: "Node.js + Express 5 REST API 설계. Spring Boot 기반 ERP 시스템 단독 개발 경험. JWT 인증, 트랜잭션 설계, 역할 기반 접근제어 구현.",
    },
    {
        title: "Data & Automation",
        description: "E2E 자동화 아키텍처 설계 (팀장). Python + BrityRPA 연계 구조 설계, ETL→데이터마트→Excel 리포트 전체 파이프라인 구축. RPA로 Python 스크립트 실행·결과 수집 자동화, Excel 보고서·그래프·레이아웃 자동 구성. 재무 데이터 정합성 검증 및 프로젝트 기술 의사결정 리딩.",
    },
];

const dataportfolio = [
    {
        img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400",
        description: "AuRa — 향수 이커머스 쇼핑몰 (4인 팀 · 3주 | React 19, Vite, Express.js, MariaDB | DB설계, JWT인증, 장바구니, 카테고리)",
        link: "https://github.com/bellkong7079/First-project.git",
    },
    {
        img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400",
        description: "KISETSU — 도매 패션 이커머스 (1인 솔로 · 2주 | React 18, Vite, Express.js, MariaDB, Socket.io, Chart.js, JWT | 고객·관리자 기능 16개 단독 완성)",
        link: "https://github.com/bellkong7079/solo-project.git",
    },
    {
        img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400",
        description: "재무제표 자동화 — Python & Brity RPA (팀장 · 11일 | Python, Openpyxl, Brity RPA, SMTP | E2E 아키텍처 설계, Python↔RPA 연동 구조 설계, 대시보드 시각화 및 데이터 정합성 검증, Excel 보고서 메일 자동 발송)",
        link: "https://github.com/bellkong7079",
    },
];

const contactConfig = {
    YOUR_EMAIL: "jongbin344@gmail.com",
    YOUR_FONE: "010-5742-7079",
    description: "새로운 기회나 협업에 열려 있습니다. 언제든지 연락해 주세요!",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/bellkong7079",
    instagram: "https://www.instagram.com/jongbin_97/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
