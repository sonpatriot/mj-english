/* MJ선생님 영어 복습 — 단원 데이터
   새 단원을 추가할 때는 아래 형식으로 MJ_UNITS.push({...}) 블록을 하나 더 붙이면 됩니다.
   img 경로는 이 HTML 파일 기준 상대경로입니다. */
window.MJ_UNITS = window.MJ_UNITS || [];

MJ_UNITS.push({
  id: "almost-spring",
  title: "Almost Spring",
  titleKo: "봄이 거의 왔어요",
  cover: "mjdata/img/almost-spring/cover.jpg",
  color: "#4DA8FF",
  pages: [
    { img: "mjdata/img/almost-spring/p2.jpg", text: "Sun is shining. It is almost spring." },
    { img: "mjdata/img/almost-spring/p3.jpg", text: "Snow is melting. It is almost spring." },
    { img: "mjdata/img/almost-spring/p4.jpg", text: "Birds are singing. It is almost spring." },
    { img: "mjdata/img/almost-spring/p5.jpg", text: "Flowers are budding. It is almost spring." },
    { img: "mjdata/img/almost-spring/p6.jpg", text: "Wind is blowing. It is almost spring." },
    { img: "mjdata/img/almost-spring/p7.jpg", text: "Chicks are peeping. It is almost spring." },
    { img: "mjdata/img/almost-spring/p8.jpg", text: "Spring is here!" }
  ],
  words: [
    { word: "sun",    meaning: "해",               sentence: "Sun is shining.",       img: "mjdata/img/almost-spring/p2.jpg" },
    { word: "shine",  meaning: "빛나다",           sentence: "Sun is shining.",       img: "mjdata/img/almost-spring/p2.jpg" },
    { word: "it",     meaning: "그것 (날씨·계절을 말할 때)", sentence: "It is almost spring.", img: "mjdata/img/almost-spring/p2.jpg" },
    { word: "almost", meaning: "거의",             sentence: "It is almost spring.",  img: "mjdata/img/almost-spring/p3.jpg" },
    { word: "snow",   meaning: "눈",               sentence: "Snow is melting.",      img: "mjdata/img/almost-spring/p3.jpg" },
    { word: "melt",   meaning: "녹다",             sentence: "Snow is melting.",      img: "mjdata/img/almost-spring/p3.jpg" },
    { word: "bird",   meaning: "새",               sentence: "Birds are singing.",    img: "mjdata/img/almost-spring/p4.jpg" },
    { word: "sing",   meaning: "노래하다",         sentence: "Birds are singing.",    img: "mjdata/img/almost-spring/p4.jpg" },
    { word: "flower", meaning: "꽃",               sentence: "Flowers are budding.",  img: "mjdata/img/almost-spring/p5.jpg" },
    { word: "bud",    meaning: "꽃봉오리가 맺히다", sentence: "Flowers are budding.", img: "mjdata/img/almost-spring/p5.jpg" },
    { word: "wind",   meaning: "바람",             sentence: "Wind is blowing.",      img: "mjdata/img/almost-spring/p6.jpg" },
    { word: "blow",   meaning: "(바람이) 불다",    sentence: "Wind is blowing.",      img: "mjdata/img/almost-spring/p6.jpg" },
    { word: "chick",  meaning: "병아리",           sentence: "Chicks are peeping.",   img: "mjdata/img/almost-spring/p7.jpg" },
    { word: "peep",   meaning: "삐약삐약 울다",    sentence: "Chicks are peeping.",   img: "mjdata/img/almost-spring/p7.jpg" },
    { word: "spring", meaning: "봄",               sentence: "Spring is here!",       img: "mjdata/img/almost-spring/p8.jpg" },
    { word: "here",   meaning: "여기",             sentence: "Spring is here!",       img: "mjdata/img/almost-spring/p8.jpg" }
  ]
});

MJ_UNITS.push({
  id: "birthday-surprise",
  title: "Birthday Surprise",
  titleKo: "깜짝 생일 선물",
  cover: "mjdata/img/birthday-surprise/cover.jpg",
  color: "#FF6FA5",
  pages: [
    { img: "mjdata/img/birthday-surprise/p2.jpg", text: "I have paper." },
    { img: "mjdata/img/birthday-surprise/p3.jpg", text: "I have scissors." },
    { img: "mjdata/img/birthday-surprise/p4.jpg", text: "I have ribbon." },
    { img: "mjdata/img/birthday-surprise/p5.jpg", text: "I have glue." },
    { img: "mjdata/img/birthday-surprise/p6.jpg", text: "I have stickers." },
    { img: "mjdata/img/birthday-surprise/p7.jpg", text: "I have crayons." },
    { img: "mjdata/img/birthday-surprise/p8.jpg", text: "I have a birthday card for you!" }
  ],
  words: [
    { word: "I",        meaning: "나",              sentence: "I have paper.",     img: "mjdata/img/birthday-surprise/p2.jpg" },
    { word: "have",     meaning: "가지고 있다",     sentence: "I have paper.",     img: "mjdata/img/birthday-surprise/p2.jpg" },
    { word: "paper",    meaning: "종이",            sentence: "I have paper.",     img: "mjdata/img/birthday-surprise/p2.jpg" },
    { word: "scissors", meaning: "가위",            sentence: "I have scissors.",  img: "mjdata/img/birthday-surprise/p3.jpg" },
    { word: "ribbon",   meaning: "리본",            sentence: "I have ribbon.",    img: "mjdata/img/birthday-surprise/p4.jpg" },
    { word: "glue",     meaning: "풀",              sentence: "I have glue.",      img: "mjdata/img/birthday-surprise/p5.jpg" },
    { word: "sticker",  meaning: "스티커",          sentence: "I have stickers.",  img: "mjdata/img/birthday-surprise/p6.jpg" },
    { word: "crayon",   meaning: "크레용",          sentence: "I have crayons.",   img: "mjdata/img/birthday-surprise/p7.jpg" },
    { word: "birthday", meaning: "생일",            sentence: "I have a birthday card for you!", img: "mjdata/img/birthday-surprise/p8.jpg" },
    { word: "card",     meaning: "카드",            sentence: "I have a birthday card for you!", img: "mjdata/img/birthday-surprise/p8.jpg" },
    { word: "for",      meaning: "~을 위해, ~에게 주려고", sentence: "I have a birthday card for you!", img: "mjdata/img/birthday-surprise/p8.jpg" },
    { word: "you",      meaning: "너",              sentence: "I have a birthday card for you!", img: "mjdata/img/birthday-surprise/p8.jpg" }
  ]
});

MJ_UNITS.push({
  id: "bubbles",
  title: "Bubbles!",
  titleKo: "보글보글 거품",
  cover: "mjdata/img/bubbles/cover.jpg",
  color: "#2BB673",
  pages: [
    { img: "mjdata/img/bubbles/p2.jpg", text: "Bubbles at the beach." },
    { img: "mjdata/img/bubbles/p3.jpg", text: "Bubbles in the bath." },
    { img: "mjdata/img/bubbles/p4.jpg", text: "Bubbles in the sink." },
    { img: "mjdata/img/bubbles/p5.jpg", text: "Bubbles in my drink." },
    { img: "mjdata/img/bubbles/p6.jpg", text: "Bubbles in the clothes." },
    { img: "mjdata/img/bubbles/p7.jpg", text: "Bubbles that I blow." },
    { img: "mjdata/img/bubbles/p8.jpg", text: "Bubbles, bubbles, bubbles, everywhere I go!" }
  ],
  words: [
    { word: "bubble",     meaning: "거품, 비눗방울", sentence: "Bubbles at the beach.",   img: "mjdata/img/bubbles/p2.jpg" },
    { word: "at",         meaning: "~에서",          sentence: "Bubbles at the beach.",   img: "mjdata/img/bubbles/p2.jpg" },
    { word: "beach",      meaning: "해변, 바닷가",   sentence: "Bubbles at the beach.",   img: "mjdata/img/bubbles/p2.jpg" },
    { word: "in",         meaning: "~ 안에",         sentence: "Bubbles in the bath.",    img: "mjdata/img/bubbles/p3.jpg" },
    { word: "bath",       meaning: "목욕, 욕조",     sentence: "Bubbles in the bath.",    img: "mjdata/img/bubbles/p3.jpg" },
    { word: "sink",       meaning: "싱크대, 개수대", sentence: "Bubbles in the sink.",    img: "mjdata/img/bubbles/p4.jpg" },
    { word: "my",         meaning: "나의, 내",       sentence: "Bubbles in my drink.",    img: "mjdata/img/bubbles/p5.jpg" },
    { word: "drink",      meaning: "음료, 마실 것",  sentence: "Bubbles in my drink.",    img: "mjdata/img/bubbles/p5.jpg" },
    { word: "clothes",    meaning: "옷",             sentence: "Bubbles in the clothes.", img: "mjdata/img/bubbles/p6.jpg" },
    { word: "that",       meaning: "~하는 (앞말을 꾸며 줘요)", sentence: "Bubbles that I blow.", img: "mjdata/img/bubbles/p7.jpg" },
    { word: "I",          meaning: "나",             sentence: "Bubbles that I blow.",    img: "mjdata/img/bubbles/p7.jpg" },
    { word: "blow",       meaning: "(입으로) 불다",  sentence: "Bubbles that I blow.",    img: "mjdata/img/bubbles/p7.jpg" },
    { word: "everywhere", meaning: "어디에나, 모든 곳", sentence: "Bubbles, bubbles, bubbles, everywhere I go!", img: "mjdata/img/bubbles/p8.jpg" },
    { word: "go",         meaning: "가다",           sentence: "Bubbles, bubbles, bubbles, everywhere I go!", img: "mjdata/img/bubbles/p8.jpg" }
  ]
});
