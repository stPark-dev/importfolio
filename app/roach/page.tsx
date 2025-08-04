"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

// 게임 상수 정의
const BASE_WIDTH = 800;
const BASE_HEIGHT = 600;
const GROUND_HEIGHT = 80;
const NET_HEIGHT = 120;
const NET_WIDTH = 8;
const ROACH_WIDTH = 80;
const ROACH_HEIGHT = 50;
const BALL_RADIUS = 12;
const GRAVITY = 0.6;
const JUMP_POWER = -14;
const MOVE_SPEED = 4;
const BALL_BOUNCE = 0.75;
const WIN_SCORE = 3;

// 게임 오브젝트 타입 정의
interface Position {
  x: number;
  y: number;
}

interface Velocity {
  x: number;
  y: number;
}

interface Roach {
  position: Position;
  velocity: Velocity;
  onGround: boolean;
  animFrame: number;
  animSpeed: number;
  facingRight: boolean;
}

interface Ball {
  position: Position;
  velocity: Velocity;
}

interface GameState {
  playerScore: number;
  cpuScore: number;
  gameOver: boolean;
  winner: string;
  countdown: number;
  isCountingDown: boolean;
  gameActive: boolean;
}

const RoachVolleyball: React.FC = () => {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const keysRef = useRef<{ [key: string]: boolean }>({});
  const spriteImageRef = useRef<HTMLImageElement>();
  const countdownStartTimeRef = useRef<number>(0);
  const touchControlsRef = useRef<{ left: boolean; right: boolean; jump: boolean }>({
    left: false,
    right: false,
    jump: false,
  });
  const [canvasSize, setCanvasSize] = useState({ width: BASE_WIDTH, height: BASE_HEIGHT });
  const [scale, setScale] = useState(1);

  // 게임 상태
  const [gameState, setGameState] = useState<GameState>({
    playerScore: 0,
    cpuScore: 0,
    gameOver: false,
    winner: "",
    countdown: 3,
    isCountingDown: true,
    gameActive: false,
  });

  // 게임 오브젝트들
  const playerRef = useRef<Roach>({
    position: { x: 80, y: BASE_HEIGHT - GROUND_HEIGHT - ROACH_HEIGHT },
    velocity: { x: 0, y: 0 },
    onGround: true,
    animFrame: 0,
    animSpeed: 0.1,
    facingRight: true,
  });

  const cpuRef = useRef<Roach>({
    position: {
      x: BASE_WIDTH - 80 - ROACH_WIDTH,
      y: BASE_HEIGHT - GROUND_HEIGHT - ROACH_HEIGHT,
    },
    velocity: { x: 0, y: 0 },
    onGround: true,
    animFrame: 0,
    animSpeed: 0.1,
    facingRight: false,
  });

  const ballRef = useRef<Ball>({
    position: { x: BASE_WIDTH / 2, y: BASE_HEIGHT / 2 - 100 },
    velocity: { x: 2, y: 0 },
  });

  // 스프라이트 이미지 로드
  useEffect(() => {
    const img = new Image();
    img.src = "/roach.png";
    img.onload = () => {
      spriteImageRef.current = img;
    };
  }, []);

  // 반응형 캔버스 크기 조정
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      const containerHeight = window.innerHeight * 0.6; // 화면 높이의 60%

      const scaleX = containerWidth / BASE_WIDTH;
      const scaleY = containerHeight / BASE_HEIGHT;
      const newScale = Math.min(scaleX, scaleY, 1); // 최대 원본 크기까지만

      setScale(newScale);
      setCanvasSize({
        width: BASE_WIDTH * newScale,
        height: BASE_HEIGHT * newScale,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 키보드 이벤트 핸들러
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!gameState.gameActive) return; // 게임이 활성화되지 않았으면 조작 불가
      keysRef.current[e.code] = true;
      e.preventDefault();
    },
    [gameState.gameActive]
  );

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    keysRef.current[e.code] = false;
    e.preventDefault();
  }, []);

  // 터치 컨트롤 핸들러
  const handleTouchControl = useCallback(
    (control: "left" | "right" | "jump", pressed: boolean) => {
      if (!gameState.gameActive) return;
      touchControlsRef.current[control] = pressed;
    },
    [gameState.gameActive]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // 카운트다운 시작 함수
  const startCountdown = useCallback(() => {
    // 게임이 끝났으면 카운트다운 시작하지 않음
    setGameState((prev) => {
      if (prev.gameOver) return prev;

      countdownStartTimeRef.current = Date.now();
      return {
        ...prev,
        countdown: 3,
        isCountingDown: true,
        gameActive: false,
      };
    });
  }, []);

  // 게임 리셋 함수
  const resetGame = useCallback(() => {
    setGameState({
      playerScore: 0,
      cpuScore: 0,
      gameOver: false,
      winner: "",
      countdown: 3,
      isCountingDown: true,
      gameActive: false,
    });

    // 오브젝트 위치 리셋
    playerRef.current = {
      position: { x: 80, y: BASE_HEIGHT - GROUND_HEIGHT - ROACH_HEIGHT },
      velocity: { x: 0, y: 0 },
      onGround: true,
      animFrame: 0,
      animSpeed: 0.1,
      facingRight: true,
    };

    cpuRef.current = {
      position: {
        x: BASE_WIDTH - 80 - ROACH_WIDTH,
        y: BASE_HEIGHT - GROUND_HEIGHT - ROACH_HEIGHT,
      },
      velocity: { x: 0, y: 0 },
      onGround: true,
      animFrame: 0,
      animSpeed: 0.1,
      facingRight: false,
    };

    ballRef.current = {
      position: { x: BASE_WIDTH / 2, y: BASE_HEIGHT / 2 - 100 },
      velocity: { x: Math.random() > 0.5 ? 2 : -2, y: 0 },
    };

    // 500ms 후 카운트다운 시작
    setTimeout(startCountdown, 500);
  }, [startCountdown]);

  // 점수 업데이트
  const updateScore = useCallback(
    (side: "left" | "right") => {
      let isGameEnding = false;

      setGameState((prev) => {
        const newState = { ...prev };
        if (side === "left") {
          newState.cpuScore += 1;
        } else {
          newState.playerScore += 1;
        }

        if (newState.playerScore >= WIN_SCORE) {
          newState.gameOver = true;
          newState.winner = "🎉 Player Wins!";
          newState.gameActive = false;
          newState.isCountingDown = false;
          isGameEnding = true;
        } else if (newState.cpuScore >= WIN_SCORE) {
          newState.gameOver = true;
          newState.winner = "💻 CPU Wins!";
          newState.gameActive = false;
          newState.isCountingDown = false;
          isGameEnding = true;
        } else {
          // 게임 계속 - 공 리셋 후 카운트다운
          newState.gameActive = false;
          newState.isCountingDown = true;
          newState.countdown = 3;
        }

        return newState;
      });

      // 공 리셋
      ballRef.current = {
        position: { x: BASE_WIDTH / 2, y: BASE_HEIGHT / 2 - 100 },
        velocity: { x: Math.random() > 0.5 ? 2 : -2, y: 0 },
      };

      // 게임이 끝나지 않았을 때만 카운트다운 시작
      if (!isGameEnding) {
        setTimeout(startCountdown, 1000);
      }
    },
    [startCountdown]
  );

  // 충돌 감지 함수
  const checkBallRoachCollision = (ball: Ball, roach: Roach): boolean => {
    const ballLeft = ball.position.x - BALL_RADIUS;
    const ballRight = ball.position.x + BALL_RADIUS;
    const ballTop = ball.position.y - BALL_RADIUS;
    const ballBottom = ball.position.y + BALL_RADIUS;

    const roachLeft = roach.position.x;
    const roachRight = roach.position.x + ROACH_WIDTH;
    const roachTop = roach.position.y;
    const roachBottom = roach.position.y + ROACH_HEIGHT;

    return (
      ballLeft < roachRight &&
      ballRight > roachLeft &&
      ballTop < roachBottom &&
      ballBottom > roachTop
    );
  };

  // 게임 업데이트 로직
  const updateGame = useCallback(() => {
    if (!gameState.gameActive) return;

    const player = playerRef.current;
    const cpu = cpuRef.current;
    const ball = ballRef.current;

    // 플레이어 입력 처리 (키보드 + 터치)
    let playerMoving = false;
    if ((keysRef.current["ArrowLeft"] || touchControlsRef.current.left) && player.position.x > 0) {
      player.position.x -= MOVE_SPEED;
      player.facingRight = false;
      playerMoving = true;
    }
    if (
      (keysRef.current["ArrowRight"] || touchControlsRef.current.right) &&
      player.position.x < BASE_WIDTH / 2 - NET_WIDTH / 2 - ROACH_WIDTH - 10
    ) {
      player.position.x += MOVE_SPEED;
      player.facingRight = true;
      playerMoving = true;
    }
    if ((keysRef.current["Space"] || touchControlsRef.current.jump) && player.onGround) {
      player.velocity.y = JUMP_POWER;
      player.onGround = false;
    }

    // CPU AI - 간단한 추적 로직
    const ballX = ball.position.x;
    const cpuCenterX = cpu.position.x + ROACH_WIDTH / 2;
    let cpuMoving = false;

    if (ballX > BASE_WIDTH / 2) {
      // 공이 CPU 쪽에 있을 때만 반응
      if (ballX > cpuCenterX + 30 && cpu.position.x < BASE_WIDTH - ROACH_WIDTH) {
        cpu.position.x += MOVE_SPEED * 0.8;
        cpu.facingRight = true;
        cpuMoving = true;
      } else if (ballX < cpuCenterX - 30 && cpu.position.x > BASE_WIDTH / 2 + NET_WIDTH / 2 + 10) {
        cpu.position.x -= MOVE_SPEED * 0.8;
        cpu.facingRight = false;
        cpuMoving = true;
      }

      // CPU 점프 조건
      if (
        Math.abs(ballX - cpuCenterX) < 100 &&
        ball.position.y < cpu.position.y + 50 &&
        cpu.onGround &&
        ball.velocity.y > -5
      ) {
        cpu.velocity.y = JUMP_POWER * 0.9;
        cpu.onGround = false;
      }
    }

    // 바퀴벌레 물리 업데이트
    [player, cpu].forEach((roach) => {
      // 중력 적용
      roach.velocity.y += GRAVITY;
      roach.position.y += roach.velocity.y;

      // 바닥 충돌
      const groundY = BASE_HEIGHT - GROUND_HEIGHT - ROACH_HEIGHT;
      if (roach.position.y >= groundY) {
        roach.position.y = groundY;
        roach.velocity.y = 0;
        roach.onGround = true;
      }
    });

    // 애니메이션 프레임 업데이트
    player.animSpeed = playerMoving ? 0.3 : 0.1;
    cpu.animSpeed = cpuMoving ? 0.25 : 0.1;

    player.animFrame += player.animSpeed;
    if (player.animFrame >= 6) player.animFrame = 0;

    cpu.animFrame += cpu.animSpeed;
    if (cpu.animFrame >= 6) cpu.animFrame = 0;

    // 공 물리 업데이트
    ball.position.x += ball.velocity.x;
    ball.position.y += ball.velocity.y;
    ball.velocity.y += GRAVITY * 0.4; // 공의 중력은 약하게

    // 공 경계 충돌
    if (ball.position.x <= BALL_RADIUS || ball.position.x >= BASE_WIDTH - BALL_RADIUS) {
      ball.velocity.x *= -BALL_BOUNCE;
      ball.position.x = Math.max(BALL_RADIUS, Math.min(BASE_WIDTH - BALL_RADIUS, ball.position.x));
    }

    if (ball.position.y <= BALL_RADIUS) {
      ball.velocity.y *= -BALL_BOUNCE;
      ball.position.y = BALL_RADIUS;
    }

    // 네트 충돌
    const netX = BASE_WIDTH / 2 - NET_WIDTH / 2;
    if (
      ball.position.x >= netX - BALL_RADIUS &&
      ball.position.x <= netX + NET_WIDTH + BALL_RADIUS &&
      ball.position.y >= BASE_HEIGHT - GROUND_HEIGHT - NET_HEIGHT - BALL_RADIUS
    ) {
      if (ball.velocity.x > 0) {
        ball.position.x = netX - BALL_RADIUS;
      } else {
        ball.position.x = netX + NET_WIDTH + BALL_RADIUS;
      }
      ball.velocity.x *= -BALL_BOUNCE;
    }

    // 바퀴벌레와 공 충돌
    if (checkBallRoachCollision(ball, player)) {
      const hitX = ball.position.x - (player.position.x + ROACH_WIDTH / 2);
      ball.velocity.x = hitX * 0.15 + (player.facingRight ? 4 : -4);
      ball.velocity.y = -10;
      ball.position.y = player.position.y - BALL_RADIUS - 1;
    }

    if (checkBallRoachCollision(ball, cpu)) {
      const hitX = ball.position.x - (cpu.position.x + ROACH_WIDTH / 2);
      ball.velocity.x = hitX * 0.15 + (cpu.facingRight ? 4 : -4);
      ball.velocity.y = -10;
      ball.position.y = cpu.position.y - BALL_RADIUS - 1;
    }

    // 득점 조건 체크
    if (ball.position.y >= BASE_HEIGHT - GROUND_HEIGHT - BALL_RADIUS) {
      if (ball.position.x < BASE_WIDTH / 2) {
        updateScore("left"); // CPU 득점
      } else {
        updateScore("right"); // Player 득점
      }
    }
  }, [gameState.gameActive, updateScore]);

  // 렌더링 함수
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 배경 (어두운 체육관)
    const gradient = ctx.createLinearGradient(0, 0, 0, BASE_HEIGHT);
    gradient.addColorStop(0, "#1a1a2e");
    gradient.addColorStop(1, "#16213e");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, BASE_WIDTH, BASE_HEIGHT);

    // 바닥
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(0, BASE_HEIGHT - GROUND_HEIGHT, BASE_WIDTH, GROUND_HEIGHT);

    // 바닥 라인
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, BASE_HEIGHT - GROUND_HEIGHT);
    ctx.lineTo(BASE_WIDTH, BASE_HEIGHT - GROUND_HEIGHT);
    ctx.stroke();

    // 네트
    const netX = BASE_WIDTH / 2 - NET_WIDTH / 2;
    const netY = BASE_HEIGHT - GROUND_HEIGHT - NET_HEIGHT;

    ctx.fillStyle = "#F5F5F5";
    ctx.fillRect(netX, netY, NET_WIDTH, NET_HEIGHT);

    // 네트 격자
    ctx.strokeStyle = "#CCCCCC";
    ctx.lineWidth = 1;
    for (let i = 0; i < NET_HEIGHT; i += 15) {
      ctx.beginPath();
      ctx.moveTo(netX, netY + i);
      ctx.lineTo(netX + NET_WIDTH, netY + i);
      ctx.stroke();
    }

    // 바퀴벌레 렌더링 함수
    const drawRoach = (roach: Roach) => {
      if (!spriteImageRef.current) {
        // fallback 렌더링
        ctx.fillStyle = "#654321";
        ctx.fillRect(roach.position.x, roach.position.y, ROACH_WIDTH, ROACH_HEIGHT);
        return;
      }

      const frameIndex = Math.floor(roach.animFrame) % 6;
      const spriteWidth = 100; // 600px ÷ 6 = 100px per frame
      const spriteHeight = spriteImageRef.current.height;

      ctx.save();
      if (!roach.facingRight) {
        ctx.scale(-1, 1);
        ctx.drawImage(
          spriteImageRef.current,
          frameIndex * spriteWidth,
          0,
          spriteWidth,
          spriteHeight,
          -roach.position.x - ROACH_WIDTH,
          roach.position.y,
          ROACH_WIDTH,
          ROACH_HEIGHT
        );
      } else {
        ctx.drawImage(
          spriteImageRef.current,
          frameIndex * spriteWidth,
          0,
          spriteWidth,
          spriteHeight,
          roach.position.x,
          roach.position.y,
          ROACH_WIDTH,
          ROACH_HEIGHT
        );
      }
      ctx.restore();
    };

    // 바퀴벌레들 그리기
    drawRoach(playerRef.current);
    drawRoach(cpuRef.current);

    // 공 그리기
    const ball = ballRef.current;
    const ballGradient = ctx.createRadialGradient(
      ball.position.x - 3,
      ball.position.y - 3,
      0,
      ball.position.x,
      ball.position.y,
      BALL_RADIUS
    );
    ballGradient.addColorStop(0, "#FFD700");
    ballGradient.addColorStop(1, "#FFA500");

    ctx.fillStyle = ballGradient;
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    // 공 하이라이트
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(ball.position.x - 3, ball.position.y - 3, 3, 0, Math.PI * 2);
    ctx.fill();

    // 카운트다운 렌더링
    if (gameState.isCountingDown) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      ctx.fillRect(0, 0, BASE_WIDTH, BASE_HEIGHT);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      if (gameState.countdown > 0) {
        // 숫자 카운트다운
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 150px Arial";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 4;
        ctx.strokeText(gameState.countdown.toString(), BASE_WIDTH / 2, BASE_HEIGHT / 2 - 50);
        ctx.fillText(gameState.countdown.toString(), BASE_WIDTH / 2, BASE_HEIGHT / 2 - 50);

        ctx.fillStyle = "#FFD700";
        ctx.font = "bold 48px Arial";
        ctx.fillText("GET READY!", BASE_WIDTH / 2, BASE_HEIGHT / 2 + 80);
      } else {
        // GO! 메시지
        ctx.fillStyle = "#00FF00";
        ctx.font = "bold 120px Arial";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 4;
        ctx.strokeText("GO!", BASE_WIDTH / 2, BASE_HEIGHT / 2);
        ctx.fillText("GO!", BASE_WIDTH / 2, BASE_HEIGHT / 2);
      }
    }
  }, [gameState]);

  // 게임 루프
  const gameLoop = useCallback(() => {
    // 게임이 끝났으면 카운트다운 처리하지 않음
    if (!gameState.gameOver && gameState.isCountingDown && countdownStartTimeRef.current > 0) {
      const elapsed = Date.now() - countdownStartTimeRef.current;
      const newCountdown = Math.max(0, 3 - Math.floor(elapsed / 1000));

      if (newCountdown !== gameState.countdown) {
        if (newCountdown === 0) {
          // GO! 표시 후 게임 시작
          setGameState((prev) => ({ ...prev, countdown: 0 }));
          setTimeout(() => {
            setGameState((prev) => ({
              ...prev,
              isCountingDown: false,
              gameActive: true,
            }));
          }, 1000); // GO! 메시지를 1초간 표시
        } else {
          setGameState((prev) => ({ ...prev, countdown: newCountdown }));
        }
      }
    }

    updateGame();
    render();

    animationFrameRef.current = requestAnimationFrame(gameLoop);
  }, [gameState, updateGame, render]);

  // 게임 시작
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [gameLoop]);

  // 초기 카운트다운 시작
  useEffect(() => {
    setTimeout(startCountdown, 1000);
  }, [startCountdown]);

  return (
    <div className="min-h-screen bg-autumn-darkBrown flex flex-col items-center justify-center p-2 md:p-4">
      <div className="bg-autumn-cream rounded-lg shadow-2xl p-3 md:p-6 max-w-5xl w-full">
        {/* 헤더 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-2">
          <button
            onClick={() => router.push("/")}
            className="bg-autumn-rust hover:bg-autumn-wine text-autumn-cream px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg text-sm md:text-base w-full md:w-auto"
          >
            ← Back
          </button>
          <h1 className="text-2xl md:text-4xl font-bold text-autumn-espresso flex items-center gap-2">
            🪳 Roach Volleyball
          </h1>
          <button
            onClick={resetGame}
            className="bg-autumn-bronze hover:bg-autumn-rust text-autumn-cream px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md hover:shadow-lg text-sm md:text-base w-full md:w-auto"
          >
            Reset
          </button>
        </div>

        {/* 점수판 */}
        <div className="flex justify-center items-center gap-4 md:gap-12 mb-4 md:mb-6">
          <div className="text-center bg-autumn-sand rounded-lg p-2 md:p-4 shadow-md">
            <h3 className="text-sm md:text-xl font-bold text-autumn-espresso mb-1 md:mb-2">
              Player
            </h3>
            <div className="text-3xl md:text-5xl font-bold text-autumn-wine">
              {gameState.playerScore}
            </div>
          </div>
          <div className="text-xl md:text-3xl font-bold text-autumn-espresso">VS</div>
          <div className="text-center bg-autumn-sand rounded-lg p-2 md:p-4 shadow-md">
            <h3 className="text-sm md:text-xl font-bold text-autumn-espresso mb-1 md:mb-2">CPU</h3>
            <div className="text-3xl md:text-5xl font-bold text-autumn-wine">
              {gameState.cpuScore}
            </div>
          </div>
        </div>

        {/* 게임 캔버스 */}
        <div ref={containerRef} className="flex justify-center mb-4 md:mb-6 w-full">
          <canvas
            ref={canvasRef}
            width={BASE_WIDTH}
            height={BASE_HEIGHT}
            className="border-4 border-autumn-bronze rounded-lg shadow-xl"
            style={{
              width: `${canvasSize.width}px`,
              height: `${canvasSize.height}px`,
              imageRendering: "crisp-edges",
            }}
          />
        </div>

        {/* 조작법 */}
        <div className="hidden md:block text-center text-autumn-espresso bg-autumn-sand rounded-lg p-4 shadow-md">
          <p className="mb-2 text-lg">
            <strong>Controls:</strong> ← → Arrow keys to move, Spacebar to jump
          </p>
          <p className="text-md opacity-80">First to {WIN_SCORE} points wins!</p>
        </div>

        {/* 모바일 터치 컨트롤 */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-3 flex justify-between items-center bg-autumn-darkBrown bg-opacity-95 z-40">
          <div className="flex gap-2">
            <button
              onTouchStart={() => handleTouchControl("left", true)}
              onTouchEnd={() => handleTouchControl("left", false)}
              onMouseDown={() => handleTouchControl("left", true)}
              onMouseUp={() => handleTouchControl("left", false)}
              onMouseLeave={() => handleTouchControl("left", false)}
              className="bg-autumn-rust active:bg-autumn-wine text-autumn-cream px-6 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg select-none touch-none"
            >
              ←
            </button>
            <button
              onTouchStart={() => handleTouchControl("right", true)}
              onTouchEnd={() => handleTouchControl("right", false)}
              onMouseDown={() => handleTouchControl("right", true)}
              onMouseUp={() => handleTouchControl("right", false)}
              onMouseLeave={() => handleTouchControl("right", false)}
              className="bg-autumn-rust active:bg-autumn-wine text-autumn-cream px-6 py-4 rounded-lg font-bold text-xl transition-colors shadow-lg select-none touch-none"
            >
              →
            </button>
          </div>
          <button
            onTouchStart={() => handleTouchControl("jump", true)}
            onTouchEnd={() => handleTouchControl("jump", false)}
            onMouseDown={() => handleTouchControl("jump", true)}
            onMouseUp={() => handleTouchControl("jump", false)}
            onMouseLeave={() => handleTouchControl("jump", false)}
            className="bg-autumn-bronze active:bg-autumn-rust text-autumn-cream px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg select-none touch-none"
          >
            JUMP
          </button>
        </div>

        {/* 게임 오버 모달 */}
        {gameState.gameOver && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-autumn-cream rounded-xl p-10 text-center shadow-2xl max-w-md w-full mx-4">
              <h2 className="text-4xl font-bold text-autumn-espresso mb-6">{gameState.winner}</h2>
              <p className="text-xl text-autumn-espresso mb-6">
                Final Score: Player {gameState.playerScore} - {gameState.cpuScore} CPU
              </p>
              <button
                onClick={resetGame}
                className="bg-autumn-wine hover:bg-autumn-rust text-autumn-cream px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoachVolleyball;
