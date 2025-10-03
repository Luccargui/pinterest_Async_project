 export let filteredCards = [""];

export const filtrarCards = (inputValue, data) => {
  filteredCards = []; 

  for (const element of data) {
    const firstName = element.user.first_name || "";
    const lastName = element.user.last_name || "";
    const name = element.user.name || "";
    const userName = element.user.username || "";
    const location = element.user.location || "";
    const instagramUsername = element.user.instagram_username || "";
    const altDescription = element.alt_description || "";
    const description = element.description || "";

    const arrayTopic = Object.keys(element.topic_submissions || {});

    if (
      firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
      lastName.toLowerCase().includes(inputValue.toLowerCase()) ||
      name.toLowerCase().includes(inputValue.toLowerCase()) ||
      userName.toLowerCase().includes(inputValue.toLowerCase()) ||
      location.toLowerCase().includes(inputValue.toLowerCase()) ||
      instagramUsername.toLowerCase().includes(inputValue.toLowerCase()) ||
      altDescription.toLowerCase().includes(inputValue.toLowerCase()) ||
      description.toLowerCase().includes(inputValue.toLowerCase()) ||
      arrayTopic.some(topic => topic.toLowerCase().includes(inputValue.toLowerCase()))
    ) {
      filteredCards.push(element);
    }
  }

  return filteredCards;
};
