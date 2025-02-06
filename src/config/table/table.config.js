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
  pgpool_status: {
    title: "Pool Status",
    fields: {
      item: "Item",
      value: "Value",
      description: "Description",
    },
  },
};

export default tables;
