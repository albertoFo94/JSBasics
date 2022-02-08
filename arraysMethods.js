var articles = [
  {
    name: "Bicicle",
    cost: 3000
  },
  {
    name: "TV",
    cost: 2500
  },
  {
    name: "Book",
    cost: 320
  },
  {
    name: "Cellphone",
    cost: 10000
  },
  {
    name: "Laptop",
    cost: 20000
  },
  {
    name: "Keyboard",
    cost: 17000
  },
  {
    name: "Headphones",
    cost: 17000
  }
];

var filteredArticles = articles.filter(function(article) {
  return article.cost <= 500;
});

var nameArticles = articles.map(function(article) {
  return article.name
});

var findArticle = articles.find(function(article) {
  return article.name === "Laptop";
});

articles.forEach(function(article) {
  console.log(article.name)
});

var cheapArticles = articles.some(function(article) {
  return article.cost <= 700;
});