const {
  newMigration,
  FieldType,
  RelationType,
} = require("@graphcms/management");

const migration = newMigration({
  authToken: "...",
  endpoint: "...",
});

const blogPost = migration.createModel({
  apiId: "BlogPost",
  apiIdPlural: "BlogPosts",
  displayName: "Blog Post",
});

blogPost.addSimpleField({
  apiId: "title",
  displayName: "Title",
  type: FieldType.String,
});

blogPost.addSimpleField({
  apiId: "content",
  displayName: "Content",
  type: FieldType.Richtext,
});

blogPost.addRelationalField({
  apiId: "coverImage",
  displayName: "Cover Image",
  relationType: RelationType.OneToOne,
  model: "Asset",
});

migration
  .run(true)
  .then(() => console.log("Migration successful"))
  .catch((err) => console.log("Migration failed", err));
