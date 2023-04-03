const regexPattern = {
  username: {
    regex: /^[a-zA-Z0-9_]{6,20}$/,
    message: "Username can only contain letters, numbers of 6 - 20 characters"
  }
}

export default regexPattern;
