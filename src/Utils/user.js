export const appsettings = () => {
  return JSON.parse(localStorage.getItem("app-settings") || "{}");
};
export const downloadApp = () => {
  const app = appsettings();
  localStorage.setItem(
    "app-settings",
    JSON.stringify({
      ...appsettings,
      hasInstalledApp: true,
    })
  );
  const con = window.confirm("Have you downloaded the app");
  if (con) {
    console.log(con);
    window.location.reload();
  }
};
