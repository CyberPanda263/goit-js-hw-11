export function search(q) {
    const options = new URLSearchParams({
        key: "44067044-e8359f631c20f41f339c4060c",
        q: q,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

  return fetchSearch(options)
};

function fetchSearch(options) {
    return fetch(`https://pixabay.com/api?${options}`)
    .then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }