// Define the list of memes to display
const memes = [
    'https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-superJumbo-v2.jpg',
    'https://thriftyniftymommy.com/wp-content/uploads/2019/04/Funny-Good-Morning-Meme-6.jpg.webp',,
    'https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg',
    'https://todaysparent.mblycdn.com/tp/resized/2017/06/1200x630/when-your-kid-becomes-a-meme.jpg',
    'https://static.demilked.com/wp-content/uploads/2022/09/it-humor-memes-5.jpeg',
    'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576',
    'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMDU2ODMyMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY4NTg2MzEyOH0.VFLqO_1oCPGaXY-OzpD19eLD9wyej0RHoa6xrWUsN0c/img.jpg?width=400&height=266',
    'https://www.creativefabrica.com/wp-content/uploads/2021/06/13/FUNNY-UNICORN-MEME-QUOTESCLIPARTPNG-Graphics-13355310-1.jpg',
    'https://cdn.shopify.com/s/files/1/0295/1977/3833/files/yorkshire-unicorn-meme_large.jpg?v=1598736723',
    'https://pbs.twimg.com/media/FGZNm87VUAIl3Dt.jpg'
  ];
  
  const INTERVAL_TIME = .05 * 60 * 1000; 
  
  const IDLE_TIME_THRESHOLD = 10 * 1000;
  
  let lastActivityTime = Date.now();
  
  document.addEventListener('mousemove', () => {
    lastActivityTime = Date.now();
  });
  
  setInterval(() => {
    const idleTime = Date.now() - lastActivityTime;
    if (idleTime >= IDLE_TIME_THRESHOLD) {
      const memeIndex = Math.floor(Math.random() * memes.length);
      const memeUrl = memes[memeIndex];
      window.open(memeUrl);
    }
  }, INTERVAL_TIME);
  