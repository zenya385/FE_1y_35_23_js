const mouseMove = document.querySelector(".js-event");

document.addEventListener("mousemove", onMouseMove);

let mouseCount = 0;

function onMouseMove(event) {
  mouseCount += 1;
  mouseMove.textContent = `Mouse moved to: ${mouseCount}, (${event.clientX}, ${event.clientY})`;

  //   const { clientX, clientY } = event;
  //   console.log(`Mouse moved to: (${clientX}, ${clientY})`);
}
