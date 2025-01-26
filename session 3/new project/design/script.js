const articles = [
      'The Rise of Artificial Intelligence', 'A Journey Through Time', 'An Overview of Quantum Computing',
      'The Future of Space Exploration', 'Exploring the Ocean Depths', 'A New Era in Medicine', 'The Wonders of the Human Brain'
    ];

    // Function to strip 'a', 'an', 'the' from the beginning of a string
    function stripArticle(articleName) {
      return articleName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort articles alphabetically, ignoring articles
    const sortedArticles = articles
      .map(article => ({ original: article, stripped: stripArticle(article) })) // Create an array of objects with both original and stripped names
      .sort((a, b) => a.stripped.localeCompare(b.stripped)); // Sort by the stripped name

    // Populate the list with original names
    const articleList = document.getElementById('band');
    sortedArticles.forEach(article => {
      const li = document.createElement('li');
      li.textContent = article.original; // Use the original name for display
      articleList.appendChild(li);
    });