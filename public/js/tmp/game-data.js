const GAME_DATA = [
  {
    level: 0,
    type: 'doubleQuestion',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg',
      inputName: 'question1',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://www.miloserdie.ru/wp-content/uploads/2019/08/derevya-1024x683.jpg',
      inputName: 'question2',
      answer: 'photo',
    },
    ],
  },
  {
    level: 1,
    type: 'singleQuestion',
    task: 'Угадай, фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg',
      inputName: 'question1',
      answer: 'paint',
    }],
  },
  {
    level: 2,
    type: 'tripleQuestion',
    task: 'Найдите рисунок среди изображений',
    options: [{
      alt: 'Option 1',
      src: 'https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-in-autumn-day-outdoor-portrait-of-interested-ginger-female-model-with-cup-of-coffee_197531-11735.jpg',
      answer: 'photo',
    },
    {
      alt: 'Option 3',
      src: 'https://static.wixstatic.com/media/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg/v1/fill/w_304,h_455,al_c,q_80,usm_0.66_1.00_0.01/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg',
      answer: 'photo',
    },
    ],
  },
  {
    level: 3,
    type: 'doubleQuestion',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg',
      inputName: 'question1',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&h=350',
      inputName: 'question2',
      answer: 'photo',
    },
    ],
  },
  {
    level: 4,
    type: 'singleQuestion',
    task: 'Угадай, фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg',
      inputName: 'question1',
      answer: 'paint',
    }],
  },
  {
    level: 5,
    type: 'tripleQuestion',
    task: 'Найдите рисунок среди изображений',
    options: [{
      alt: 'Option 1',
      src: 'https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://atlfoodandwinefestival.com/wp-content/uploads/2015/01/linton-hopkins304xx683-1024-0-0.jpg',
      answer: 'photo',
    },
    {
      alt: 'Option 3',
      src: 'https://static.wixstatic.com/media/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg/v1/fill/w_304,h_455,al_c,q_80,usm_0.66_1.00_0.01/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg',
      answer: 'photo',
    },
    ],
  },
  {
    level: 6,
    type: 'doubleQuestion',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg',
      inputName: 'question1',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&h=350',
      inputName: 'question2',
      answer: 'photo',
    },
    ],
  },
  {
    level: 7,
    type: 'singleQuestion',
    task: 'Угадай, фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://cdn.trendhunterstatic.com/phpthumbnails/270/270140/270140_6_800.jpeg',
      inputName: 'question1',
      answer: 'paint',
    }],
  },
  {
    level: 8,
    type: 'tripleQuestion',
    task: 'Найдите рисунок среди изображений',
    options: [{
      alt: 'Option 1',
      src: 'https://i.pinimg.com/originals/aa/8c/64/aa8c643686154915d49238dc15118eae.jpg',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://atlfoodandwinefestival.com/wp-content/uploads/2015/01/linton-hopkins304xx683-1024-0-0.jpg',
      answer: 'photo',
    },
    {
      alt: 'Option 3',
      src: 'https://static.wixstatic.com/media/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg/v1/fill/w_304,h_455,al_c,q_80,usm_0.66_1.00_0.01/5fd1de_ac3c1b4d264943c58349dea0de28aba3~mv2_d_2777_4165_s_4_2.jpg',
      answer: 'photo',
    },
    ],
  },
  {
    level: 9,
    type: 'doubleQuestion',
    task: 'Угадайте для каждого изображения фото или рисунок?',
    options: [{
      alt: 'Option 1',
      src: 'https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/kangaroo-grazing-graham-gercken.jpg',
      inputName: 'question1',
      answer: 'paint',
    },
    {
      alt: 'Option 2',
      src: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&h=350',
      inputName: 'question2',
      answer: 'photo',
    },
    ],
  },
];

export default GAME_DATA;

//# sourceMappingURL=game-data.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0bXAvZ2FtZS1kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdBTUVfREFUQSA9IFtcbiAge1xuICAgIGxldmVsOiAwLFxuICAgIHR5cGU6ICdkb3VibGVRdWVzdGlvbicsXG4gICAgdGFzazogJ9Cj0LPQsNC00LDQudGC0LUg0LTQu9GPINC60LDQttC00L7Qs9C+INC40LfQvtCx0YDQsNC20LXQvdC40Y8g0YTQvtGC0L4g0LjQu9C4INGA0LjRgdGD0L3QvtC6PycsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIGFsdDogJ09wdGlvbiAxJyxcbiAgICAgIHNyYzogJ2h0dHBzOi8vcmVuZGVyLmZpbmVhcnRhbWVyaWNhLmNvbS9pbWFnZXMvcmVuZGVyZWQvc2VhcmNoL3ByaW50L2ltYWdlcy1tZWRpdW0tNS9rYW5nYXJvby1ncmF6aW5nLWdyYWhhbS1nZXJja2VuLmpwZycsXG4gICAgICBpbnB1dE5hbWU6ICdxdWVzdGlvbjEnLFxuICAgICAgYW5zd2VyOiAncGFpbnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgYWx0OiAnT3B0aW9uIDInLFxuICAgICAgc3JjOiAnaHR0cHM6Ly93d3cubWlsb3NlcmRpZS5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wOC9kZXJldnlhLTEwMjR4NjgzLmpwZycsXG4gICAgICBpbnB1dE5hbWU6ICdxdWVzdGlvbjInLFxuICAgICAgYW5zd2VyOiAncGhvdG8nLFxuICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGxldmVsOiAxLFxuICAgIHR5cGU6ICdzaW5nbGVRdWVzdGlvbicsXG4gICAgdGFzazogJ9Cj0LPQsNC00LDQuSwg0YTQvtGC0L4g0LjQu9C4INGA0LjRgdGD0L3QvtC6PycsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIGFsdDogJ09wdGlvbiAxJyxcbiAgICAgIHNyYzogJ2h0dHBzOi8vY2RuLnRyZW5kaHVudGVyc3RhdGljLmNvbS9waHB0aHVtYm5haWxzLzI3MC8yNzAxNDAvMjcwMTQwXzZfODAwLmpwZWcnLFxuICAgICAgaW5wdXROYW1lOiAncXVlc3Rpb24xJyxcbiAgICAgIGFuc3dlcjogJ3BhaW50JyxcbiAgICB9XSxcbiAgfSxcbiAge1xuICAgIGxldmVsOiAyLFxuICAgIHR5cGU6ICd0cmlwbGVRdWVzdGlvbicsXG4gICAgdGFzazogJ9Cd0LDQudC00LjRgtC1INGA0LjRgdGD0L3QvtC6INGB0YDQtdC00Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjQuScsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIGFsdDogJ09wdGlvbiAxJyxcbiAgICAgIHNyYzogJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9hYS84Yy82NC9hYThjNjQzNjg2MTU0OTE1ZDQ5MjM4ZGMxNTExOGVhZS5qcGcnLFxuICAgICAgYW5zd2VyOiAncGFpbnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgYWx0OiAnT3B0aW9uIDInLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9pbWcuZnJlZXBpay5jb20vZnJlZS1waG90by9nb3JnZW91cy13aGl0ZS1naXJsLXdpdGgtbG9uZy13YXZ5LWhhaXItY2hpbGxpbmctaW4tYXV0dW1uLWRheS1vdXRkb29yLXBvcnRyYWl0LW9mLWludGVyZXN0ZWQtZ2luZ2VyLWZlbWFsZS1tb2RlbC13aXRoLWN1cC1vZi1jb2ZmZWVfMTk3NTMxLTExNzM1LmpwZycsXG4gICAgICBhbnN3ZXI6ICdwaG90bycsXG4gICAgfSxcbiAgICB7XG4gICAgICBhbHQ6ICdPcHRpb24gMycsXG4gICAgICBzcmM6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzVmZDFkZV9hYzNjMWI0ZDI2NDk0M2M1ODM0OWRlYTBkZTI4YWJhM35tdjJfZF8yNzc3XzQxNjVfc180XzIuanBnL3YxL2ZpbGwvd18zMDQsaF80NTUsYWxfYyxxXzgwLHVzbV8wLjY2XzEuMDBfMC4wMS81ZmQxZGVfYWMzYzFiNGQyNjQ5NDNjNTgzNDlkZWEwZGUyOGFiYTN+bXYyX2RfMjc3N180MTY1X3NfNF8yLmpwZycsXG4gICAgICBhbnN3ZXI6ICdwaG90bycsXG4gICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbGV2ZWw6IDMsXG4gICAgdHlwZTogJ2RvdWJsZVF1ZXN0aW9uJyxcbiAgICB0YXNrOiAn0KPQs9Cw0LTQsNC50YLQtSDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDRhNC+0YLQviDQuNC70Lgg0YDQuNGB0YPQvdC+0Lo/JyxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgYWx0OiAnT3B0aW9uIDEnLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9yZW5kZXIuZmluZWFydGFtZXJpY2EuY29tL2ltYWdlcy9yZW5kZXJlZC9zZWFyY2gvcHJpbnQvaW1hZ2VzLW1lZGl1bS01L2thbmdhcm9vLWdyYXppbmctZ3JhaGFtLWdlcmNrZW4uanBnJyxcbiAgICAgIGlucHV0TmFtZTogJ3F1ZXN0aW9uMScsXG4gICAgICBhbnN3ZXI6ICdwYWludCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBhbHQ6ICdPcHRpb24gMicsXG4gICAgICBzcmM6ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81Njg3NS90cmVlLWRhd24tbmF0dXJlLWJ1Y292aW5hLTU2ODc1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZoPTM1MCcsXG4gICAgICBpbnB1dE5hbWU6ICdxdWVzdGlvbjInLFxuICAgICAgYW5zd2VyOiAncGhvdG8nLFxuICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGxldmVsOiA0LFxuICAgIHR5cGU6ICdzaW5nbGVRdWVzdGlvbicsXG4gICAgdGFzazogJ9Cj0LPQsNC00LDQuSwg0YTQvtGC0L4g0LjQu9C4INGA0LjRgdGD0L3QvtC6PycsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIGFsdDogJ09wdGlvbiAxJyxcbiAgICAgIHNyYzogJ2h0dHBzOi8vY2RuLnRyZW5kaHVudGVyc3RhdGljLmNvbS9waHB0aHVtYm5haWxzLzI3MC8yNzAxNDAvMjcwMTQwXzZfODAwLmpwZWcnLFxuICAgICAgaW5wdXROYW1lOiAncXVlc3Rpb24xJyxcbiAgICAgIGFuc3dlcjogJ3BhaW50JyxcbiAgICB9XSxcbiAgfSxcbiAge1xuICAgIGxldmVsOiA1LFxuICAgIHR5cGU6ICd0cmlwbGVRdWVzdGlvbicsXG4gICAgdGFzazogJ9Cd0LDQudC00LjRgtC1INGA0LjRgdGD0L3QvtC6INGB0YDQtdC00Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjQuScsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIGFsdDogJ09wdGlvbiAxJyxcbiAgICAgIHNyYzogJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9hYS84Yy82NC9hYThjNjQzNjg2MTU0OTE1ZDQ5MjM4ZGMxNTExOGVhZS5qcGcnLFxuICAgICAgYW5zd2VyOiAncGFpbnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgYWx0OiAnT3B0aW9uIDInLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9hdGxmb29kYW5kd2luZWZlc3RpdmFsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS9saW50b24taG9wa2luczMwNHh4NjgzLTEwMjQtMC0wLmpwZycsXG4gICAgICBhbnN3ZXI6ICdwaG90bycsXG4gICAgfSxcbiAgICB7XG4gICAgICBhbHQ6ICdPcHRpb24gMycsXG4gICAgICBzcmM6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzVmZDFkZV9hYzNjMWI0ZDI2NDk0M2M1ODM0OWRlYTBkZTI4YWJhM35tdjJfZF8yNzc3XzQxNjVfc180XzIuanBnL3YxL2ZpbGwvd18zMDQsaF80NTUsYWxfYyxxXzgwLHVzbV8wLjY2XzEuMDBfMC4wMS81ZmQxZGVfYWMzYzFiNGQyNjQ5NDNjNTgzNDlkZWEwZGUyOGFiYTN+bXYyX2RfMjc3N180MTY1X3NfNF8yLmpwZycsXG4gICAgICBhbnN3ZXI6ICdwaG90bycsXG4gICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbGV2ZWw6IDYsXG4gICAgdHlwZTogJ2RvdWJsZVF1ZXN0aW9uJyxcbiAgICB0YXNrOiAn0KPQs9Cw0LTQsNC50YLQtSDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDRhNC+0YLQviDQuNC70Lgg0YDQuNGB0YPQvdC+0Lo/JyxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgYWx0OiAnT3B0aW9uIDEnLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9yZW5kZXIuZmluZWFydGFtZXJpY2EuY29tL2ltYWdlcy9yZW5kZXJlZC9zZWFyY2gvcHJpbnQvaW1hZ2VzLW1lZGl1bS01L2thbmdhcm9vLWdyYXppbmctZ3JhaGFtLWdlcmNrZW4uanBnJyxcbiAgICAgIGlucHV0TmFtZTogJ3F1ZXN0aW9uMScsXG4gICAgICBhbnN3ZXI6ICdwYWludCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBhbHQ6ICdPcHRpb24gMicsXG4gICAgICBzcmM6ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81Njg3NS90cmVlLWRhd24tbmF0dXJlLWJ1Y292aW5hLTU2ODc1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZoPTM1MCcsXG4gICAgICBpbnB1dE5hbWU6ICdxdWVzdGlvbjInLFxuICAgICAgYW5zd2VyOiAncGhvdG8nLFxuICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGxldmVsOiA3LFxuICAgIHR5cGU6ICdzaW5nbGVRdWVzdGlvbicsXG4gICAgdGFzazogJ9Cj0LPQsNC00LDQuSwg0YTQvtGC0L4g0LjQu9C4INGA0LjRgdGD0L3QvtC6PycsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIGFsdDogJ09wdGlvbiAxJyxcbiAgICAgIHNyYzogJ2h0dHBzOi8vY2RuLnRyZW5kaHVudGVyc3RhdGljLmNvbS9waHB0aHVtYm5haWxzLzI3MC8yNzAxNDAvMjcwMTQwXzZfODAwLmpwZWcnLFxuICAgICAgaW5wdXROYW1lOiAncXVlc3Rpb24xJyxcbiAgICAgIGFuc3dlcjogJ3BhaW50JyxcbiAgICB9XSxcbiAgfSxcbiAge1xuICAgIGxldmVsOiA4LFxuICAgIHR5cGU6ICd0cmlwbGVRdWVzdGlvbicsXG4gICAgdGFzazogJ9Cd0LDQudC00LjRgtC1INGA0LjRgdGD0L3QvtC6INGB0YDQtdC00Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjQuScsXG4gICAgb3B0aW9uczogW3tcbiAgICAgIGFsdDogJ09wdGlvbiAxJyxcbiAgICAgIHNyYzogJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9hYS84Yy82NC9hYThjNjQzNjg2MTU0OTE1ZDQ5MjM4ZGMxNTExOGVhZS5qcGcnLFxuICAgICAgYW5zd2VyOiAncGFpbnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgYWx0OiAnT3B0aW9uIDInLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9hdGxmb29kYW5kd2luZWZlc3RpdmFsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS9saW50b24taG9wa2luczMwNHh4NjgzLTEwMjQtMC0wLmpwZycsXG4gICAgICBhbnN3ZXI6ICdwaG90bycsXG4gICAgfSxcbiAgICB7XG4gICAgICBhbHQ6ICdPcHRpb24gMycsXG4gICAgICBzcmM6ICdodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhLzVmZDFkZV9hYzNjMWI0ZDI2NDk0M2M1ODM0OWRlYTBkZTI4YWJhM35tdjJfZF8yNzc3XzQxNjVfc180XzIuanBnL3YxL2ZpbGwvd18zMDQsaF80NTUsYWxfYyxxXzgwLHVzbV8wLjY2XzEuMDBfMC4wMS81ZmQxZGVfYWMzYzFiNGQyNjQ5NDNjNTgzNDlkZWEwZGUyOGFiYTN+bXYyX2RfMjc3N180MTY1X3NfNF8yLmpwZycsXG4gICAgICBhbnN3ZXI6ICdwaG90bycsXG4gICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbGV2ZWw6IDksXG4gICAgdHlwZTogJ2RvdWJsZVF1ZXN0aW9uJyxcbiAgICB0YXNrOiAn0KPQs9Cw0LTQsNC50YLQtSDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQt9C+0LHRgNCw0LbQtdC90LjRjyDRhNC+0YLQviDQuNC70Lgg0YDQuNGB0YPQvdC+0Lo/JyxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgYWx0OiAnT3B0aW9uIDEnLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9yZW5kZXIuZmluZWFydGFtZXJpY2EuY29tL2ltYWdlcy9yZW5kZXJlZC9zZWFyY2gvcHJpbnQvaW1hZ2VzLW1lZGl1bS01L2thbmdhcm9vLWdyYXppbmctZ3JhaGFtLWdlcmNrZW4uanBnJyxcbiAgICAgIGlucHV0TmFtZTogJ3F1ZXN0aW9uMScsXG4gICAgICBhbnN3ZXI6ICdwYWludCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBhbHQ6ICdPcHRpb24gMicsXG4gICAgICBzcmM6ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81Njg3NS90cmVlLWRhd24tbmF0dXJlLWJ1Y292aW5hLTU2ODc1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZoPTM1MCcsXG4gICAgICBpbnB1dE5hbWU6ICdxdWVzdGlvbjInLFxuICAgICAgYW5zd2VyOiAncGhvdG8nLFxuICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEdBTUVfREFUQTtcbiJdLCJmaWxlIjoiZ2FtZS1kYXRhLmpzIn0=
