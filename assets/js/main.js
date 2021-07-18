let code = document.getElementById("code");
let msg = "Lorem ipsum dolor sit amet.";
function update(
  type = "default",
  message = msg,
  position = "bottom_right",
  timeout = 5000
) {
  notification(type, {
    message: message,
    position: position,
    timeout: timeout,
  });

  code.innerHTML = `
  notification("${type}", {
    message:"${message}",
    position: "${position}",
    timeout: ${timeout}
  });
  `;
  hljs.highlightAll();
}
update();

document.getElementById("top_left").onclick = () =>
  update("default", msg, "top_left");

document.getElementById("top_center").onclick = () =>
  update("default", msg, "top_center");

document.getElementById("top_right").onclick = () =>
  update("default", msg, "top_right");

document.getElementById("bottom_left").onclick = () =>
  update("default", msg, "bottom_left");

document.getElementById("bottom_center").onclick = () =>
  update("default", msg, "bottom_center");

document.getElementById("bottom_right").onclick = () =>
  update("default", msg, "bottom_right");

document.getElementById("default").onclick = () =>
  update("default", "Info", "bottom_right");

document.getElementById("success").onclick = () =>
  update("success", "Success", "bottom_right");

document.getElementById("warning").onclick = () =>
  update("warning", "Warning", "bottom_right");

document.getElementById("danger").onclick = () =>
  update("danger", "Error", "bottom_right");
