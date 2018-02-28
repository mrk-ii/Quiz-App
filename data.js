'use strict';

const DATA = [
  {
    question: 'What did Toyota produce before maufacturing automobiles?',
    answers: ['Paper', 'Tools', 'Sewing Machines', 'Weapons' ],
    correctAnswer: 'Sewing Machines',
    image: 'http://www.hampshiresewingmachines.com/images/images/SM-Tbl-R_WB_s.jpg',
    alt: 'New Toyota Sewing Machine',
    wrongAnswer:'http://www.toyota-global.com/company/history_of_toyota/75years/text/taking_on_the_automotive_business/chapter2/section6/images/l01_02_06_01_img04.jpg',
    wrongAlt: 'Old Toyota Sewing Machine'
  },
  {
    question: 'What year did Toyota manufacture it’s first passenger vehicle?',
    answers: ['1911', '1935', '1986', '1945' ],
    correctAnswer: '1935',
    image: 'http://www.toyota-global.com/company/history_of_toyota/75years/text/entering_the_automotive_business/chapter1/section1/images/l02_01_01_01_img02.jpg',
    alt: 'Toyota Unveiling first passenger vehicle',
    wrongAnswer: 'http://www.toyota-global.com/company/history_of_toyota/75years/text/taking_on_the_automotive_business/chapter2/section8/images/l01_02_08_01_img02.jpg',
    wrongAlt: 'people building automobile'
  },
  {
    question: 'What was the model name of the first passenger vehicle Toyota produced?',
    answers: ['Corolla', 'Ichi', 'Prius', 'Model A1' ],
    correctAnswer: 'Model A1',
    image: 'https://a.d-cd.net/98f9b6as-960.jpg',
    alt: 'Toyota Model a1',
    wrongAnswer: 'http://www.toyota-global.com/company/history_of_toyota/75years/text/taking_on_the_automotive_business/chapter2/section2/images/l01_02_02_03_img02.jpg',
    wrongAlt: 'Toyota Crash Test'
  },
  {
    question: 'What was the model name of the first truck Toyota ever produced?',
    answers: ['Model A2', 'Model G1', 'Model T', 'Tacoma' ],
    correctAnswer: 'Model G1',
    image: 'https://img.favcars.com/toyota/model-g/wallpapers_toyota_model-g_1935_1.jpg',
    alt: 'Toyota Model G1 Truck',
    wrongAnswer: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/1935_Toyoda_Model_G1_Truck_02.jpg',
    wrongAlt: 'Toyota Model G1 Truck'
  },
  {
    question: 'What model Toyota automobile is the best-selling nameplate in the world?',
    answers: ['Prius', 'Echo', 'Corolla', 'Camry' ],
    correctAnswer: 'Corolla',
    image: 'https://www.leithcars.com/blogs/1421/wp-content/uploads/2016/04/Toyota_apex_slayer_aka_lehgo-1.jpg',
    alt: '1986 Toyota Corolla Levin',
    wrongAnswer: 'https://rthirtytwotaka.files.wordpress.com/2010/01/ae8620flip.jpg',
    wrongAlt: 'Toyota Corolla Flipping Over'
  },
  {
    question: 'How many Corollas have been produced?',
    answers: ['more than 40 million', 'more than 100 million', 'more than 200 million', 'more than 500 million' ],
    correctAnswer: 'more than 40 million',
    image: 'http://image.superstreetonline.com/f/174064409+w+h+q80+re0+cr1+ar0/history-of-the-toyota-corolla.jpg',
    alt: 'History of Toyota Corolla line',
    wrongAnswer: 'https://media.giphy.com/media/l1IYc7ads36IEj2aA/giphy.gif',
    wrongAlt: 'Toyota Crash Test'
  },
  {
    question: 'The Passionate Pursuit of Potential” is the slogan for what division of Toyota?',
    answers: ['Acura', 'Infiniti', 'TRD', 'Lexus' ],
    correctAnswer: 'Lexus',
    image: 'http://hanabi.autoweek.com/sites/default/files/styles/gen-1200-675/public/lexus_lc_500_042_3e84e0bbd35047dcb1f11fc5c7662985b00dde4d.jpg?itok=FvTL8kmR',
    alt: 'Lexus Leather Interior',
    wrongAnswer: 'https://d24c1jjhvw5da9.cloudfront.net/en/wp-content/uploads/sites/3/2017/10/click-6.jpg',
    wrongAlt: 'Lexus GT3 race car'
  },
  {
    question: 'What year was the Lexus division created?',
    answers: ['1940', '1970', '1983', '1990' ],
    correctAnswer: '1983',
    image: 'https://i.pinimg.com/originals/70/c7/d2/70c7d25840a6ad689edf0363d19b5cbd.jpg',
    alt: 'First Lexus in the U.S.',
    wrongAnswer: 'https://dzag5wgsqu6mr.cloudfront.net/wp-content/uploads/2014/12/27-first-generation-ls.jpg',
    wrongAlt: 'Lexus LS400 Sedan'
  },
  {
    question: 'Toyota is the largest company in Japan.  How does it rank against the world’s other largest automotive manufacturers?',
    answers: ['First largest manufacturer', 'Second largest manufacturer', 'Third largest manufacturer', 'Four largest manufacturer' ],
    correctAnswer: 'Second largest manufacturer',
    image: 'https://i2.wp.com/motorsportstribune.com/wp-content/uploads/2017/04/LBGP48A.jpg?fit=1500%2C1000&ssl=1',
    alt: 'Toyota Racing Series F1 Event',
    wrongAnswer: 'https://images.hgmsites.net/lrg/2015-toyota-sienna-iihs-small-overlap-test_100490817_l.jpg',
    wrongAlt: 'Toyota Crash Test'
  },
  {
    question: 'On average, how many vehicles does Toyota produce per year?',
    answers: ['1,000,000', '2,000,000', '3,000,000', 'more than 5,000,000' ],
    correctAnswer: 'more than 5,000,000',
    image: 'https://www.tfltruck.com/wp-content/uploads/2016/07/2016-toyota-tundra-tacoma-texas-factory.jpg',
    alt: 'Toyota Texas factory',
    wrongAnswer: 'https://static01.nyt.com/images/2012/08/04/business/Toyota/Toyota-jumbo.jpg',
    wrongAlt: 'Toyota auto terminal at the Port of Portland in Oregon'
  },
  {
    question: 'What year did Toyota start participating in Formula-1?',
    answers: ['1977', '1982', '1996', '2002' ],
    correctAnswer: '2002',
    image: 'http://www.mulierchile.com/toyota-tf102/toyota-tf102-009.jpg',
    alt: 'Allan McNish racing in the 2002 Toyota TF102 Formula-1 car',
    wrongAnswer: 'https://www.racefans.net/wp-content/uploads/2015/06/Toyota-TF102-1.jpg',
    wrongAlt: '2002 Toyota TF102 Formula-1 car on  display'
  },
  {
    question: 'What brands are currently owned by Toyota?',
    answers: ['Citroen, Peugeot, Mazda', 'Honda, Acura, Mugen', 'Nismo, Nissan, Infiniti', 'Lexus, Scion, Daihatsu, Hino Motors, Subaru, Isuzu' ],
    correctAnswer: 'Lexus, Scion, Daihatsu, Hino Motors, Subaru, Isuzu',
    image: 'http://www.automotivefamilytree.com/Auto%20Family%20Tree/Auto%20Family%20Tree-TOYOTA.jpg',
    alt: 'Toyota Motor Corporation Tree',
    wrongAnswer: 'https://i.redd.it/5yqb6ho80fuz.png',
    wrongAlt: 'Toyota/Scion/Subaru comparision'
  },
  {
    question: 'What year did Toyota produce it’s 100-millionth vehicle?',
    answers: ['1990', '1999', '2004', '2015' ],
    correctAnswer: '2004',
    image: 'https://static01.nyt.com/images/2013/09/18/business/TOYODA-obit-web/TOYODA-obit-web-master1050.jpg',
    alt: 'Eiji Toyoda, the nephew of the Toyota group’s founder in front of Corolla assembly line',
    wrongAnswer: 'https://www.peterjthomson.com/wp-content/uploads/2012/09/Toyota-Production-System-Lean-1024x683.jpg',
    wrongAlt: 'Toyota Assembly LIne'
  },
  {
    question: 'In 1951, the Japanese car manufacturer launched a series of four-wheel-drive vehicles which became Toyota’s longest running series. What is the name of this series?',
    answers: ['Tacoma', '4Runner', 'Land Cruiser', 'Highlander' ],
    correctAnswer: 'Land Cruiser',
    image: 'https://pbs.twimg.com/media/DU-uhC7UQAAH_2r.jpg',
    alt: '1951 Toyota Land Cruiser BJ Series',
    wrongAnswer: 'https://i.ytimg.com/vi/Lq9Ze0eiyhc/maxresdefault.jpg',
    wrongAlt: 'Toyota Land Cruiser Evolution (1951-2018)'
  },
  {
    question: 'What is the biggest SUV built by Toyota?',
    answers: ['Land Cruiser', 'Mega Cruiser', '4Runner', 'Sequoia' ],
    correctAnswer: 'Mega Cruiser',
    image: 'http://cartechnic.ru/800/toyota/mega_cruiser/toyota_mega_cruiser_2002_1.jpg',
    alt: 'Toyota Mega Cruiser',
    wrongAnswer: 'http://yanastancheva.com/wp-content/uploads/2017/02/ADA_9128-Edit.jpg',
    wrongAlt: 'Toyota Mega Cruiser on mountain road'
  },
  {
    question: 'In 2012, what vehicle was used to tow the Space Shuttle Endeavour over a bridge across the I-405 to it’s final destination in Los Angeles?',
    answers: ['Toyota Tundra', 'Toyota Tacoma', 'Toyota 4Runner', 'Toyota Mega Cruiser' ],
    correctAnswer: 'Toyota Tundra',
    image: 'https://i.pinimg.com/originals/35/82/2d/35822db8f041c9481bd11fd56475ca1c.jpg',
    alt: 'Toyota Tundra Towing Space Shuttle Endevour',
    wrongAnswer: 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/www.autoblog.com/media/2012/10/01-toyota-endeavour.jpg',
    wrongAlt: 'Toyota Tundra Towing Space Shuttle Endevour'
  },
  {
    question: 'In 1970, Toyota released their first mass-produced sports car. This model sports car participated in the World Rally Championship and won many times. What is the name of this particular model?',
    answers: ['Toyota Celica', 'Toyota Supra', 'Toyota MR2', 'Toyota Corolla' ],
    correctAnswer: 'Toyota Celica',
    image: 'https://3.bp.blogspot.com/-gNj62euas-s/WdpZO8laF8I/AAAAAAAAqzc/rdJcjZrbVb8FeNT2MjQ3j3DQ6ldZW-JswCLcBGAs/s1600/5900940940_f8f1ff91ca_b.jpg',
    alt: '1970 Tyotoa Celica Rally car',
    wrongAnswer: 'https://i.ytimg.com/vi/vvciW2siPns/maxresdefault.jpg',
    wrongAlt: '1970 Toyota Celica GT'
  },
  {
    question: 'Toyota ended production of the Celica after producing it’s seventh generation.  What year did Toyota end the production of the Celica?',
    answers: ['2000', '2006', '2010', '2012' ],
    correctAnswer: '2006',
    image: 'https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/dp/images/uploads/toyota-celica-2002-w.jpg',
    alt: '2006 Toyota Celica',
    wrongAnswer: 'https://img00.deviantart.net/5d5b/i/2004/144/b/8/silver_celica_v3.jpg',
    wrongAlt: 'Ugly Toyota Celica'
  },
  {
    question: 'What Toyota produced Hybrid-vehicle holds the record for being the best-selling hybrid car in the world?',
    answers: ['Toyota Rav4', 'Toyota Corolla', 'Toyota Echo', 'Toyota Prius' ],
    correctAnswer: 'Toyota Prius',
    image: 'http://images.thetruthaboutcars.com/2011/08/japanautoworker.jpg',
    alt: 'Toyota Prius Production Line',
    wrongAnswer: 'https://c.tribune.com.pk/2011/01/toyota-2-AFP.jpg',
    wrongAlt: 'Toyota Prius Lot'
  },
  {
    question: 'How many Priuses have been sold?',
    answers: ['3 million', 'Over 4 million', '10 million', '100 million' ],
    correctAnswer: 'Over 4 million',
    image: 'https://4.bp.blogspot.com/_HV6l2Zy3y_I/TLOXh_q_3LI/AAAAAAAAAFE/We9Byfza0Ew/s1600/IMG_5562.JPG',
    alt: 'multiple Toyota Prius',
    wrongAnswer: 'https://i.pinimg.com/originals/63/70/c0/6370c08ffc842efd39e461725b29bb07.jpg',
    wrongAlt: 'Toyota Prius with Eyelashes'
  }

];

