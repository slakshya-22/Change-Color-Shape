const shapeContainer = document.getElementById("shapeContainer");
      const innerShape = document.getElementById("innerShape");
      const changeColorBtn = document.getElementById("changeColorBtn");
      const changeShapeBtn = document.getElementById("changeShapeBtn");

      const colors = [
        "#32CD32",
        "#FF6347",
        "#1E90FF",
        "#FFD700",
        "#FF69B4",
        "#8A2BE2",
      ];

      const shapes = [
        "circle(50%)", // Circle
        "inset(0%)", // Square
        "polygon(50% 0%, 0% 100%, 100% 100%)", // Triangle
        "polygon(50% 0%, 61% 38%, 100% 38%, 69% 61%, 79% 100%, 50% 75%, 21% 100%, 31% 61%, 0% 38%, 39% 38%)", // Star
      ];

      let currentShapeIndex = 0;

      changeColorBtn.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        shapeContainer.style.backgroundColor = randomColor;
      });

      changeShapeBtn.addEventListener("click", () => {
        currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
        innerShape.style.clipPath = shapes[currentShapeIndex];
      });