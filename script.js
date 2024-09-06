const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, thanks chubbi! 🫶😊";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTk4cGcxY3c4ZzEzaWN5ZHZhejM3dzhyMGgxcHY0M2NzN2o5Y3RleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zTQQPJXn1j8Jy/giphy.gif";
  btnGroup.style.display = "none";  // Hide the buttons after clicking "Yes"
});

noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;
  
  // Generate random positions within the wrapper boundaries
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  noBtn.style.position = 'absolute';  // Ensure the button can move within the wrapper
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
