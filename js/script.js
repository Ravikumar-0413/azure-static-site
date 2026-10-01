const deployBtn = document.getElementById("deployBtn");
const status = document.getElementById("status");

deployBtn.addEventListener("click", () => {
  const messages = [
    "Build pipeline completed ✓",
    "Artifact 'drop' published ✓",
    "Release pipeline started ✓",
    "Azure App Service deployment completed ✓"
  ];

  deployBtn.disabled = true;
  let i = 0;

  const timer = setInterval(() => {
    status.textContent = messages[i];
    i++;

    if (i === messages.length) {
      clearInterval(timer);
      deployBtn.disabled = false;
      deployBtn.textContent = "Deployment Complete";
      status.textContent = "Website is ready on Azure App Service ✓";
    }
  }, 700);
});
