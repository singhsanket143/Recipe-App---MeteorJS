FlowRouter.route("/", {
  name: "home",
  action: function() {
    console.log("Yeah! We are on the home");
    BlazeLayout.render("HomeLayout");
  }
});

FlowRouter.route("/test", {
  name: "test",
  action: function() {
    BlazeLayout.render("MainLayout", { main: "test" });
  }
});
