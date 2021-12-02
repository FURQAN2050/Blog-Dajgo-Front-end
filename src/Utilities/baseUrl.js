let CONSTANTS = {
  BASE_URL: 'http://localhost:8000',
  API_CONSTANTS: {
    AUTHENTICATION: {
      LOGIN: '/authentication/login',
      SIGNUP: '/authentication/register',
    },
    BLOGS: {
      GET_ALL_BLOGS: '/blog/api/getBlogs',
      POST_BLOG: '/blog/api/createBlog',
      GET_SINGLE_BLOG: '/blog/api/getBlog',
      LIKES: '/blog/api/likeBlog'
    },
    CATEGORIES: {
      GET_ALL_CATEGORIES: '/blogcategory/api/getCategories',
    },
    COMMENTS: {
      GET_POST_COMMENTS: '/blogcomment/api/GetPostComment',
      POST_POSTCOMMENTS: '/blogcomment/api/addPostComment'
    }
  },
};

export default CONSTANTS;
