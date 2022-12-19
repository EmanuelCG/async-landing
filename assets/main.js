const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC7XQcDCPNGjNxy9HeFkqMsg&part=snippet%2Cid&order=date&maxResults=9';
const API_2 = 'https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UC7XQcDCPNGjNxy9HeFkqMsg';
const content = null || document.getElementById('content');
const imgHome = null || document.getElementById('imgChanel');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9a9ac5bc98msheec72f63529203dp1f0459jsncca5f672da23',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// Función que se ejecuta automaticamente
(async () => {
    try {
        videos = await fetchData(API);
        let view = `
    ${videos.items.map(video => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
  `).slice(0, 4).join('')}
`;

        dataChanel = await fetchData(API_2);
let chanelFront = `${dataChanel.items.map(imgChanel => 
    `
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
    src="${imgChanel.snippet.thumbnails.high.url}" alt="">
    `
    )}
`;
        content.innerHTML = view;
        imgHome.innerHTML = chanelFront;

    } catch (error) {
        console.log(error);
    }

})();