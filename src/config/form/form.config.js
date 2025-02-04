const forms = {
  login: {
    email: {
      type: "text",
      label: "Email",
      placeholder: "Enter your email",
      secure: false,
      advanced: {
        required: true,
      },
    },
    password: {
      type: "text",
      label: "Password",
      placeholder: "Enter your password",
      secure: true,
      advanced: {
        required: true,
      },
    },
  },
  register: {
    firstName: {
      type: "text",
      label: "First Name",
      placeholder: "Enter your firstname",
      secure: false,
      advanced: {
        required: true,
      },
    },
    lastName: {
      type: "text",
      label: "Last Name",
      placeholder: "Enter your lastname",
      secure: false,
      advanced: {
        required: true,
      },
    },
    email: {
      type: "text",
      label: "Email",
      placeholder: "Enter your email",
      secure: false,
      advanced: {
        required: true,
      },
    },
    password: {
      type: "text",
      label: "Password",
      placeholder: "Choose a strong password",
      secure: true,
      advanced: {
        required: true,
      },
    },
    //   role: {
    //     type: "selectData",
    //     label: "نقش کاربر",
    //     placeholder: "نقش کاربر را وارد کنید",
    //     secure: false,
    //     advanced: {
    //       required: true,
    //     },
    //   },
  },
  userProfile: {
    firstName: {
      type: "text",
      label: "Firstname",
      placeholder: "Enter user firstname",
      secure: false,
      advanced: {
        required: true,
      },
    },
    lastName: {
      type: "text",
      label: "Lastname",
      placeholder: "Enter user lastname",
      secure: false,
      advanced: {
        required: true,
      },
    },
    email: {
      type: "text",
      label: "Email",
      placeholder: "Enter user email",
      secure: false,
      advanced: {
        required: true,
      },
    },
    role: {
      type: "selectData",
      label: "Role",
      placeholder: "Enter user role",
      secure: false,
      advanced: {
        required: true,
      },
    },
  },
  userProfileMe: {
    firstName: {
      type: "text",
      label: "Firstname",
      placeholder: "Enter user firstname",
      secure: false,
      advanced: {
        required: true,
      },
    },
    lastName: {
      type: "text",
      label: "Lastname",
      placeholder: "Enter user lastname",
      secure: false,
      advanced: {
        required: true,
      },
    },
    email: {
      type: "text",
      label: "Email",
      placeholder: "Enter user email",
      secure: false,
      advanced: {
        required: true,
      },
    },
  },
  changePassword: {
    newPassword: {
      type: "text",
      label: "New password",
      placeholder: "Enter your new password",
      secure: true,
      advanced: {
        required: true,
      },
    },
    confirmPassword: {
      type: "text",
      label: "Confirm password",
      placeholder: "Enter your confirm password",
      secure: true,
      advanced: {
        required: true,
      },
    },
  },
  permission: {
    label: {
      type: "text",
      label: "Name",
      placeholder: "Enter permission name",
      secure: false,
      advanced: {
        required: true,
      },
    },
    value: {
      type: "text",
      label: "Identifier",
      placeholder: "Enter identifier name",
      secure: false,
      advanced: {
        required: true,
      },
    },
  },
  role: {
    label: {
      type: "text",
      label: "Name",
      placeholder: "Enter role name",
      secure: false,
      advanced: {
        required: true,
      },
    },
    value: {
      type: "text",
      label: "Identifier",
      placeholder: "Enter identifier name",
      secure: false,
      advanced: {
        required: true,
      },
    },
    permissions: {
      type: "checkData",
      label: "Permissions",
      placeholder: "Choose permissions",
      secure: false,
      advanced: {
        required: true,
      },
    },
  },
  server: {
    alias: {
      type: "text",
      label: "Name",
      placeholder: "Enter database name",
      secure: false,
      advanced: {
        required: true,
      },
    },
    host: {
      type: "text",
      label: "Host",
      placeholder: "Enter database host",
      secure: false,
      advanced: {
        required: true,
      },
    },
    port: {
      type: "text",
      label: "PORT",
      placeholder: "Enter database port",
      secure: false,
      advanced: {
        required: true,
      },
    },
    username: {
      type: "text",
      label: "Username",
      placeholder: "Enter database username",
      secure: false,
      advanced: {
        required: true,
      },
    },
    password: {
      type: "text",
      label: "Password",
      placeholder: "Enter database password",
      secure: false,
      advanced: {
        required: true,
      },
    },
    database: {
      type: "text",
      label: "Database",
      placeholder: "Enter database database",
      secure: false,
      advanced: {
        required: true,
      },
    },
    connectionString: {
      type: "text",
      label: "Connection String",
      placeholder: "Enter database connection string",
      secure: false,
      advanced: {
        required: false,
      },
    },
  },
};

export default forms;
