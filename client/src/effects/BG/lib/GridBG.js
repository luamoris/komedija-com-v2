// Сетка квадратов для фона

function SideLength() {
   const SIZE = [
      [425, 40],
      [768, 50],
      [1024, 60],
      [1440, 70],
      [1920, 80],
   ];

   return {
      getLength: (width) => SIZE.find((item) => width < item[0])?.[1] || SIZE[4][1]
   };
}

class GridBG {
   constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');

      this.side = SideLength();
      this.sideLength = this.side.getLength(window.innerWidth);

      this.squares = []; // Хранение информации о квадратах
      this.animationFrameId = null; // Для хранения id анимации

      this.handleResize = () => this.init();
      window.addEventListener('resize', this.handleResize);

      this.init();
      this.startAnimation();
   }

   // Инициализация сетки
   init() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.sideLength = this.side.getLength(window.innerWidth);
      this.gridSettings = this.calculate();
      this.squares = [];

      this.create();
      this.draw();
   }

   // Рассчет значений сетки: колонки, столбцы, отступы для центрирования.
   calculate() {
      const { width, height } = this.canvas;
      const length = this.sideLength;

      let cols = Math.floor(width / length);
      cols += (width % length) === 0 ? 0 : 1;
      let rows = Math.floor(height / length);
      rows += (height % length) === 0 ? 0 : 1;
      const offsetX = (width - (cols * length)) / 2;
      const offsetY = (height - (rows * length)) / 2;

      return { cols, rows, offsetX, offsetY };
   }

   // Создание сетки квадратиков
   create() {
      const { cols, rows, offsetX, offsetY } = this.gridSettings;
      const length = this.sideLength;

      for (let row = 0; row < rows; row++) {
         for (let col = 0; col < cols; col++) {
            this.squares.push({
               col,
               row,
               startTime: null, // Время начала анимации
               alpha: 0, // Прозрачность
               x: col * length + offsetX,
               y: row * length + offsetY,
            });
         }
      }
   }

   // Рисование сетки на canvas
   draw() {
      const length = this.sideLength;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Рисуем только те квадраты, которые активны (с анимацией)
      for (const square of this.squares) {
         const elapsed = performance.now() - square.startTime;
         const alpha = this.calculateAlpha(elapsed);

         // Если квадрат активен
         if (alpha > 0) {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            this.ctx.fillRect(square.x, square.y, length, length);
         }

         // Рисуем обводку квадрата
         this.ctx.strokeStyle = 'rgba(255, 255, 255, .05)';
         this.ctx.strokeRect(square.x, square.y, length, length);

         // Если анимация завершена, сбрасываем квадрат, чтобы он мог анимироваться заново
         if (alpha === 0 && square.startTime) {
            square.startTime = null;
         }
      }
   }

   // Анимация
   startAnimation() {
      const animate = (timestamp) => {
         // Обновляем квадраты, если время анимации прошло
         this.triggerRandomSquares();

         // Перерисовываем только изменённые квадраты
         this.draw(this.gridSettings);

         this.animationFrameId = requestAnimationFrame(animate);
      };

      this.animationFrameId = requestAnimationFrame(animate);
   }

   // Добавить случайные квадраты для анимации
   triggerRandomSquares() {
      // Каждый квадрат может начать анимацию с вероятностью 0.1
      if (Math.random() < 0.05) {
         const randomSquare = this.squares[Math.floor(Math.random() * this.squares.length)];

         // Если квадрат ещё не анимируется, запускаем анимацию
         if (!randomSquare.startTime) {
            randomSquare.startTime = performance.now();
         }
      }
   }

   // Рассчитываем прозрачность квадрата по времени
   calculateAlpha(elapsed) {
      const FADE_IN_DURATION = 600; // Время появления (мс)
      const HOLD_DURATION = 400; // Время удержания (мс)
      const FADE_OUT_DURATION = 400; // Время исчезновения (мс)

      const MAX_ALPHA = 0.05; // Максимальная прозрачность

      if (elapsed < FADE_IN_DURATION) {
         // Плавное появление
         return (elapsed / FADE_IN_DURATION) * MAX_ALPHA;
      } else if (elapsed < FADE_IN_DURATION + HOLD_DURATION) {
         // Удержание
         return MAX_ALPHA;
      } else if (elapsed < FADE_IN_DURATION + HOLD_DURATION + FADE_OUT_DURATION) {
         // Плавное исчезновение
         return MAX_ALPHA - ((elapsed - FADE_IN_DURATION - HOLD_DURATION) / FADE_OUT_DURATION) * MAX_ALPHA;
      } else {
         // Анимация завершена
         return 0;
      }
   }

   // Очистка при размонтировании компонента
   stopAnimation() {
      if (this.animationFrameId !== null) {
         cancelAnimationFrame(this.animationFrameId);
      }
      window.removeEventListener('resize', this.handleResize);
   }

}

export default GridBG;