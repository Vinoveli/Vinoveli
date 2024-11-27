import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductSeparate.css';
import Saperavi from '../assets/marnaveliWine/Saperavi.png';
import Rkatsiteli from '../assets/marnaveliWine/Rkatsiteli.png';
import TechSheets from '../assets/TechSheets.pdf';
import Sarajishvili1941 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-1941.jpg'
import Sarajishvili1953 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-8.jpg'
import Sarajishvili1955 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-9.jpg'
import Sarajishvili1956 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-10.jpg'
import Sarajishvili1957 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-11.jpg'
import Sarajishvili1958 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-12.jpg'
import Sarajishvili1959 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-13.jpg'
import Sarajishvili1960 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-14.jpg'
import Sarajishvili1964 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-15.jpg'
import Sarajishvili1968 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-16.jpg'
import Sarajishvili1969 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-17.jpg'
import Sarajishvili1970 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-18.jpg'
import Sarajishvili1974 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-19.jpg'
import Sarajishvili1973 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-20.jpg'
import Sarajishvili1976 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-21.jpg'
import Sarajishvili1977 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-22.jpg'
import Sarajishvili1979 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-23.jpg'
import Sarajishvili1980 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-24.jpg'
import Sarajishvili1946 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-25.jpg'
import Sarajishvili1947 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-26.jpg'
import Sarajishvili1949 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-27.jpg'
import Sarajishvili1950 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-28.jpg'
import Sarajishvili1952 from '../assets/sarajishviliWine/Sarajishvili-Vintage-B-29.jpg'
import RkatsiteliOak from '../assets/marnaveliWine/Rkatsiteli_Oak.png'
import Kisi_Qvevri from '../assets/marnaveliWine/Kisi_Qvevri.png'
import Kindzmarauli from '../assets/marnaveliWine/Kindzmarauli.png'
import Rkatsiteli_Qvevri from '../assets/marnaveliWine/Rkatsiteli_Qvevri.png'
import Saperavi_Oak from '../assets/marnaveliWine/Saperavi_Oak.png'
import trilogy from '../assets/sarajishviliWine/trilogy.jpg'
import Saperavi_Qvevri from '../assets/marnaveliWine/Saperavi_Qvevri.png'
import vs from '../assets/sarajishviliWine/VS.jpg'
import vsop from '../assets/sarajishviliWine/VSOP.jpg'
import xo from '../assets/sarajishviliWine/XO.jpg'
import Saperavipdf from '../assets/Marnaveli-4.pdf'
import SaperaviOakpdf from '../assets/marnaveli-5.pdf'
import RkatsiteliOakpdf from '../assets/Marnaveli-3.pdf'
import Rkatsitelipdf from '../assets/Marnaveli-6.pdf'
import KisiKhikhvipdf from '../assets/Marnaveli-2.pdf'
import Kindzmaraulipdf from '../assets/Marnaveli-1.pdf'




const productsData = {
  rkatsitelioak: {
    title: 'Rkatsiteli Oak',
    image: RkatsiteliOak, // Ensure you have imported this image
    text: [
      'The Rkatsiteli grape variety is Georgia\'s most planted and important white wine grape variety. Its characteristics are well-suited to a range of wine styles ranging from stainless steel, oak matured, and skin-contact crafted in Qvevri. The name "Rka-tsiteli" refers to the tendency of the grape stems to turn red as the clusters ripen.',
      'Vinification:',
      'All grapes were hand-picked, and the healthiest clusters were carefully selected. The clusters were destemmed, crushed, and gently pressed. To preserve and enhance the aromatic profile of the Rkatsiteli variety, the juice was clarified and inoculated with specially selected yeast. Fermentation lasted about 7 days at a temperature of 12-14°C (54-57°F). Malolactic conversion was suppressed to retain fresh characteristics. After fermentation, the wine was racked from the lees and transferred to 4th use French oak barrels where the wine matured for 6 months.',
      'Tasting Notes:',
      'Ripe apple, green melon, white peach, and honeysuckle aromas intertwine with light hints of toast, hazelnut, vanilla, and caramel. Creamy texture on the palate with ripe fruit flavors and lingering toasty finish.',
    ],
    pdf: RkatsiteliOakpdf, // Ensure you have imported this PDF
  },
  kisikhikhvi: {
    title: 'Kisi Khikhvi',
    image: Kisi_Qvevri, // Ensure you have imported this image
    text: [
      'The Qvevri is a traditional Georgian winemaking vessel handcrafted from clay. The Qvevri is usually buried in the ground to provide natural temperature control. Wine fermentation and maturation can take place in the qvevri. White grapes will often undergo long periods of skin contact in qvevri to produce "amber" wines. Qvevri winemaking has been inscribed on UNESCO\'s Representative List of the Intangible Cultural Heritage of Humanity.',
      'Vinification:',
      'Aromatic white grapes from the Kakheti region, Kisi and Khikhvi, were vinified separately in Qvevri. The grapes were destemmed and crushed directly into qvevri and inoculated with specially selected yeast. The natural fermentation temperature in qvevri ranged from 25-30°C (77-86°F), and the fermentation lasted for 5-7 days. Upon completion of fermentation, the qvevri was topped up and sealed. The wine continued to mature for 6 months with full skin contact. After 6 months, the wine was removed from qvevri, pressed, and stored in stainless steel tanks to preserve fresh aromatics.',
      'Tasting Notes:',
      'Golden amber color with aromas of white cherry, baked peach, dried apricot, dried wildflowers, fresh walnuts, and jasmine tea. The palate brings out fresh citrus and coriander spice flavors with fine tannins and substantial body.',
    ],
    pdf: KisiKhikhvipdf, // Ensure you have imported this PDF
  },
  kindzmarauli: {
    title: 'Kindzmarauli',
    image: Kindzmarauli,
    text: [
      'Semi-Sweet Red Wine',
      '700ml',
      'Marnaveli',
    ],
    pdf: Kindzmaraulipdf,
  },
  rkatsiteli: {
    title: 'Rkatsiteli',
    image: Rkatsiteli, // Ensure you have imported this image
    text: [
      'The Rkatsiteli grape variety is Georgia\'s most planted and important white wine grape variety. Its characteristics are well-suited to a range of wine styles ranging from stainless steel, oak matured, and skin-contact crafted in Qvevri. The name "Rka-tsiteli" refers to the tendency of the grape stems to turn red as the clusters ripen.',
      'Vinification:',
      'Top quality Rkatsiteli grapes were collected from villages throughout the Kakheti wine region. The clusters were destemmed, crushed, and gently pressed. To preserve and enhance the aromatic profile of the Rkatsiteli variety, the juice was clarified and inoculated with specially selected yeast. Fermentation lasted about 7 days at a temperature of 12-14°C (54-57°F). After fermentation, the wine was racked from the lees and stored in stainless steel tanks before bottling.',
      'Tasting Notes:',
      'Delicate aromas of spring blossoms, meadow grass, juicy lemon, fresh apricot, crisp apple, and pear. This wine has a smooth, round texture that is enlivened by zesty citrus notes on the palate. Light body and clean finish.',
    ],
    pdf: Rkatsitelipdf, // Ensure you have imported this PDF
  },
  rkatsiteliqvevri: {
    title: 'Rkatsiteli Qvevri',
    image: Rkatsiteli_Qvevri,
    text: [
      'Dry Amber Wine',
      'Qvevri Wine',
      '700ml',
      'Marnaveli',
    ],
    
  },
  saperavi: {
    title: 'Saperavi',
    image: Saperavi, // Ensure you have imported or defined this image
    text: [
      'Saperavi is Georgia\'s most prominent red grape variety which is prized for its deep color and bold structure. Its pigmented flesh makes Saperavi a "teinturier" grape variety and gives rise to its name which means "to give color". Saperavi\'s distinct qualities have inspired Georgian winemakers to produce a wide range of styles such as sparkling, rosé, dry red, semi-sweet red and fully sweet.',
      'Vinification:',
      'Saperavi grapes were harvested at 22-28 Brix to provide ripeness and structure. Grapes were crushed and destemmed. The must was then inoculated with specially selected yeast to emphasize the varietal aromas of the Saperavi grapes. The fermentation was conducted in a temperature-controlled environment at 22°C (71-72°F for 5-6 days with periodic punch downs and pump overs. When the primary fermentation finished, the wine was pressed and transferred to stainless steel tanks where malolactic fermentation took place. The wine was then moved to 4th use French oak barrels and aged for 9 months.',
      'Tasting Notes:',
      'Deep ruby color with violet hue. Rich with aromas of violets, juicy black cherry, ripe blackberry, baked black plum with light touches of vanilla, cedar, earth and dark chocolate. Intense black fruit flavors on the palate are complemented by velvety texture and a complex, long-lasting finish.',
    ],
    pdf: Saperavipdf, // Ensure you have imported or defined this PDF
  },
  saperavioak: {
    title: 'Saperavi Oak',
    image: Saperavi_Oak, // Ensure you have imported this image
    text: [
      'Saperavi is Georgia\'s most prominent red grape variety which is prized for its deep color and bold structure. Its pigmented flesh makes Saperavi a "teinturier" grape variety and gives rise to its name which means "to give color". Saperavi\'s distinct qualities have inspired Georgian winemakers to produce a wide range of styles such as sparkling, rosé, dry red, semi-sweet red, and fully sweet.',
      'Vinification:',
      'Saperavi grapes were harvested at 22-28 Brix to provide ripeness and structure. Grapes were crushed and destemmed. The must was then inoculated with specially selected yeast to emphasize the varietal aromas of the Saperavi grapes. The fermentation was conducted in a temperature-controlled environment at 22°C (71-72°F) for 5-6 days with periodic punch downs and pump overs. When the primary fermentation finished, the wine was pressed and transferred to stainless steel tanks where malolactic fermentation took place. The wine was then moved to 4th use French oak barrels and aged for 9 months.',
      'Tasting Notes:',
      'Deep ruby color with violet hue. Rich with aromas of violets, juicy black cherry, ripe blackberry, baked black plum with light touches of vanilla, cedar, earth, and dark chocolate. Intense black fruit flavors on the palate are complemented by velvety texture and a complex, long-lasting finish.',
    ],
    pdf: SaperaviOakpdf, 
  },
  saperaviqvevri: {
    title: 'Saperavi Qvevri',
    image: Saperavi_Qvevri,
    text: [
      'Dry Red Wine',
      'Qvevri Wine',
      '700ml',
      'Marnaveli',
    ],
    
  },
  vs: {
    title: 'VS',
    image: vs,
    text: [
      "A fresh, harmonious brandy of a vigorous character, Sarajishvili VS is a mouth-watering blend of spirits of different ages. Grapes from different wine-making regions of Georgia give this exceptional light-amber coloured brandy complex aromas of wild flowers and dried fruits, impressive intensity and precision, and a lingering, sensual finish"
    ],
    
  },
    vsop: {
    title: 'VSOP',
    image: vsop,
    text: [
      "The natural balance of strength and smoothness creates a harmonious blend of Sarajishvili VSOP - an exceptional product of Sarajishvili, in which maturity combines with vigour. It is a blend of premium spirits made of Georgian grapes. Its time spent ageing in an oak barrel infuses it with complex aromas along with notes of dried fruits and prunes, cinnamon, vanilla and sweet spices, typical of lengthy ageing. Multi-layered in texture and luminous amber in tone, this is a perfectly balanced yet intense brandy."
    ],
    
  },  xo: {
    title: 'XO',
    image: xo,
    text: [
      "SARAJISHVILI XO is a distinguished product from the classic line of brandies. A special bouquet of spirits from selected Georgian grape varieties aged in oak casks is characterized by its remarkable dark amber color, an exquisite and harmonious bouquet, as well as soft velvet taste. While tasting this fine brandy one is able to pick out the intense notes of vanilla, chocolate and oak, feel distinguished aromas of almond and leather."
    ],
    
  },
  trilogy: {
    title: 'trilogy',
    image: trilogy,
    text: [
      "A history dates back to 1884 when David Sarajishvili founded the wine brandy production in Georgia by using the classic technology. Thanks to traditions, aspiration to novelties and constant creative searching, Sarajishvili House manages to maintain high-quality production and establish a name of one of the remarkable brands. The history goes on and distinguished alcoholic beverages are created by using the ancient, manifold spirits of Sarajishvili House. The recent achievement of this continuous process is TRILOGY, where the main concept of the product is expressed in its name. TRILOGY is a result of inspiration based on an idea of uniting past and present. One of the most refined products of Sarajishvili House is a harmonious synthesis of XIX, XX and XXI centuries, three grape types, and three regions of Georgia. Apart from its century-old aging, the secret of TRILOGY lies in special grape varieties selected from three different Georgian micro zones having particular climatic conditions. This unique drink is a harmonic blend of Tsitska from Imereti, Chinuri from Kartli and Rkatsiteli from Kakheti. TRILOGY is blessed by the wealth that the drink acquires only through aging. It has distinctive color of dark gold obtained from oak casks, also the smoothness and softness acquired through many years of aging. As the fusion of three millennia, this unique blend has the age of 65 years. Thanks to blending eastern and western zones of Georgia in one drink, it acquires exotic, distinguished aromas and more intensively highlights the uniqueness of its main concept. A master has creatively transformed the idea of TRILOGY in the sophisticated design of a carafe. Inspired by its special concept, the carafe is a combination of three triangles, manifested by the triangle-shaped bottle. This extraordinarily and refined object has a crystal closure as a final accord repeating a shape of the carafe. The harmonious combination of ancient, refined drink and unordinary shapes of the carafe turns the TRILOGY concept into reality."
    ],
    
  },

 
  sarajishvili1941: {
    title: 'Sarajishvili 1941',
    image: Sarajishvili1941,
    text: [
      'Year:',
      '1941',
      'Region:',
      'Kakheti, Ikalto-Kurdgelauri and Tsinandali microzones;',
      'Grape Variety:',
      'Rkatsiteli, Mtsvane;',
      'Color:',
      'Pleasant, clear dark gold;',
      'Aroma:',
      'Complex, with tones of antiquity combined harmoniously with aromas of dried fruit, honey, bread crust, slightly notable vanilla and chocolate;',
      'Taste:',
      'Rich, thick, tender, and velvety at the same time.',
    ],
    
  },
  sarajishvili1953: {
    title: 'Sarajishvili 1953',
    image: Sarajishvili1953,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    
  },
  sarajishvili1955: {
    title: 'Sarajishvili 1955',
    image: Sarajishvili1955,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    
  },
  sarajishvili1956: {
    title: 'Sarajishvili 1956',
    image: Sarajishvili1956,
    text: [
      'Year:',
      '1956',
      'Region:',
      'Imereti, the Zestaponi-Terjola microzone',
      'Grape Variety:',
      'Tsitska and Tsolikauri',
      'Color:',
      'Clear gold',
      'Aroma:',
      'Rich, with pleasant aroma of fruit and wildflowers',
      'Taste:',
      'Delicate, harmonious, soft',
    ],
    
  },
  sarajishvili1957: {
    title: 'Sarajishvili 1957',
    image: Sarajishvili1957,
    text: [
      'Year:',
      '1957',
      'Region:',
      'Imereti, Vachevi-Zestaponi-Sviri microzone',
      'Grape Variety:',
      'Tsitska and Tsolikauri',
      'Color:',
      'Clear brown going to gold color',
      'Aroma:',
      'Refined, pleasant, fruit and berry tones wonderfully blended with oak wood and vanilla smell',
      'Taste:',
      'Smooth, harmonious, with tones of oldness',
    ],
    
  },
  sarajishvili1958: {
    title: 'Sarajishvili 1958',
    image: Sarajishvili1958,
    text: [
      'Year:',
      '1958',
      'Region:',
      'Zemo Imereti and partially, Shua Imereti: Dzirula, Dzirula-Kharagauli and Chiatura-Sachkhere, Zestaponi microzones',
      'Grape Variety:',
      'Tsolikauri, Tsitska',
      'Color:',
      'Gradient from clear dark beige to gold',
      'Aroma:',
      'Fragrances of fresh fruit and flowers, as well as vanilla saturated with oak timber tones',
      'Taste:',
      'Soft, harmonious',
    ],
    
  },
  sarajishvili1959: {
    title: 'Sarajishvili 1959',
    image: Sarajishvili1959,
    text: [
      'Year:',
      '1959',
      'Region:',
      'Kvemo Kartli: Bolnisi, Marneuli, Gardabani, Tetri Tskaro microzones',
      'Grape Variety:',
      'Rkatsiteli',
      'Color:',
      'Gold',
      'Aroma:',
      'Pleasant, delicate, with tones of caramel, dried fruit, spicy vanilla, and oak timber',
      'Taste:',
      'Full, rich, with slight spicy bitterness typical to aged brandy',
    ],
    
  },
  sarajishvili1960: {
    title: 'Sarajishvili 1960',
    image: Sarajishvili1960,
    text: [
      'Year:',
      '1960',
      'Region:',
      'Kvemo Kartli: Bolnisi, Marneuli, Gardabani, Tetri Tskaro microzones',
      'Grape Variety:',
      'Rkatsiteli',
      'Color:',
      'Dark gold',
      'Aroma:',
      'Diverse, with delicate aroma of wildflowers, dried fruit, and caramel',
      'Taste:',
      'Soft, harmonious, with tones of antiquity',
    ],
  },
  sarajishvili1964: {
    title: 'Sarajishvili 1964',
    image: Sarajishvili1964,
    text: [
      'Year:',
      '1964',
      'Region:',
      'Imereti, Vartsikhe, Dimi, Rokiti microzones',
      'Grape Variety:',
      'Tsolikauri, Tsitska',
      'Color:',
      'From amber to dark gold',
      'Aroma:',
      'Delicate, pleasant, with an incredible blend of fruit and berry tones mixed with oak timber and vanilla fragrances',
      'Taste:',
      'Delicate, soft',
    ],
    
  },
  sarajishvili1968: {
    title: 'Sarajishvili 1968',
    image: Sarajishvili1968,
    text: [
      'Year:',
      '1968',
      'Region:',
      'Imereti, Baghdati-Vartsikhe microzone',
      'Grape Variety:',
      'Tsitska and Tsolikauri',
      'Color:',
      'Attractive, clear transparent, dark amber color going to gold',
      'Aroma:',
      'Complicated, versatile, fruit and flower smell harmoniously blends with oak and chocolate tones',
      'Taste:',
      'Smooth, harmonious, with tones of oldness',
    ],
    
  },
  sarajishvili1969: {
    title: 'Sarajishvili 1969',
    image: Sarajishvili1969,
    text: [
      'Year:',
      '1969',
      'Region:',
      'Kartli, the Aghaiani-Kaspi-Mukhrani-Mtskheta microzone',
      'Grape Variety:',
      'Chinuri, Goruli Mtsvane',
      'Color:',
      'From amber to dark gold',
      'Aroma:',
      'Rich and diverse, with tones of dried fruit, caramel, and oak timber',
      'Taste:',
      'Full, rich, with slight spicy bitterness typical to aged brandy',
    ],
    
  },
  sarajishvili1970: {
    title: 'Sarajishvili 1970',
    image: Sarajishvili1970,
    text: [
      'Year:',
      '1970',
      'Region:',
      'Kakheti region, Kvareli district, the Shilda-Eniseli microzone',
      'Grape Variety:',
      'Tsitska, Tsolikauri',
      'Color:',
      'Clear gold',
      'Aroma:',
      'Delicate, mild, with diverse aromas of fruit and wildflowers',
      'Taste:',
      'Harmonious, soft, with a spicy hint of oak',
    ],
    
  },
  sarajishvili1974: {
    title: 'Sarajishvili 1974',
    image: Sarajishvili1974,
    text: [
      'Year:',
      '1970',
      'Region:',
      'Kakheti region, Kvareli district, the Shilda-Eniseli microzone',
      'Grape Variety:',
      'Tsitska, Tsolikauri',
      'Color:',
      'Clear gold',
      'Aroma:',
      'Delicate, mild, with diverse aromas of fruit and wildflowers',
      'Taste:',
      'Harmonious, soft, with a spicy hint of oak',
    ],
    
  },
  sarajishvili1973: {
    title: 'Sarajishvili 1973',
    image: Sarajishvili1973,
    text: [
      'Year:',
      '1973',
      'Region:',
      'Kakheti, Kvareli region, Shilda-Eniseli microzone',
      'Grape Variety:',
      'Rkatsiteli',
      'Color:',
      'From clear brown color goes to gold',
      'Aroma:',
      'Versatile, fruit and flower smells harmoniously blend with piquant oak wood tones',
      'Taste:',
      'Pleasant, refined, with slight taste of caramel and oak wood',
    ],
    
  },
  sarajishvili1976: {
    title: 'Sarajishvili 1976',
    image: Sarajishvili1976,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    
  },
  sarajishvili1977: {
    title: 'Sarajishvili 1977',
    image: Sarajishvili1977,
    text: [
      'Year:',
      '1977',
      'Region:',
      'Kakheti, the Gremi-Shilda-Sabue-Eniseli microzone',
      'Grape Variety:',
      'Rkatsiteli',
      'Color:',
      'Dark gold',
      'Aroma:',
      'Black plum, almond, bread crust, with spicy chocolate aroma',
      'Taste:',
      'Soft, harmonious',
    ],
    
  },
  sarajishvili1979: {
    title: 'Sarajishvili 1979',
    image: Sarajishvili1979,
    text: [
      'Year:',
      '1979',
      'Region:',
      'Imereti, the Dzirula-Kharagauli and Chiatura-Sachkhere microzones',
      'Grape Variety:',
      'Tsolikauri, Tsitska',
      'Color:',
      'Gradient from clear dark beige to gold',
      'Aroma:',
      'Rich, diverse, with delicate aroma of flower blossoms, dried fruit, and caramel',
      'Taste:',
      'Delicate, soft, with spicy oak tones typical to aged cognac',
    ],
    
  },
  sarajishvili1980: {
    title: 'Sarajishvili 1980',
    image: Sarajishvili1980,
    text: [
      'Year:',
      '1980',
      'Region:',
      'Kartli, the Shilda-Eniseli microzone',
      'Grape Variety:',
      'Rkatsiteli',
      'Color:',
      'Gold',
      'Aroma:',
      'Delicate, harmonious, with tones of black plum, almond, and spicy oak',
      'Taste:',
      'Soft, delicate, with a hint of caramel and oak timber',
    ],
    
  },
  sarajishvili1946: {
    title: 'Sarajishvili 1946',
    image: Sarajishvili1946,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    
  },
  sarajishvili1947: {
    title: 'Sarajishvili 1947',
    image: Sarajishvili1947,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    
  },
  sarajishvili1949: {
    title: 'Sarajishvili 1949',
    image: Sarajishvili1949,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    
  },
  sarajishvili1950: {
    title: 'Sarajishvili 1950',
    image: Sarajishvili1950,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    
  },
  sarajishvili1952: {
    title: 'Sarajishvili 1952',
    image: Sarajishvili1952,
    text: [
      'White dry wine',
      '700ml',
      'Marnaveli',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laborum sed illo fugiat. Suscipit accusamus molestiae impedit, nemo iusto numquam labore assumenda, a quae, consequuntur tenetur tempora sint ratione iste!',
    ],
    
  },
};

const ProductSeparate = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const product = productsData[productId]; // Use product ID to find data

  return (
    <div className="container">
      <div className="image-section">
        <img
          src={product.image}
          alt={productId}
          className="image"
        />
      </div>
      <div className="text-section">
        {/* Display the title above the text */}
        <h1 style={{ fontFamily: "Carattere, cursive" }}>{product.title}</h1>

        {product.text.map((line, index) => {
          const isTitle = line.endsWith(':');
          return isTitle ? (
            <h2 key={index} className="subtitle">
              {line}
            </h2>
          ) : (
            <p key={index} className="description">
              {line}
            </p>
          );
        })}
        {/* Add the download link for the specific product PDF below the text */}
        <div className="download-section">
          <a href={product.pdf} download={`${productId}Details.pdf`}>
            Download {product.title} Product Details PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSeparate;

