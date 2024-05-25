export function search(q) {
    const options = {
        key: "44067044-e8359f631c20f41f339c4060c",
        q: q,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    }
    fetchSearch()
    .then((images) => renderUsers(images))
    .catch((error) => console.log(error));
}

function fetchSearch() {
    return fetch("https://pixabay.com/api/").then(
      (response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      }
    );
  }