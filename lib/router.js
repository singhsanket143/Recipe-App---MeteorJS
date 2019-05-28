FlowRouter.route("/", {
  name: "home",
  action: function() {
    console.log("Yeah! We are on the home");
    BlazeLayout.render("HomeLayout");
  }
});

FlowRouter.route("/recipe-book", {
  name: "recipe-book",
  action: function() {
    BlazeLayout.render("MainLayout", { main: "Recipes" });
  }
});
