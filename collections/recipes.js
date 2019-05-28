Recipes = new Mongo.Collection("recipes");

Recipes.allow({
  insert: function(userid, doc) {
    return !!userid;
  }
});

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: Array
  },
  "ingredients.$": {
    type: Object
  },
  "ingredients.$.name": {
    type: String
  },
  "ingredients.$.amount": {
    type: String
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Recipes.attachSchema(RecipeSchema);
