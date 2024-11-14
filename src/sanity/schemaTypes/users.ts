export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: "username",
      title: "Username",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
  ],
};
