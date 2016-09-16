var inquirer = require('inquirer')
module.exports = {
  intro: [
    {
      type: 'list',
      name: 'intro',
      message: 'What do you want to do?',
      choices: [

        new inquirer.Separator('Module Creation:'),
        'Create Schema',
        'Create Backend Module',
        new inquirer.Separator('User Management:'),
        // 'Create User',
        'Change Password',
        'Change User Roles',
        'View User',
        'Exit'
      ]
    }
  ],
  roles: [
    {
      type: 'list',
      name: 'role',
      message: 'What do you want to do with user roles?',
      choices: [
        'Add Role',
        'Remove Role'
      ]
    }
  ],
  user: [
    {
      type: 'input',
      name: 'email',
      message: 'Email of the User',
      default: function () { return 'testing@test.com' }
    }
  ],
  module: [
    {
      type: 'input',
      name: 'module',
      message: 'Name of the Module',
      default: function () { return 'example' }
    }
  ],
  schemaOutput: [],
  schemaPreQuestion: [
    {
      type: 'confirm',
      name: 'askAgain',
      message: 'Do you want to custom your schema (just hit enter for YES)?',
      default: true
    }
  ],
  schema: [
    {
      type: 'input',
      name: 'field',
      message: 'Name of the field',
      default: function () { return 'Example' }
    },
    {
      type: 'list',
      name: 'type',
      message: "What's the type",
      choices: [
        'String',
        'Number',
        'Date',
        'Buffer',
        'Boolean',
        'Mixed',
        'Objectid',
        'Array'
      ],
      default: function () { return 'String' }
    },
    {
      type: 'input',
      name: 'default',
      message: "What's the default value(just hit enter for NULL)",
      default: function () { return null }
    },
    {
      type: 'confirm',
      name: 'askAgain',
      message: 'Want to add another field (just hit enter for YES)?',
      default: true
    }
  ],
  updatePasswords: [
    {
      type: 'password',
      name: 'password',
      message: 'New Password of the User'
    }
  ],
  updateRoles: [
    {
      type: 'input',
      name: 'role',
      message: 'Name of the Role'
    }
  ]
}
