export const posts = (data) => {
     const slidePost = [];
     for ( let i = 0; i <= 3; i++ ) {
    slidePost.push(data[Math.floor(Math.random() * data.length)]);
  }
  return slidePost;
};
