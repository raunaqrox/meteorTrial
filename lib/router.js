Router.configure({
  layoutTemplate:'layout',
  loadingTemplate:'loading',
  notFoundTemplate:'notFound'
});

Router.route("/", {
  name: "homeIndex",
  data: function(){
    return {
      "message" : "Main page"
    };
  }
});

Router.route("/contact", {
  name: "homeContact",
  data: function(){
    return {
      "message" : "Contact Page"
    };
  }
});

Router.route("/about", {
  name: "homeAbout",
  data: function(){
    return {
      "message" : "About Page"
    };
  }
});


Router.route("/profile", {
  name: "loggedInProfile",
  data: function(){
    return {
      "message" : "profile"
    };
  }
});
