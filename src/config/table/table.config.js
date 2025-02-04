const tables = {
  role: {
    title: "Roles",
    fields: {
      label: "Name",
      value: "Identifier",
      delete: "Delete",
    },
  },
  permission: {
    title: "Permissions",
    fields: {
      label: "Name",
      value: "Identifier",
      delete: "Delete",
    },
  },
  server: {
    title: "Servers",
    fields: {
      alias: "Name",
      host: "Host",
      port: "Port",
      username: "Username",
      password: "Password",
      database: "Database",
    },
  },
  user: {
    title: "Users",
    fields: {
      firstName: "Firstname",
      lastName: "Lastname",
      "role.label": "Role",
    },
  },
};

export default tables;
