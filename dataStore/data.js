const posts = [
  {
    id: 1,
    image: 'https://cdn.everythingrf.com/live/1550492960922.png',
    title: 'Dual frequency GPS',
    headerTitle: 'Dual frequency GPS',
    description:
      'GPS is a term we’re all probably quite familiar with. It has been in phones and other products for years. It’s operated by the United States government and has 32 satellites up in orbit to help determine positions...'
  },
  {
    id: 2,
    image:
      'http://www.astronomy.com/-/media/Images/News%20and%20Observing/News/2017/11/SNconcept.jpg',
    title: 'The Zombie Star',
    headerTitle: 'The Zombie Star',
    description:
      'Astronomers discovered a "zombie" star that went supernova in 1954 and then exploded again in 2014. Previously, it was believed stars only went supernova at the end of their lives...'
  },
  {
    id: 3,
    image:
      'https://www.ihorror.com/wp-content/uploads/2019/11/Poison-Garden.jpg',
    title: 'Poison Garden UK',
    headerTitle: 'Poison Garden UK',
    description:
      'As the name suggests, the Poison Garden is less than idyllic. It houses around 100 species of toxic plants, most of which are deadly. Though touching, smelling, or tasting these plants are strictly prohibited...'
  },
  {
    id: 4,
    image:
      'https://developer.qualcomm.com/sites/default/files/attachments/esim-03_0.png',
    title: 'eSIM - The Future of SIM Cards',
    headerTitle: 'eSIM',
    description:
      'The humble SIM card has survived for quite a while, but it now finally looks like it’s on its way out. Why? Well, the embedded-SIM (eSIM), a much smarter technology, is here to save the day...'
  },
  {
    id: 5,
    image: 'https://mickeyblog.com/wp-content/uploads/2019/11/Dark-web.jpg',
    title: 'The Deep and Dark Web',
    headerTitle: 'The Deep & Dark Web',
    description:
      'When most of us think of the internet, we imagine day-to-day activities like watching a video, checking the news or booking a vacation online. However, under the surface lies a shadowy corner of the web where terrorists, criminals, and whistleblowers lurk...'
  },
  {
    id: 6,
    image: 'https://i.ytimg.com/vi/yo-CNhfRbXo/hqdefault.jpg',
    title: 'RedTacton - Human Transmission',
    headerTitle: 'RedTacton',
    description:
      'RedTacton uses the minute electric field emitted on the surface of the human body. Technically, it is completely distinct from wireless and infrared. A transmission path is formed at the moment a part of the human body comes in contact with a RedTacton transceiver...'
  },
  {
    id: 7,
    image:
      'https://rightedition.com/wp-content/uploads/2017/01/tesla-inventions.jpg',
    title: 'Nikola Tesla - A Scientist from the Future',
    headerTitle: 'Nikola Tesla',
    description:
      'Tesla was able to visualize objects, including inventions he was building, in his head, down to the minutest detail. His method of working was pretty unorthodox compared to other inventors, as he rarely created sketches or drawings...'
  }
];

const postsDetails = [
  {
    postId: 1,
    postDetails: [
      {
        type: 'text',
        content:
          'GPS is a term we’re all probably quite familiar with. It has been in phones and other products for years. It’s operated by the United States government and has 32 satellites up in orbit to help determine positions. Russia has its own equivalent program called GLONASS and China uses BeiDou. Galileo is a newer system created by the European Union, designed to end the region’s dependence on overseas positioning technologies.'
      },
      {
        type: 'text',
        content:
          'All of these services are similar, in so far as they provide location information, but they operate over a number of different frequency bands from 1,176MHz to 1,610MHz.'
      },
      {
        type: 'text',
        content:
          'Global Navigation Satellite Systems (GNSS) can make use of multiple frequency bands to improve tracking accuracy. Technically each of the navigation systems listed above is compatible with multi-frequency GNSS, but not all of the satellites in orbit support multiple frequencies, particularly legacy GPS satellites. Being the newer system, Galileo is perhaps best positioned to offer dual frequency GPS with its satellites.'
      },
      {
        type: 'image',
        path:
          'https://cdn57.androidauthority.net/wp-content/uploads/2018/06/Multi-Frequency-Navigation-840x339.jpg'
      },
      {
        type: 'text',
        content:
          'At the receiver end, you also need a modem able to use multiple frequencies to see the benefits of GNSS. Historically this technology has been reserved for expensive surveying and agricultural equipment. Now it’s available in smartphones too. The Xiaomi Mi 8 contains a Broadcom BCM47755 chip, which consumes half the power of previous chipsets, making it suitable for smartphones.'
      }
    ]
  },
  {
    postId: 2,
    postDetails: [
      {
        type: 'text',
        content:
          'Stars aren`t supposed to come back to life after the death throes of the supernova stage, but astronomers have spotted three that have done just that – surviving the catastrophic explosion that usually marks the end of a star`s life, and heading off through the galaxy on a new adventure.'
      },
      {
        type: 'text',
        content:
          'These peculiar "zombie" stars move a lot faster than the undead humans you might be familiar with from film and TV, and astronomers think they might be a completely new class of star.'
      },
      {
        type: 'text',
        content:
          'Scientists are now hypothesising that a new class of supernova – called a Type Iax supernova – may leave behind something of the white dwarf star that started erupting in the first place, perhaps because the final explosion is weaker or different in some way.'
      },
      {
        type: 'text',
        content:
          'The thinking goes that as two stars combine to form a Type Iax supernova, the crucial nuclear fusion only occurs inside a specific bubble, which means some of the matter escapes. It`s just a hypothesis for now, but the new stars are more evidence for it.'
      },
      {
        type: 'image',
        path:
          'https://i.dailymail.co.uk/i/pix/2016/08/18/11/375C738800000578-0-image-a-14_1471515018802.jpg'
      },
      {
        type: 'text',
        content:
          'There`s still a lot we don`t know about these runaway or zombie stars, not least how old they are, but the find is encouraging for the researchers. The team was specifically looking for stars of this type – with particularly low mass and high velocity – using observations from the Gaia space telescope and other sources.'
      },
      {
        type: 'text',
        content:
          'It`s possible that there could be more stars like this to discover and a lot more to learn about them: the astronomers are suggesting more theoretical work needs to be done alongside fresh deep space observations to help pin down whether these objects really do represent a new class of star.'
      }
    ]
  },
  {
    postId: 3,
    postDetails: [
      {
        type: 'text',
        content:
          '"These Plants Can Kill" warn two signs on a locked, iron gate that`s also marked with a skull and crossbones.'
      },
      {
        type: 'text',
        content:
          'The Duchess of Northumberland (aka Jane Percy) started the Poison Garden in 2005 as part of the 12-acre, elaborate garden on the grounds of her family`s home, Alnwick Castle.'
      },
      ,
      {
        type: 'image',
        path:
          'https://media.npr.org/assets/img/2017/04/26/poison-garden-2_custom-d8023850a13e00af22a09d281bfb8d294635658f-s1100-c15.jpg'
      },
      {
        type: 'text',
        content:
          '"The line between kill and cure is what I`m interested in," she says. "The story of how plants can cure, I find pretty boring, really. Much better to know how a plant kills."'
      },
      {
        type: 'image',
        path:
          'https://media.npr.org/assets/img/2017/04/26/plants-1_custom-551637cff5311d4d01b085fc10f77a26d78d8520-s1100-c15.jpg'
      },
      {
        type: 'text',
        content:
          'Visitors to the Poison Garden are allowed to look but not touch, says head gardener Trevor Jones. "They`re not allowed to stand too close to the plants. They`re not allowed to smell them or touch them or taste any of them, because they do all have the ability to kill you. We only take 20 people in at a time so that the guide can see everybody, and see exactly what they`re up to and can take control."'
      }
    ]
  },
  {
    postId: 4,
    postDetails: [
      {
        type: 'text',
        content:
          'eSIM is a global specification by the GSMA which enables remote SIM provisioning of any mobile device.'
      },
      {
        type: 'text',
        content:
          'eSIM now allows consumers to store multiple operator profiles on a device simultaneously, and switch between them remotely, though only one can be used at a time. The specification now extends to a wider range of devices, beyond the single companion device made possible with the first release. Manufacturers and operators can now enable consumers to select the operator of their choice and then securely download that operator’s SIM application to any device.'
      },
      {
        type: 'image',
        path:
          'https://www.usmobile.com/blog/wp-content/uploads/2018/09/1-esim-explainer.png'
      },
      {
        type: 'text',
        content:
          'Remote provisioning means much smaller devices can be supported. The first products have already come to market, and we can expect to see many further launches in 2019: it is now easier to extend mobile connectivity to devices such as tablets, smart watches, fitness bands, portable health systems and various other devices.'
      },
      {
        type: 'image',
        path:
          'https://img.etimg.com/thumb/width-640,height-480,imgsize-181996,resizemode-1,msid-70040506/esim-based-devices-shipments-to-reach-2-billion-by-2025.jpg'
      },
      {
        type: 'text',
        content:
          'eSIM is the only globally-backed remote SIM specification for consumer devices. This universal approach will grow the Internet of Things by allowing manufacturers to build a new range of products for global deployment based on this common embedded SIM architecture.'
      }
    ]
  },
  {
    postId: 5,
    postDetails: [
      {
        type: 'text',
        content:
          'The deep web is just like it sounds — below the surface and not completely dark.'
      },
      {
        type: 'text',
        content:
          'Search engines like Google, Bing, and Yahoo are able to search and index websites because of links. They use links to rank search results according to things like relevancy, inbound links, and keywords. Regular browsers search the so-called “surface web,” but that’s where the search stops.'
      },
      {
        type: 'image',
        path:
          'https://helpdeskgeek.com/wp-content/pictures/2019/03/dark-web.jpg.optimal.jpg'
      },
      {
        type: 'text',
        content:
          'For instance, if you wanted to search a public library catalog to find a book, you couldn’t type the title into your browser’s search bar and expect Google to return a meaningful result for your library. That level of information would be located in the deep web.'
      },
      {
        type: 'text',
        content:
          'The reason search engines can’t return this data to you is because there are no links. (Search engines crawl the internet by visiting one web page, then the links on that page, and then the links on subsequent pages). Instead, you would have to go to the public library’s website and use a search bar inside the website to locate this data on the library’s servers. This kind of information is all over the internet. Almost every time you search internally on a website, you’re accessing deep web content.'
      },
      {
        type: 'image',
        path:
          'https://hackercombat.com/wp-content/uploads/Deep-Web-and-Dark-Web-Explained.png'
      },
      {
        type: 'text',
        content:
          'The dark web is a different story — and probably what you might have assumed the deep web was if you read about it in a newspaper or saw a story on TV. But remember, the deep web and the dark web are two distinctly different things.'
      },
      {
        type: 'text',
        content:
          'Regular browsers can’t access dark web websites. Instead, the dark web uses what’s called The Onion Router hidden service protocol. “Tor” servers — derived from “The Onion Router” — are undetectable from search engines and offer users complete anonymity while surfing the web. At the same time, dark web website publishers are also anonymous thanks to special encryptions provided by the protocol.'
      },
      {
        type: 'text',
        content:
          ' When you access the dark web, you’re not surfing the interconnected servers you regularly interact with. Instead, everything stays internal on the Tor network, which provides security and privacy to everyone equally.Worth noting: Dark web website addresses end with .onion instead of the surface web’s .com, .org, or .gov, for example.'
      }
    ]
  },
  {
    postId: 6,
    postDetails: [
      {
        type: 'text',
        content:
          'The world today is in search  for the new technology and even has contributed certain inventions in the field of science that are none less than miracles. The one such contribution is provided by Nippon Telegraph and Telephone Corporation (NTT). It has announced technology Redtacton. Different services that we see everywhere are genuinely user-friendly  and one will require technologies that enable communication between people and objects in close proximity. Focusing on the naturalness, inevitability, and sense of security conveyed by touching in everyday life, this article describes human area networking technology that enables communication by touching, which we call RedTacton.'
      },
      {
        type: 'image',
        path:
          'http://1.bp.blogspot.com/-liwd9DlYYFo/Twa2vPnBi7I/AAAAAAAAAJ0/OW17mXzEBgI/s1600/RedTacton-Working.gif'
      },
      {
        type: 'text',
        content:
          'The name chosen  for this technology is derived from “touch-act-on” i.e. “action triggered by touching” combined with red, which in Japanese culture is an auspicious color, to convey the cordiality and warmth of interpersonal communications.'
      },
      {
        type: 'text',
        content:
          'RedTacton is a novel communications technology -neither wireless nor wire communication- that uses the surface of the human body as a transmission medium supporting IEEE 802.3 half-duplex communication at 10 Mbit/s.'
      },
      {
        type: 'image',
        path:
          'http://www.yuvaengineers.com/wp-content/uploads/2010/04/redtacton-7.jpg'
      },
      {
        type: 'text',
        content:
          'Receiving data is more complicated because the strength of the electric field involved is so low. RedTacton gets around this using a technique called electric field photonics: A laser is passed though an electro-optic crystal, which deflects light differently according to the strength of the field across it. These deflections are measured and converted back into electrical signals to retrieve the transmitted data.'
      },
      {
        type: 'text',
        content:
          'Communication is possible using any body surfaces, it can be the hands, fingers, arms, feet, face, legs. RedTacton works through shoes and clothing as well.'
      }
    ]
  },
  ,
  {
    postId: 7,
    postDetails: [
      {
        type: 'text',
        content:
          'Nikola Tesla, (born July 9/10, 1856, Smiljan, Austrian Empire [now in Croatia]—died January 7, 1943, New York, New York, U.S.), Serbian American inventor and engineer who discovered and patented the rotating magnetic field, the basis of most alternating-current machinery. He also developed the three-phase system of electric power transmission. He immigrated to the United States in 1884 and sold the patent rights to his system of alternating-current dynamos, transformers, and motors to George Westinghouse. In 1891 he invented the Tesla coil, an induction coil widely used in radio technology.'
      },
      {
        type: 'image',
        path:
          'https://i.pinimg.com/originals/0f/4d/52/0f4d522e70c60b49a4b0f5f6eb6b29f4.jpg'
      },
      {
        type: 'text',
        content:
          'Along with his hundreds of inventions he had some great inventions which can change the world and cannot be re-invented again.'
      },
      {
        isHeader: true,
        type: 'text',
        content: 'Wireless Energy Transmission'
      },
      {
        type: 'text',
        content:
          'What a lot of people don’t know is that Tesla also tried to build a tower that would transmit electricity through the air and even got American Financier J.P. Morgan to finance the building of Wardenclyffe Tower on the North Shore of Long Island, which Tesla hoped to adapt to transmit electricity to New York City.Morgan balked at the electricity transmission scheme and refused to fund the rest of the project, which Tesla had to abandon in 1906, tearing down Wardenclyffe Tower a decade later in 1917.'
      },
      {
        type: 'image',
        path:
          'https://inteng-storage.s3.amazonaws.com/images/JANUARY/sizes/Wardenclyffe_Tower_resize_md.jpg'
      },
      {
        isHeader: true,
        type: 'text',
        content:
          'Supersonic Airships Powered by Ground-Based, Wireless Electrical Towers'
      },
      {
        type: 'text',
        content:
          'When wireless charging of your phone or tablet was introduced several years ago, we all thought it was revolutionary. Nikola Tesla, meanwhile, would chide us all for thinking so small.In 1919, Tesla described his idea for a supersonic airship powered entirely by wireless electrical transmission from ground-based towers that could fly 40,000 feet off the ground and fly 1,000 mph, making the trip from New York to London in under 4 hours. '
      },
      {
        type: 'image',
        path:
          'https://inteng-storage.s3.amazonaws.com/images/JANUARY/sizes/Airships_resize_md.jpg'
      },
      {
        isHeader: true,
        type: 'text',
        content: 'Remote Controlled Navies'
      },
      {
        type: 'text',
        content:
          'While Tesla is best known for his work with electricity, this isn’t the only area Tesla worked in. Another major area of work for Tesla was military technology. Like Alfred Nobel, Tesla believed that the best way to prevent war was to make it either utterly pointless or so catastrophic for the participants that no one would be mad enough to go to war again. With this in mind, Tesla invented a small boat that he could start, stop, and steer with radio signals. He hoped that the by removing humans from the equation that “battle ships [sic] will cease to be built and the most tremendous artillery afloat will be of no more use than so much scrap iron.”'
      },
      {
        type: 'image',
        path:
          'https://inteng-storage.s3.amazonaws.com/images/JANUARY/sizes/Tesla-Boat_resize_md.jpg'
      },
      {
        isHeader: true,
        type: 'text',
        content: 'The Thought Camera'
      },
      {
        type: 'text',
        content:
          'One of Tesla’s most outlandish ideas was that it would be possible to photograph one`s thoughts. In 1933, he told reporters at the Kansas City Journal-Post, “In 1893, while engaged in certain investigations, I became convinced that a definite image formed in thought, must by reflex action, produce a corresponding image on the retina, which might be read by a suitable apparatus. “Now if it be true that a thought reflects an image on the retina, it is a mere question of illuminating the same property and taking photographs, and then using the ordinary methods which are available to project the image on a screen. “If this can be done successfully, then the objects imagined by a person would be clearly reflected on the screen as they are formed, and in this way, every thought of the individual could be read. Our minds would then, indeed, be like open books.”'
      },
      {
        type: 'image',
        path:
          'https://inteng-storage.s3.amazonaws.com/images/JANUARY/sizes/Tesla-Thought_resize_md.jpg'
      },
      {
        isHeader: true,
        type: 'text',
        content: 'The Earthquake Machine'
      },
      {
        type: 'text',
        content:
          'In 1893, Tesla was granted a patent for his steam-powered mechanical oscillator whose vibration could be utilized to generate electricity. As he would later tell reporters, while calibrating this machine for an experiment, it began to shake his New York City laboratory so violently that it almost brought the building down.“Suddenly all the heavy machinery in the place was flying around. I grabbed a hammer and broke the machine,” he said. “The building would have been down about our ears in another few minutes.” “Outside in the street there was pandemonium. The police and ambulances arrived. I told my assistants to say nothing. We told the police it must have been an earthquake. That`s all they ever knew about it.” This gave Tesla the inspiration for his telegeodynamic ocillator—an earthquake machine—which could be used by scientists to discover the geological properties of the Earth and for engineers and prospectors to locate mineral and metal ore deposits underground. He never got to build his earthquake machine, but scientists and engineers use the same principle to do exactly as Tesla imagined.'
      },
      {
        type: 'image',
        path:
          'https://inteng-storage.s3.amazonaws.com/images/JANUARY/sizes/TeslaOscillator_resize_md.jpg'
      },
      {
        isHeader: true,
        type: 'text',
        content: 'The Death Ray'
      },
      {
        type: 'text',
        content:
          'Or the Peace Ray, as Tesla called it. Tesla believed that by accelerating mercury isotopes to 48 times the speed of sound, the resulting beam would produce enough energy to destroy entire armies at a distance limited only by the curvature of the Earth. Tesla apparently tried to shop this idea around to several governments in the years before his death, including the United States, but the Soviet Union was the only one to experiment with it at all, and it never produced the kind of results Tesla hoped. Which is probably a good thing, all things considered. '
      },
      {
        type: 'image',
        path:
          'https://inteng-storage.s3.amazonaws.com/images/JANUARY/sizes/Tesla-Deathray_resize_md.jpg'
      }
    ]
  }
];

export { posts, postsDetails };
