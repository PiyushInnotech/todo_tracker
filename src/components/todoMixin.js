export const todoMixin = {
  data() {
    return {
      todoList: [
        {
          name: "Create a home Page",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 0,
          isComplete: true,
          showDes: false,
        },
        {
          name: "Make a form on vue",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 1,
          isComplete: false,
          showDes: false,
        },
        {
          name: "Make User signin/login page",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 2,
          isComplete: false,
          showDes: false,
        },
        {
          name: "Create the footer for all pages ",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: 3,
          isComplete: true,
          showDes: false,
        },
      ],
      newTodo: {
        name: '',
        description: '',
        isComplete: false,
        showDes: false,
        id: ''
      },
    }
  }
}