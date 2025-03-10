//slider

// let data = [
//     {
//         id: 1,
//         title:'dried fruit',
//         imageUrl: 'https://images.bolt.eu/store/2022/2022-07-20/289e90b8-fa1c-4fb9-b90a-6758a016d650.jpeg',

//     },
//     {
//         id: 2,
//         title:'sweetpaste',
//         imageUrl: 'https://thumbs.dreamstime.com/z/traditional-georgian-sweets-called-churchkhela-churchela-candle-shaped-grape-juice-candy-nuts-inside-traditional-georgian-161801425.jpg',

//     },
//     {
//         id: 3,
//         title:'churchkhela',
//         imageUrl: 'https://images.bolt.eu/store/2022/2022-07-20/65c4b4ec-6829-4d24-8c98-9171219e8ab8.jpeg',

//     }

// ];

// let sliderContainer = document.getElementById('slider')
// let arrowLeft =document.getElementById('arrow-left')
// let arrowRight =document.getElementById('arrow-right')
// let sliderIndex = 0

// function createImg (item){
//     sliderContainer.style.backgroundImage = `url(${item.imageUrl})`
//     sliderContainer.style.backgroundRepeat= 'no-repeat'
//     sliderContainer.style.backgroundSize= 'cover'
//  }

// function createH2tag(item){
//     let h2tag = document.createElement('h2')
//     h2tag.innerText =item.title
//     h2tag.classList.add('slider-title')
//     return h2tag

// }

// function setSlider(){
//     createImg(data[sliderIndex])
//     let title= createH2tag(data[sliderIndex])

//     sliderContainer.appendChild(title)

// }

// function arrowLeft(){
//     if(sliderIndex === 0){
//         sliderIndex = data.length-1
//     }else{
//         sliderIndex --
//     }
//     setSlider()

// }

// function arrowRight(){
//     if(sliderIndex === data.length-1){
//         sliderIndex = 0
//     }else{
//         sliderIndex ++
//     }
//     setSlider()
// }

// setSlider();


// აქედან
// 


let data = [
    {
      id: 1,
      title: "",
      imageUrl:
        "https://i.postimg.cc/5tFL6hsB/319737981-843157036737628-5661099892740529429-n.jpg",
    },
    {
      id: 2,
      title: "",
      imageUrl:
        "https://i.postimg.cc/DZkssxNt/319839323-5853733301340986-5462535345078628820-n.jpg",
    },
    {
      id: 3,
      title: "",
      imageUrl:
        "https://i.postimg.cc/Y9Y6y5gr/319649062-868395207634575-2904419646324376850-n.jpg",
    },
    {
      id: 4,
      title: "",
      imageUrl:
        "https://i.postimg.cc/Cx9fTvwz/310309312-5963921410324778-1537554563596627527-n.jpg",
    },
  ];
  
  let arrowLeft = document.getElementById('arrow-left');
  let arrowRight = document.getElementById('arrow-right');
  let sliderContainer = document.getElementById('slider');
  let dotsList = document.getElementsByClassName('dot');
  
  let sliderIndex = 0;
  
  function createATag(item) {
      let aTag = document.createElement('a');
      aTag.setAttribute('href', item.url);
      aTag.classList.add('slider-a');
      return aTag;
  }
  
  function createImgTag(item) {
      sliderContainer.style.backgroundImage = 'url(' + item.imageUrl + ')';
      sliderContainer.style.backgroundRepeat = "no-repeat";
      sliderContainer.style.backgroundSize = "cover";
  }
  
  function createH2Tag(item) {
      let h2Tag = document.createElement('h2');
      h2Tag.classList.add('slider-title');
      h2Tag.innerText = item.title;
      return h2Tag;
  }
  
  function createDots() {
      let dots = document.createElement('div');
      dots.classList.add('dots');
  
      data.forEach((element) => {
          let dot = document.createElement('div');
          dot.classList.add('dot');
          dot.setAttribute('data-id', element.id - 1);
  
          dot.onclick = () => {
              let id = event.target.getAttribute('data-id');
              sliderIndex = id;
              setSlider();
          };
          dots.appendChild(dot);
      });
      return dots;
  }
  
  function setSlider() {
      sliderContainer.innerText = '';
      createImgTag(data[sliderIndex]);
      let title = createH2Tag(data[sliderIndex]);
      let dots = createDots();
      sliderContainer.appendChild(title);
      sliderContainer.appendChild(dots);
      currentDotActive();
  }
  
  function currentDotActive() {
      Array.from(dotsList).forEach(dot => dot.classList.remove('active'));
      dotsList[sliderIndex].classList.add('active');
  }
  
  function arrowLeftClick() {
      if (sliderIndex == 0) {
          sliderIndex = data.length;
      }
      sliderIndex--;
      setSlider();
  }
  
  function arrowRightClick() {
      if (sliderIndex == data.length - 1) {
          sliderIndex = -1;
      }
      sliderIndex++;
      setSlider();
  }
  
  // Event Listeners for arrow clicks
  arrowLeft.addEventListener('click', arrowLeftClick);
  arrowRight.addEventListener('click', arrowRightClick);
  
  // Keyboard navigation (left and right arrow keys)
  document.addEventListener('keydown', function (event) {
      if (event.keyCode == 37) {
          arrowLeftClick();
      } else if (event.keyCode == 39) {
          arrowRightClick();
      }
  });
  
  // Auto slide every 4 seconds
  setInterval(() => {
      arrowRightClick();
  }, 4000);
  
  setSlider();
  