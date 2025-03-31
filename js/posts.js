// Массив с данными постов
const postsData = [
    {
      imageSrc: "./img/posts/post-img01.jpeg",
      title: "Красивая Италия, какая она в реальности?",
      description: "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.",
      date: "01/04/2023",
      articleLink: "#!"
    },
    {
      imageSrc: "./img/posts/post-img02.jpeg",
      title: "Долой сомнения! Весь мир открыт для вас!",
      description: "Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... ",
      date: "15/04/2023",
      articleLink: "#!"
    },
    {
        imageSrc: "./img/posts/post-img03.jpeg",
        title: "Как подготовиться к путешествию в одиночку? ",
        description: "Для современного мира базовый вектор развития предполагает.",
        date: "18/04/2023",
        articleLink: "#!"
      },
      {
        imageSrc: "./img/posts/post-img04.jpeg",
        title: "Индия ... летим?",
        description: "Для современного мира базовый.",
        date: "27/04/2023",
        articleLink: "#!"
      }
    // Добавляйте новые посты здесь
  ];
  
  // Функция для создания HTML поста
  function createPostElement(post) {
    return `
      <div class="block-post">
        <div class="block-post-media">
          <img src="${post.imageSrc}" alt="post" class="block-post-media-img">
        </div>
        <div class="block-post-text">
          <a href="#!" class="block-post-title">${post.title}</a>
          <p class="block-post-description">${post.description}</p>
          <div class="block-post-text-footer">
            <p class="block-post-text-footer-data">${post.date}</p>
            <a href="${post.articleLink}" class="block-post-text-footer-button">читать статью</a>
          </div>
        </div>
      </div>
    `;
  }
  
  // Функция для рендеринга всех постов
  function renderPosts() {
    const postsContainer = document.querySelector('.block-posts'); // Укажите ваш контейнер
    if (postsContainer) {
      postsContainer.innerHTML = postsData.map(post => createPostElement(post)).join('');
    }
  }
  
  // Запуск при загрузке страницы
  document.addEventListener('DOMContentLoaded', renderPosts);