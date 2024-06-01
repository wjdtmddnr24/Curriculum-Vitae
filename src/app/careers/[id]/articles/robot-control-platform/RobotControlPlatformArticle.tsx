import Article from "@components/article/Article";
import Badges from "@components/article/header/Badges";
import awsWebSocketAPIGatewayPricing from "@public/aws_websocket_api_gateway_pricing.png";
import infrastructureInitialization from "@public/infra_initialization.png";
import robotManagementArchitecure from "@public/robot_management_architecture.png";
import unitcompanyRobot from "@public/unitcompany_robot.png";

const { Header, Footer, Paragraph, Heading, Image } = Article;
const { Title, SubTitle } = Header;

function RobotControlPlatformArticle() {
  return (
    <Article>
      <Header>
        <Title>로봇 관제 플랫폼 설계 및 개발</Title>
        <SubTitle>프리랜서 근무</SubTitle>
        <Badges badges={["Kubernetes", "Istio", "Nest.js", "AWS Lambda", "WebSocket", "Redis", "Next.js"]} />
      </Header>

      <Heading>진행 배경</Heading>
      <Paragraph>
        23년 10월 초에 공군 전역을 하고, 전에 강사로 근무했던 학원의 원장님께 안부차 연락을 드렸는데 학원에서 새로운
        사업을 진행하고 있다는 소식을 들었다. 무슨 사업을 진행하고 있는지 물어보니 로봇 연구소와 협력하여 로봇을
        개발하고 있고, 이 로봇들을 학원에서 운영하는 내부 서비스와 연동을 하거나 타업체 혹은 공기관에서 로봇을 이용한
        서비스 개발을 의뢰하면 로봇과 소프트웨어를 개발해서 납품을 하는 사업을 준비하고 있다고 하셨다.
        <br />
        <br />
        하지만 아직 사업 초기 단계여서 로봇 하드웨어 개발 외에는 내부적인 기능이나 인프라, 서버개발 등을 할 인력을
        확보하지 못한 상황이었고, 개발자를 고용해서 진행할지, 외주업체에 의뢰할지 고민하고 있으셨다. 그래서 내게 사업의
        전반적인 기술적 자문과 작업 진행에 도움을 요청하셨고 이렇게 작업을 진행하게 되었었다.
        <br />
        <br />
        사업을 도와주기로 시작한 뒤 가장 먼저 진행한 일은 개발 업무 내에서의 관심사 분리였다. 로봇 하드웨어 개발은 로봇
        연구소에서 진행하기 때문에 학원측 사업에서는 하드웨어 이외의 모든 부분을 담당하는 것이었다. 즉, 로봇의
        서버연동이나 로봇을 이용한 서비스 개발 등의 영역은 우리가 진행해야 한다는 뜻이었다. 로봇의 서버연동이나 서비스
        개발을 하나로 묶어 개발을 진행하면, 두부분이 긴밀하게 엮여 앞으로 로봇을 이용한 새로운 서비스를 개발할 때마다
        매번 다시 로봇의 연동부터 개발을 시작해야하기 때문에 로봇의 관제와 로봇을 이용한 서비스, 두개의 관심사로
        분리하여 개발을 진행하기로 하였다. 이렇게 로봇 관제 플랫폼을 먼저 설계하고 구축을 하면, 이후에 로봇 관제 플랫폼
        위에 로봇을 이용한 서비스들을 개발할 수 있다.
        <br />
        <br />
        이렇게 로봇의 관제 플랫폼을 먼저 개발하게 되었고, 개발자를 고용하거나 외주업체를 찾기 전까지 로봇 관제 플랫폼의
        설계와 초기 개발을 맡아 진행하게 되었다.
      </Paragraph>
      <br />
      <Image size="large" src={unitcompanyRobot} alt="로봇 활용 예시" caption={"로봇을 학원 서비스와 연동한 모습"} />
      <br />
      <br />

      <Heading>요구사항 정리</Heading>
      <Paragraph>
        로봇 관제 플랫폼 개발을 맡게 되었지만 막상 시작하려고 하니 이 작업을 어디서 어디까지 진행해야 하고 어떤 기능들을
        개발해야할지 정리가 되지 않았다. 그래서 먼저 로봇 관제 플랫폼의 요구사항들을 원장님과 연구원분들과 논의를 하여
        정리를 했다.
        <br />
        <br />
        로봇 관제 플랫폼의 기능적인 요구사항은 다음과 같았다.
        <br />
        <br />
        <b>1. 로봇 개체 구성 설정</b>
        <br />
        로봇이 어느 조직, 어느 위치에 할당되는지 설정할 수 있어야 하며, 로봇에게 초기 위치나 지리 데이터(지도)를 주입할
        수 있어야 한다. 또한 로봇의 논리적인 개체 정보와 물리적인 로봇 개체의 매핑을 할 수 있어야 한다.
        <br />
        <br />
        <b>2. 로봇 모니터링</b>
        <br />
        로봇의 연결 상태, 현재 위치, 작업 상태 등을 실시간으로 모니터링 할 수 있어야 한다.
        <br />
        <br />
        <b>3. 작업 가능한 로봇의 탐색</b>
        <br />
        작업 대기중인 로봇(or 우선순위가 낮은 작업을 진행중인 로봇), 물리적으로 작업을 수행해야할 공간에 이동할 수 있는
        로봇을 탐색할 수 있어야 한다.
        <br />
        <br />
        <b>4. 로봇 이동 및 작업 명령</b>
        <br />
        안드로이드 OS로 동작하는 2D LiDAR 및 SLAM 기반 이동 로봇을 사용한다. 로봇에게 X, Y, Angle 지점으로 이동 및
        회전하라는 명령을 내릴 수 있어야 하며, 작업 가능한 로봇을 탐색하여 해당 로봇에게 작업을 할당할 수 있어야 한다.
        외부 서비스로부터 로봇 작업 요청이 들어오면, 작업 가능 로봇에게 작업을 할당하고 로봇에게 이동명령을 내린 뒤,
        작업을 수행하도록 해야한다.
        <br />
        <br />
        이러한 기능적인 요구사항 외에 로봇 관제 플랫폼을 설계 및 개발을 하면서 염두하며 진행해야하는 요구사항들이
        있었다. 한번에 수천/수만대의 로봇들을 관제할 수 있어야 한다는 점. 개발자가 확정되지 않아 추후 최종적으로 어느
        언어, 런타임 환경으로 관제 플랫폼과 서비스 개발을 진행하게 될지 모른다는 점 등이었다.
      </Paragraph>

      <Heading>클라우드 아키텍처 설계</Heading>
      <Paragraph>
        로봇 관제 플랫폼은 AWS의 다양한 서비스를 이용해 개발하기로 하였다. 대용량 트래픽 및 확장성을 고려하고, 추후에
        개발을 할 개발자분들이 개발언어 및 환경에 맞춰 다시 처음부터 서비스들을 개발하는 것이 아닌 점진적으로 변경할 수
        있도록 Microservice Architecture로 설계하기로 결정하였다. 여기에 쿠버네티스를 사용하기 위해 관리형 쿠버네티스인
        AWS EKS를 이용하였다.
        <br />
        <br />
        서비스 간의 세부적인 라우팅 설정과 외부 트래픽 요청의 JWT 검증, 트래픽 흐름 추적 등의 목적을 위해 Istio를 이용해
        Service Mesh를 도입하였다. AWS Network LoadBalancer를 이용해 외부 트래픽을 Istio Gateway로 전달 할 수 있도록
        설정하였다.
        <br />
        <br />
        사용자 관리는 AWS Cognito를 이용해 인증 및 권한 관리를 하기로 하였다. 사용자 관리 서비스를 내부에서 직접 개발할
        수도 있겠지만 빠른 개발 진행을 위해 AWS Cognito를 사용하였다. 덕분에 사용자 회원가입, 로그인, JWT 발급 등의
        기능을 빠르게 도입할 수 있었고, Istio를 이용해 JWT 기반 트래픽 거부 및 사용자 인증 기능을 쉽게 구현할 수 있었다.
        <br />
        <br />
        <br />
        <Image
          size="large"
          alt="로봇 아키텍서 설계도"
          src={robotManagementArchitecure}
          caption="설계한 로봇 관제 시스템 서버 아키텍처 다이어그램"
        />
        <br />
        <br />
        로봇과 서버 간의 실시간 양방향 통신을 위해 WebSocket을 채택했는데, 로봇을 서비스와 직접적으로 WebSocket으로
        연결하면 서비스의 업데이트 혹은 롤백 작업 때 연결이 끊기는 이슈가 발생할 것이다. 이러한 일로 연결 끊김이
        발생하지 않게 하기 위해 WebSocket 연결과 통신 기능을 위임해주는 AWS WebSocket API Gateway를 이용하였다.
        WebSocket API Gateway는 AWS에서 관리를 하기 때문에 많은 로봇이 접속을 해도 백엔드 서비스 쪽으로 통신 수립에 대한
        부하가 전파되지 않는다. 게다가 WebSocket API Gateway는 로봇에서 정보를 전달하면 백엔드에 HTTP로 정보를
        전달해주고, 반대로 전달하고자 하는 정보를 대상 WebSocket Connection ID와 함께 HTTP로 전달하면 해당 단말에
        전달해주기 때문에 사용하기 편리하다. 사용요금이 저렴하다는 점도 장점이다.
        <br />
        <br />
        <Image
          src={awsWebSocketAPIGatewayPricing}
          alt="AWS API Gateway Pricing"
          size="medium"
          caption="WebSocket API Gateway 사용요금(서울 기준)"
        />
        <br />
        <br />
        로봇이 WebSocket API Gateway로 WebSocket 연결을 하거나 끊으면, 이 정보가 AWS Lambda로 전달되어 처리가
        이루어진다. AWS Lambda를 채택한 이유도 WebSocket API Gateway를 도입한 이유와 마찬가지로 서비스의 일시적인 다운에
        의해 이벤트의 유실이 발생하지 않도록 하기 위해서였다.
        <br />
        <br />
        두 대 이상의 로봇들이 같은 인증정보로 연결을 요청을 하거나 한 로봇에게 여러 개의 작업 할당이 일어나는 등의
        동시성 문제가 발생할 수 있다. 이런 동시성 문제를 해결하기 위해 Redis(Elasticache)를 이용하였다. Redis는 원자성을
        가진 값 할당 연산을 할 수 있기에 이를 이용해 일종의 Lock을 구현하여 동시성 문제를 해결하였다.
        <br />
        <br />
        서버 인프라의 모니터링과 어플리케이션 로그, 메트릭들을 관리할 수 있어야 했고, 웹 콘솔을 통해 로봇 상태에 대한
        메트릭 대시보드를 제공하는 기능이 필요했다. 컨테이너 로그를 수집하기 위해 EKS에 Fluent Bit를 DaemonSet로
        배포했고, 로그들을 Cloudwatch Logs에 전송하도록 구성하였다. 또한 EKS Metric 정보를 수집하기 위해 Prometheus를
        사용하고, Grafana로 대시보드를 생성하였다. 쿠버네티스에 이러한 모니터링 스택을 구축하기 위해 Helm을 이용하였다.
        <br />
        <br />
        쿠버네티스에 서비스들이 배포되어야 하는 형태를 Infrastructure as Code(IaC)로 관리하기 위해 Infrastructure
        리포지토리를 생성하고 내부에 Helm Chart로 구성하였다. 그리고 각 서비스들의 CI/CD 파이프라인을 구축했는데, 각
        서비스 코드 리포지토리에 커밋을 하면 Github Actions를 통해 Docker Image로 빌드하고 AWS Elastic Container
        Registry(ECR)에 올리도록 구성하였다. 그 후 ArgoCD를 통해 쿠버네티스 배포 상태가 Infrastructure 리포지토리와
        동기화되도록 구성하였다.
      </Paragraph>

      <Heading>개발 환경의 구축</Heading>
      <Paragraph>
        본격적인 개발 진행에 앞서 원활한 개발 진행을 위해 개발 환경을 구축하였다. 개인적으로 좋은 결과물은 좋은 문화와
        환경에서 만들어진다고 생각해 상황에 맞춰 가장 적절한 개발 환경을 만들려고 노력한다. IDE로 Visual Studio Code를
        이용했고 확장 도구로 Dev Container의 도움을 많이 받았다. Dev Container는 개발을 로컬 머신이 아닌 Docker
        Container 위에서 진행할 수 있도록 해주는 도구로, 호스트 컴퓨터에서 독립되어 일관된 환경에서 개발을 진행할 수
        있게 해준다. 이것을 이용하면 다른 컴퓨터에서 개발을 진행할 때에도 별다른 문제없이 동일한 환경에서 개발을 진행할
        수 있고, Dockerfile 및 json 파일로 Dev Container를 구성하기 때문에 재사용하기도 편리하다. 로컬에서 여러 서비스를
        동시에 실행하며 개발할 때가 많았는데 Dev Container 덕분에 동일 포트 사용에 의한 충돌을 방지하고 개발을 진행할 수
        있었다.
        <br />
        <br />
        마이크로서비스 코드를 개발할 Dev Container에는 Node.js 런타임이 설치된 이미지를 사용하였다. 이 이미지는 Docker
        Compose로 MySQL 데이터베이스 컨테이너와 함께 연결하여 로컬에서 DB연동 테스트를 할 수 있도록 설정하였다. 또한
        zsh와 oh-my-zsh plugin을 설치하여 히스토리 기반 터미널 자동완성 등의 편의기능을 사용할 수 있도록 하였다.
        <br />
        <br />
        인프라를 구축할 때 사용할 Dev Container도 구성하였다. aws cli, eksctl, kubectl, helm, github cli 등의 cli 툴들을
        미리 설치해 놓은 Dev Container를 생성해 인프라를 구축하였다. 덕분에 호스트 컴퓨터에서 이러한 cli 툴들을 설치하며
        생길 수 있는 설정 문제를 방지할 수 있었다.
        <br />
        <br />
        서버리스 코드 개발이나 프런트엔드 웹 콘솔 개발을 위한 Dev Container도 구성을 했다. 이 Dev Container들은
        마이크로서비스 개발용 Dev Container와 유사하게 Node.js, zsh 등이 설치되도록 구성하였다.
      </Paragraph>
      <Heading>로봇 관제 플랫폼 개발</Heading>
      <Paragraph>
        개발환경을 구축하고 본격적으로 작업을 시작했다. 각 영역들에 대해 대표적으로 진행한 개발 작업들은 다음과 같다:
        <br />
        <br />
        <span className="font-bold text-lg inline-block mb-1">클라우드 인프라 구축</span>
        <br />
        AWS 웹 콘솔, awscli, eksctl 들을 이용해 VPC, IAM, Load Balancer, API Gateway, RDS, ElastiCache, EKS 클러스터 등
        AWS 리소스들을 설정했다. 이후 helm을 이용해 구축한 EKS 클러스터에 istio, prometheus 스택, argo cd 등을 설치했다.
        <br />
        <br />
        추후 재현성을 위해 구축에 이용한 터미널 명령어, 설정 json 파일 등을 Markdown 문서로 정리를 해두었다.
        <br />
        <br />
        <Image
          size="small"
          src={infrastructureInitialization}
          alt="쿠버네티스 구성 문서 정리"
          caption={"쿠버네티스 인프라 구축 설정들을 문서로 정리한 모습"}
        />
        <br />
        그리고 마이크로서비스에 대한 helm chart들을 작성하고 CI/CD 파이프라인 구축 및 연동을 진행했다.
        마이크로서비스들에 필요한 설정 정보들을 ConfigMap으로 관리하고, Secret으로 민감한 정보들을 관리하였다. 이
        정보들을 각 서비스들에 환경변수로 주입하도록 구성하였다.
        <br />
        <br />
        <span className="font-bold text-lg inline-block mb-1">마이크로서비스 개발</span>
        <br />
        로봇 관제 플랫폼의 마이크로서비스들은 Nest.js 프레임워크를 기반으로 개발했다. 각 서비스들에서 공통으로 사용될
        코드들을 Boilerplate 코드로 작성했는데, 여기에는 TypeORM을 이용한 DB 연결, Health Check 엔드포인트, 환경변수
        Validation, Graceful Shutdown, Swagger API 문서 자동 생성 등의 기능을 포함시켰다.
        <br />
        <br />
        기능적인 요구사항들을 Nest.js에서 제공하는 Module, Controller, Service, Repository, Request DTO, Response DTO
        에너테이션 및 클래스들을 이용해 역할을 분리 및 구성하여 개발을 진행했고, Validation Pipe를 이용해 요청에
        전달되는 파라미터들이 유효한지 검사하도록 설정하였다. 또 Guard를 이용해 인증된 사용자의 요청인지, 권한이 있는
        사용자의 요청인지 검사하도록 구성하였다.
        <br />
        <br />
        <span className="font-bold text-lg inline-block mb-1">서버리스 코드 개발</span>
        <br />
        AWS Lambda의 서버리스 코드들은 TypeScript로 작성하였고, Serverless Framework를 이용해 배포를 하였다. Serverless
        Framework를 이용하면 WebSocket API Gateway와의 연동 테스트, VPC 설정, IAM Role 설정, S3에 코드 업로드 등의
        작업을 자동으로 해주거나 설정 파일로 쉽게 구성할 수 있게 해주기 때문에 간편하게 서버리스 코드를 배포할 수
        있었다.
        <br />
        <br />
        Robot들이 WebSocket API Gateway로 연결 요청을 하면 AWS Lambda에서 이 요청을 받아 처리하도록 구성했다.
        <br />
        WebSocket 연결 수립 전 동작하는 람다 함수는 로봇의 인증을 처리하고 유효한 로봇이라면 Connection
        Redis(Elasticache) 연동을 설정해 이미 연결된 혹은 연결중인 로봇인지 검사하고 연결의 허용 여부를 반환하도록
        구성했다. 반대로 WebSocket 연결 해제 시 동작하는 람다 함수는 Redis(Elasticache)에서 연결 정보를 삭제하도록
        구성했다.
        <br />
        <br />
        <span className="font-bold text-lg inline-block mb-1">웹 콘솔(Frontend) 개발</span>
        <br />
        관제 플랫폼의 웹 콘솔은 Next.js(React)로 구성하였다. Next.js 프로젝트는 AWS Amplify를 이용해 배포하였는데,
        리포지토리에 코드를 올리면 Amplify에서 CI/CD 파이프라인을 제공해 자동으로 빌드 및 배포를 하도록 구성할 수
        있었다.
        <br />
        <br />
        사용자의 인증 및 인가 처리를 위해 NextAuth 라이브러리를 이용했고, AWS Cognito의 OAuth2 인증을 이용해 손쉽게
        로그인/로그아웃 기능을 구현했다. NextAuth는 XSS 공격에 의한 Access 토큰 탈취를 Frontend 서버간의 http-only
        쿠키에 토큰을 저장하는 방식을 이용하고, CSRF 공격 방지를 위해 로그인/로그아웃 post 요청에 CSRF 토큰을 이용한다.
        Backend API 서버에 요청을 보낼 때는 Frontend 서버에서 http-only 쿠키에 담긴 Access 토큰을 요청하고 이를 api
        서버에 http 헤더에 담아 요청을 보내도록 하여 Backend API 서버에 대한 CSRF 공격을 방지했다.
        <br />
        <br />
        백엔드와 REST 통신을 하기 위해 Axios 라이브러리를 이용했는데, Tanstack React Query 라이브러리를 이용해
        Stale-While-Revalidate 기능 및 컴포넌트들의 중복 요청 최소화 기능을 구현했다. Axios Interceptor를 이용해 요청
        전에 토큰이 유효한지 검사하고 토큰이 만료되었다면 내부적으로 자동으로 Refresh Token으로 새로운 토큰을 발급받도록
        구현하였다.
        <br />
        <br />
        컴포넌트 개발은 Next.js 13버전에서 새로 추가된 App Router 방식으로 개발을 진행했다. 덕분에 SSR 및 React Server
        Components를 이용해 서버에서 컴포넌트들을 미리 렌더링하여 빠른 페이지 로딩을 제공할 수 있었다.
        <br />
        <br />
        <span className="font-bold text-lg inline-block mb-1">안드로이드 앱 개발</span>
        <br />
        연구실에서 몇번 로봇을 다뤄봤는데 안드로이드 기반 스마트폰과 다른점이 없다는 것을 확인했었다. 매번 로봇에 직접
        앱을 설치하며 개발을 하기에는 지리적으로 먼곳에 있어 어려웠다. 플랫폼 개발 초반에는 백엔드 서버와 연동이
        잘되는지만 확인할 정도로만 App 개발 작업을 하면 되었기에, 혼자 개발하는 도중에는 스마트폰 혹은 안드로이드
        에뮬레이터로 개발 및 테스트를 진행하고 추후 안드로이드 개발자를 고용하거나 아웃소싱을 통해 개발을 진행할 계획을
        세우고 진행했다.
        <br />
        <br />
        안드로이드 앱은 Android Studio에서 Kotlin을 이용해 개발을 진행했고 websocket 연결을 위해 OkHttp3 라이브러리를
        이용했다. 간단하게 백엔드 연결/연결해제 버튼을 통해 백엔드 서버와의 연결을 확인할 수 있도록 화면을 구성해 개발을
        했다. 앱에서 연결 버튼을 누르면 포그라운드에서 websocket으로 백엔드 서버와 연결을 시도하고, 연결을 성공하면 웹
        콘솔에서 실시간으로 연결이 된 것을 확인할 수 있었다.
      </Paragraph>

      <Heading>마무리</Heading>
      <Paragraph>
        최종적으로 웹콘솔에서 조직, 사용자, 로봇 개체에 대한 등록을 하고, 로봇을 위한 안드로이드 앱에서 등록된 로봇의
        신원으로 WebSocket 연결을 수립하고 웹 콘솔에서 로봇의 상태를 실시간으로 확인하는 모습을 연구실에서 시연을 통해
        보여주었다. 시연을 통해 사업의 방향성과 개발 진행 상황을 공유하고, 추가적인 요구사항이나 수정사항을 논의하였다.
        이후 연구실에서 후속적인 로봇 관제 플랫폼의 개발을 진행할 아웃소싱 업체와 협의를 진행할 계획을 세웠고 해당
        업체에 지금까지 작업한 내용들을 공유 및 전달하며 작업을 마무리하였다.
        <br />
        <br />
        인프라 구축에서 백엔드 서비스 개발, 서버리스 코드 개발, 웹 콘솔 개발, 안드로이드 앱 개발까지 다양한 영역에
        대해서 1인 개발 작업을 진행했다. 다양한 영역에 대해 새롭게 배우는 부분들이 많았고, 많은 성장을 얻었다고
        생각한다. 특히 로깅 시스템 구축, 쿠버네티스 클러스터 구성과 서비스 메시 구축을 통해 엔터프라이즈급 기능 구현을
        위한 관측가능성에 대한 중요성을 느낄 수 있었다. 추후 취업을 하면 그곳에서 운영되는 환경과 지금까지 진행했던
        작업들에 대해서 비교를 해보며 더 깊이 이해하고, 앞으로 더 나은 방향으로 설계 및 구축할 수 있는 방법을 찾아보고
        싶다.
      </Paragraph>
      <Footer>Last Update: 2024-06-01</Footer>
    </Article>
  );
}

export default RobotControlPlatformArticle;
