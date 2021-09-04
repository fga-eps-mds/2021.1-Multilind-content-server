export function setUpRoutes(app) {
  app.use("/api/content", (req, res) => {
    return res.send("server is up!!");
  });
}
