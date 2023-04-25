const moveRocket = () => {
  const rocket = document.querySelector('.rocket-container');

  if (rocket){
    let x = 0;
    let y = 0;
    let rotation = 0;
    rocket.style.left = `${x}px`;
    rocket.style.top = `${y}px`;
    rocket.style.transform = `rotate(${rotation}deg)`;

    // Define the movement speed of the rocket
    const speed = 10;

    // Define the rotation speed of the rocket
    const rotationSpeed = 5;

    // Keep track of the arrow keys that are currently pressed
    const keysPressed = {};

    // Add an event listener for keydown events
    document.addEventListener('keydown', (event) => {
      keysPressed[event.code] = true;
      rocket.classList.remove('static-rocket')
    });

    // Add an event listener for keyup events
    document.addEventListener('keyup', (event) => {
      keysPressed[event.code] = false;
    });

    // Define the update function
    function update() {
      const edgeMargin = 150;
      const scrollSpeed = 10;
      const scrollAddY = y + window.innerHeight - 100;
      const angle = (rotation - 90) * Math.PI / 180;
      let vx = 0;
      let vy = 0;
      // Check which arrow keys are currently pressed
      if (keysPressed['ArrowLeft'] || keysPressed['KeyA']) {
        rotation -= rotationSpeed;
      }
      if (keysPressed['ArrowRight'] || keysPressed['KeyD']) {
        rotation += rotationSpeed;
      }
      if (keysPressed['ArrowUp'] || keysPressed['KeyW']) {
        vx = speed * Math.cos(angle);
        vy = speed * Math.sin(angle);
        if (scrollAddY < edgeMargin + window.scrollY && window.scrollY > 0) {
        window.scrollTo(window.scrollX, window.scrollY - scrollSpeed);
        }
        if (scrollAddY > window.innerHeight - edgeMargin + window.scrollY && window.scrollY < document.body.clientHeight - window.innerHeight) {
          window.scrollTo(window.scrollX, window.scrollY + scrollSpeed);
        }
      }
      
      // Update the position of the rocket
      x += vx;
      y += vy;
      if (y > document.body.clientHeight - 900) {
        y = document.body.clientHeight - 900;
      }
      rocket.style.left = `${x}px`;
      rocket.style.top = `${y}px`;
      rocket.style.transform = `rotate(${rotation}deg)`;

      
      
      // Call requestAnimationFrame to update the position again on the next frame
      requestAnimationFrame(update);
    }

    // Call the update function to start the animation
    requestAnimationFrame(update);
  }
}

export default moveRocket