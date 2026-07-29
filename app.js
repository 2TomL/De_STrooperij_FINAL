const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

document.querySelectorAll('.dropdown-content button').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        console.log('Gekozen taal:', lang);
        alert('Taal geselecteerd: ' + lang);
    });
});

const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

function setLanguage(lang) {
  const selectedTranslations = translations[lang] || translations.nl;
  const fallbackTranslations = translations.nl;

  // Vertaal tekstinhoud
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translatedValue = selectedTranslations[key] ?? fallbackTranslations[key];
    if (translatedValue !== undefined) {
      // Render event1Text as HTML so the yellow info link appears
      if (key === 'event1Text') {
        el.innerHTML = translatedValue;
        // Add event listener to prevent default for INFO link
        const infoLinks = el.querySelectorAll('a[onclick*="openTotaLoodsInfoPopup"]');
        infoLinks.forEach(link => {
          link.addEventListener('click', function(e) { e.preventDefault(); openTotaLoodsInfoPopup(); });
        });
      } else {
        el.textContent = translatedValue;
      }
    }
  });
  // Vertaal tooltips (title)
  const tooltipElements = document.querySelectorAll('[data-i18n-title]');
  tooltipElements.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const translatedTitle = selectedTranslations[key] ?? fallbackTranslations[key];
    if (translatedTitle !== undefined) {
      el.title = translatedTitle;
    }
  });
}

const translations = {
  nl: {
    title: "De STrooperij",
    graffitiShowroomTooltip: "Graffiti Showroom",
    basketballTooltip: "3x3 Basketbal Inschrijven",
        home: "Home",
        mission: "Missie",
        events: "Events",
        about: "Over ons",
        contact: "Contact",
        
        missionTitle: "Missie",
        event2register3x3:"Inschrijven bball 3X3",
        missionIntro: "De STrooperij is een vriendengroep met elk hun eigen talenten. We organiseren unieke evenementen in onze geboortestad DieST, met als missie: mensen samenbrengen rond urban sports en cultuur. Sinds de eerste edities van Summer Jam (2002-2007) in het Warandepark, is de passie voor street culture altijd blijven leven. In 2018 bliezen we het concept nieuw leven in, en met groot succes, want in 2023 kregen we de Publieksprijs van de Cultuurraad van DieST. Het draait om creativiteit, sport, muziek, en verbinding – voor jong en oud.",
        sportTitle: "Sport",
        sportText: "Van skatecontest en 3x3 basketbal tot freerunning – sport is een vaste waarde bij elk event van De STrooperij. Lokale verenigingen zoals de Diestse Sharks en skaters nemen het voortouw in de organisatie. Bewegen, samenwerken en samen genieten.",
        artTitle: "Kunst",
        artText: "Graffiti-jams en live painting vormen een artistieke rode draad. Lokale kunstenaars krijgen een platform om hun creativiteit te tonen en jongeren worden aangemoedigd om te experimenteren. De STrooperij inspireert met kleur en expressie.",
        musicTitle: "Muziek",
        musicText: "Beats, livemuziek en DJ-sets brengen elk event tot leven. Tijdens Silent Disco en andere evenementen krijgen ook jonge, opkomende talenten een podium. De STrooperij gelooft in de kracht van muziek om mensen te verbinden.",
        eventsTitle: "EVENTS",
        mastaAceTitle: "Masta Ace",
        mastaAceSubtitle: "w/ live band Champion sound, 25e verjaardag van het album 'Disposable Arts'",
        mastaAceDate: "mei 2026",
        mastaAceText: "Timetable: 19.00: deuren / 20.00: warmup door DJ's 21 en Jack / 21.00: Masta Ace / 22.30: afterparty / 1.00: einde",
        mastaAceTickets: "TICKETS (Uitverkocht)",
        event1Title: "Total Loods",
        event1Date: "april 2026",
        event1Text: "In de loods op de Citadel organiseert De Strooperij een laatste editie van Total Loods: een graffitifestival met games, sport en een silent disco. Alle info vind je hier >>> <a href=\"#\" onclick=\"openTotaLoodsInfoPopup()\" style=\"color:#ff9900;font-weight:700;text-decoration:underline;\">INFO</a>",
        event1register: "Inschrijven Silent Disco (Uitverkocht)",
        silentdiscoTooltip: "Silent Disco Inschrijven",
        event2Title: "Summer Jam",
        event2Date: "augustus 2026",
        event2Text: "Terug in het Warandepark – de thuisbasis – brengt Summer Jam opnieuw een dag vol urban sports en muziek. Verwacht een skatecontest, graffiti-jam, 3on3 basketbal, hiphop-breakdance, freerunning en kinderanimatie. ’s Avonds sluiten we af met een spectaculaire feest in het park.",
        summerJamInfoTitle: "SUMMER JAM 2026",
        summerJamInfoIntro: "Op zaterdag 29 augustus bruist het Warandepark tijdens Summer Jam 2026!",
        summerJamInfoTagline: "De STrooperij organiseert een dag vol sport, creativiteit en street culture.",
        summerJamInfoTimeLabel: "De toegang is gratis — vanaf 12 uur kan je er terecht voor:",
        summerJamInfoBullet1: "Graffitijam met meer dan 20 artiesten",
        summerJamInfoBullet2: "3x3 basketbaltornooi",
        summerJamInfoBullet3: "Inline skate youth competition van 12u tot 15u — inschrijven ter plaatse",
        summerJamInfoBullet4: "Laid-back skatejam vanaf 15u — geen inschrijving nodig",
        summerJamInfoBullet5: "Breakdanceworkshops en battles met U2S",
        summerJamInfoBullet6: "Hiphopdans met studio Yo!",
        summerJamInfoBullet7: "Meerdere fingerboard parken",
        summerJamInfoBullet8: "Drinks & bites",
        summerJamInfoEvening: "’s Avonds: Open-airparty",
        summerJamInfoLineupTitle: "Dans onder de sterren met een stevige line-up van lokale en nationale talenten:",
        summerJamInfoLineup1: "19u — MX Veader",
        summerJamInfoLineup2: "20u — Drone",
        summerJamInfoLineup3: "21u — DJ 21",
        summerJamInfoLineup4: "22u — Grazzhoppa",
        summerJamInfoLineup5: "23u — Les Craven & Kim Martini (Back 2 Back)",
        summerJamInfoLineup6: "00u — Victor Cacciato",
        summerJamInfoLineup7: "01u — Jack",
        summerJamInfoLineup8: "02u — DJ Vega (Stikstof / Frontal)",
        summerJamInfoLineup9: "03u — Berre",
        event3Title: "Sponsors",
        event3Date: "Welgemeende dikke merci",
        event3Text: "Een oprechte dankjewel aan al onze sponsors en vrijwilligers. Dankzij jullie steun, vertrouwen en inzet kan De STrooperij blijven groeien en mensen samenbrengen.",
      lang_nl: "NL",
      lang_en: "EN",
      lang_fr: "FR",
      lang_nl_title: "Nederlands",
      lang_en_title: "Engels",
      lang_fr_title: "Frans",
      home_welcome: "Welkom",
      home_at: "bij",
      home_dst: "De STrooperij",
      mission_download_title: "Download het eventoverzicht (PDF)",
      mission_download_label: "De STrooperij 2025 - events.pdf",
      slideshow_prev: "Vorige",
      slideshow_next: "Volgende",
      slideshow_close_title: "Sluiten",
      event_graffiti_slideshow_title: "Foto slideshow",
      event_map_title: "Kaart",
      video_play_title: "Video afspelen",
      event_info_title: "Info",
        event4Text: "De STrooperij denkt verder dan events. Zo helpen we mee aan de renovatie van de Citadel en ondersteunen we creatieve jongeren via TEXTUUR – een loods aan de Nijverheidslaan die dienstdoet als creatieve uitvalsbasis. Hier kunnen jongeren muziek maken, creëren en experimenteren.",
        aboutTitle: "Over ons",
        aboutSubtitle: "De CREW",
        aboutText: "De STrooperij begon als een vriendengroep met een passie voor hun stad DieST. Doorheen de jaren groeide het collectief uit tot een vzw die cultuur en sport toegankelijk maakt voor iedereen. Dankzij de steun van vrijwilligers, verenigingen, sponsors en de stad Diest blijft hun impact groeien. Het draait om kansen geven, samenwerken, en bouwen aan een warme, creatieve community.",
        contactTitle: "Contact",
        ticketTitle: "Tickets",
        ticketText: "Koop hier (Uitverkocht)",
        emailTitle: "Email",
        emailText: "summerjam2.0@hotmail.com",
        volunteerTitle: "Vrijwilligers",
        volunteerText: "Wil je meehelpen op ons volgende event?",
        footerByPrefix: "Gemaakt door",
        footerFacebookTooltip: "Volg ons op Facebook",
        footerInstagramTooltip: "Volg ons op Instagram",
        footerAuthorTooltip: "Hier mijn werk",
        totalLoods_title: "TOTAL LOODS",
        totalLoods_subtitle: "⚠️ Graffitifestival met straatsport en silent disco ⚠️",
        totalLoods_location: "Loods Citadel Diest",
        totalLoods_bar_title: "BAR LOODS",
        totalLoods_bar_date: "📅 Vrijdag, 24 april 2026 van 16u tot 23u",
        totalLoods_games_title: "GRAFFITI AND GAMES:",
        totalLoods_game_pingpong: "Ping pong",
        totalLoods_game_kicker: "Kicker",
        totalLoods_game_flipperkast: "Flipperkast",
        totalLoods_game_boogschieten: "Boogschieten",
        totalLoods_game_darts: "Darts",
        totalLoods_game_spikeball: "Spike ball",
        totalLoods_game_kubb: "Kubb",
        totalLoods_game_nagelskloppen: "Nagels kloppen",
        totalLoods_food_quesa: "FOOD: quesadillas",
        totalLoods_total_title: "TOTAL LOODS",
        totalLoods_total_date: "📅 Zaterdag, 25 april 2026 van 13u tot 19u",
        totalLoods_panna: "Pannatornooi <br>✔️ Alle leeftijden <br>✔️ Demo van Martijn Debbaut (15u15)",
        totalLoods_graffitijam: "Graffitijam: Cecko, Tuzq, Kiwi, 2.Dirty, Nupstr, Meerkat, L’Oxien, Stab, Skill, Rise, Sawer, Smok, Deejoohcee, Bird, Ridha, K.Shit, Jayder, Creol",
        totalLoods_skate: "Skatecontest:<br>✔️ 13u – 14u30: beginners / kids (by Nina Skates)<br>✔️ 14u30-18u: gevorderden (by Level 8 )",
        totalLoods_breakdance: "Breakdance: demo’s en initiatie (by U2S Breaking Academy)",
        totalLoods_freerun: "Free Running Area (by FreeRunningDiest)",
        totalLoods_hiphop: "Hip Hop Flash Dances (by Studio YO!)",
        totalLoods_kids: "Kids corner + obstakel luchtkussen",
        totalLoods_inschrijven: "➡️ Inschrijven ter plaatse!",
        totalLoods_food_pizza: "FOOD: comfort pizza by COMPA",
        totalLoods_silent_title: "SILENT DISCO",
        totalLoods_silent_date: "📅 Zaterdag, 25 april 2026 van 21u tot 3u",
        totalLoods_silent_3bars: "3 discobars",
        totalLoods_silent_line1: "Les Craven – Kim Martini - Conform / Makadam",
        totalLoods_silent_line2: "Brainfart Deluxe ft. WD-40 - Discobar De Max - Dafi",
        totalLoods_silent_line3: "DJ 21 - Jack – Berre"
    },
  en: {
    title: "De STrooperij",
    graffitiShowroomTooltip: "Graffiti Showroom",
    basketballTooltip: "Register for 3x3 Basketball",
        home: "Home",
        mission: "Mission",
        events: "Events",
        about: "About us",
        contact: "Contact",
        
        missionTitle: "Mission",
        event2register3x3: "Register bball 3X3",
        missionIntro: "De STrooperij is a group of friends, each with their own talents. We organize unique events in our hometown DieST with one mission: bringing people together through urban sports and culture. Since the early editions of Summer Jam (2002–2007) in Warande Park, our passion for street culture has never faded. In 2018, we revived the concept with great success – in 2023 we won the Audience Award from DieST’s Culture Council. It's all about creativity, sports, music, and connection – for young and old.",
        sportTitle: "Sports",
        sportText: "From skate contests and 3x3 basketball to freerunning – sports are a staple at every De STrooperij event. Local organizations like the Diest Sharks and skaters take the lead in planning. Movement, collaboration, and shared fun.",
        artTitle: "Art",
        artText: "Graffiti jams and live painting are an artistic common thread. Local artists are given a platform to showcase their creativity, and young people are encouraged to experiment. De STrooperij inspires with color and expression.",
        musicTitle: "Music",
        musicText: "Beats, live music, and DJ sets bring every event to life. During Silent Disco and other events, young, emerging talents also get their moment on stage. De STrooperij believes in the power of music to connect people.",
        eventsTitle: "EVENTS",
        mastaAceTitle: "Masta Ace",
        mastaAceSubtitle: "w/ live band Champion sound, 25th anniversary of the album 'Disposable Arts'",
        mastaAceDate: "May 2026",
        mastaAceText: "Timetable: 19:00: doors / 20:00: warmup by DJ's 21 and Jack / 21:00: Masta Ace / 22:30: afterparty / 1:00: end",
        mastaAceTickets: "TICKETS (Sold Out)",
        event1Title: "Total Loods",
        event1Date: "April 2026",
        event1Text: "In the warehouse at the Citadel, De Strooperij organizes a final edition of Total Loods: a graffiti festival with games, sports, and a silent disco. Find all info here >>> <a href=\"#\" onclick=\"openTotaLoodsInfoPopup()\" style=\"color:#ff9900;font-weight:700;text-decoration:underline;\">INFO</a>",
        event1register: "Register Silent Disco (Sold Out)",
        silentdiscoTooltip: "Register for Silent Disco",
        event2Title: "Summer Jam",
        event2Date: "August 2026",
        event2Text: "Back in Warande Park – our home base – Summer Jam brings another day of urban sports and music. Expect a skate contest, graffiti jam, 3-on-3 basketball, hiphop-breakdance, freerunning, and kids entertainment. In the evening, we wrap up with a spectacular party in the park.",
        event3Title: "Sponsors",
        event3Date: "A heartfelt thank you",
        event3Text: "A sincere thank you to all our sponsors and volunteers. Thanks to your support, trust, and dedication, De STrooperij can keep growing and bringing people together.",
        event4Title: "More than events",
        event4Date: "Ongoing and everywhere",
      lang_nl: "NL",
      lang_en: "EN",
      lang_fr: "FR",
      lang_nl_title: "Dutch",
      lang_en_title: "English",
      lang_fr_title: "French",
      home_welcome: "Welcome",
      home_at: "at",
      home_dst: "De STrooperij",
      mission_download_title: "Download the event overview (PDF)",
      mission_download_label: "De STrooperij 2025 - events.pdf",
      video_play_title: "Play video",
      event_info_title: "Info",
  slideshow_prev: "Previous",
  slideshow_next: "Next",
  slideshow_close_title: "Close",
  event_graffiti_slideshow_title: "Picture slideshow",
  event_map_title: "Map",
        event4Text: "De STrooperij thinks beyond events. We contribute to the renovation of the Citadel and support creative youth through TEXTUUR – a warehouse on Nijverheidslaan that serves as a creative base. Here, young people can make music, create, and experiment.",
        aboutTitle: "About us",
        aboutSubtitle: "The CREW",
        aboutText: "De STrooperij started as a group of friends with a passion for their city, DieST. Over the years, the collective has grown into a non-profit organization making culture and sports accessible to all. Thanks to the support of volunteers, associations, sponsors, and the city of DieST, their impact continues to grow. It's about creating opportunities, working together, and building a warm, creative community.",
        contactTitle: "Contact",
        ticketTitle: "Tickets",
        ticketText: "Buy here (Sold Out)",
        emailTitle: "Email",
        emailText: "summerjam2.0@hotmail.com",
        volunteerTitle: "Volunteers",
        volunteerText: "Want to help out at our next event?",
        footerByPrefix: "Built by",
        footerFacebookTooltip: "Follow us on Facebook",
        footerInstagramTooltip: "Follow us on Instagram"
      , footerAuthorTooltip: "See my work",
      totalLoods_title: "TOTAL LOODS",
      totalLoods_subtitle: "⚠️ Graffiti festival with street sports and silent disco ⚠️",
      totalLoods_location: "Citadel Warehouse Diest",
      totalLoods_bar_title: "BAR LOODS",
      totalLoods_bar_date: "📅 Friday, April 24, 2026 from 16:00 to 23:00",
      totalLoods_games_title: "GRAFFITI AND GAMES:",
      totalLoods_game_pingpong: "Ping pong",
      totalLoods_game_kicker: "Table football",
      totalLoods_game_flipperkast: "Pinball",
      totalLoods_game_boogschieten: "Archery",
      totalLoods_game_darts: "Darts",
      totalLoods_game_spikeball: "Spike ball",
      totalLoods_game_kubb: "Kubb",
      totalLoods_game_nagelskloppen: "Hammer the nails",
      totalLoods_food_quesa: "FOOD: quesadillas",
      totalLoods_total_title: "TOTAL LOODS",
      totalLoods_total_date: "📅 Saturday, April 25, 2026 from 13:00 to 19:00",
      totalLoods_panna: "Panna tournament <br>✔️ All ages <br>✔️ Demo by Martijn Debbaut (15:15)",
      totalLoods_graffitijam: "Graffiti jam: Cecko, Tuzq, Kiwi, 2.Dirty, Nupstr, Meerkat, L’Oxien, Stab, Skill, Rise, Sawer, Smok, Deejoohcee, Bird, Ridha, K.Shit, Jayder, Creol",
      totalLoods_skate: "Skate contest:<br>✔️ 13:00 – 14:30: beginners / kids (by Nina Skates)<br>✔️ 14:30-18:00: advanced (by Level 8)",
      totalLoods_breakdance: "Breakdance: demos and initiation (by U2S Breaking Academy)",
      totalLoods_freerun: "Free Running Area (by FreeRunningDiest)",
      totalLoods_hiphop: "Hip Hop Flash Dances (by Studio YO!)",
      totalLoods_kids: "Kids corner + obstacle bouncy castle",
      totalLoods_inschrijven: "➡️ Register on site!",
      totalLoods_food_pizza: "FOOD: comfort pizza by COMPA",
      totalLoods_silent_title: "SILENT DISCO",
      totalLoods_silent_date: "📅 Saturday, April 25, 2026 from 21:00 to 3:00",
      totalLoods_silent_3bars: "3 disco bars",
      totalLoods_silent_line1: "Les Craven – Kim Martini - Conform / Makadam",
      totalLoods_silent_line2: "Brainfart Deluxe ft. WD-40 - Discobar De Max - Dafi",
      totalLoods_silent_line3: "DJ 21 - Jack – Berre"
    },
  fr: {
    title: "De STrooperij",
    graffitiShowroomTooltip: "Showroom Graffiti",
    basketballTooltip: "Inscription Basket 3x3",
        home: "Accueil",
        mission: "Mission",
        events: "Événements",
        about: "À propos",
        contact: "Contact",
        home_welcome: "Bienvenue",
        home_at: "chez",
        home_dst: "De STrooperij",
        
        missionTitle: "Mission",
        event2register3x3: "Inscription bball 3X3",
        missionIntro: "De STrooperij est un groupe d’amis, chacun avec ses propres talents. Nous organisons des événements uniques dans notre ville natale de DieST avec une mission : rassembler les gens autour des sports urbains et de la culture. Depuis les premières éditions de Summer Jam (2002–2007) au parc Warande, notre passion pour la culture urbaine n’a jamais cessé. En 2018, nous avons relancé le concept avec grand succès – en 2023, nous avons reçu le Prix du Public du Conseil de la Culture de DieST. Il s'agit de créativité, de sport, de musique et de connexion – pour les jeunes et les moins jeunes.",
        sportTitle: "Sport",
        sportText: "Des concours de skate et du basket 3x3 au freerun – le sport est une valeur sûre lors de chaque événement de De STrooperij. Des associations locales comme les Diest Sharks et des skateurs prennent les devants dans l’organisation. Bouger, collaborer et profiter ensemble.",
        artTitle: "Art",
        artText: "Jams de graffiti et les performances de peinture en direct forment un fil conducteur artistique. Les artistes locaux disposent d’une plateforme pour montrer leur créativité, et les jeunes sont encouragés à expérimenter. De STrooperij inspire avec des couleurs et de l’expression.",
        musicTitle: "Musique",
        musicText: "Beats, la musique live et des DJ sets donnent vie à chaque événement. Lors de la Silent Disco et d'autres événements, de jeunes talents émergents montent également sur scène. De STrooperij croit au pouvoir de la musique pour rassembler les gens.",
        eventsTitle: "ÉVÉNEMENTS",
        mastaAceTitle: "Masta Ace",
        mastaAceSubtitle: "w/ live band Champion sound, 25e anniversaire de l'album 'Disposable Arts'",
        mastaAceDate: "mai 2026",
        mastaAceText: "Horaire : 19h00 : portes / 20h00 : warm-up par les DJ 21 et Jack / 21h00 : Masta Ace / 22h30 : afterparty / 1h00 : fin",
        mastaAceTickets: "TICKETS (Complet)",
        event1Title: "Total Loods",
        event1Date: "avril 2026",
        event1Text: "Dans l'entrepôt de la Citadelle, De Strooperij organise une dernière édition de Total Loods : un festival graffiti avec jeux, sport et une silent disco. Toutes les infos ici >>> <a href=\"#\" onclick=\"openTotaLoodsInfoPopup()\" style=\"color:#ff9900;font-weight:700;text-decoration:underline;\">INFO</a>",
        event1register: "Inscription Silent Disco (Complet)",
        silentdiscoTooltip: "Inscription Silent Disco",
        event2Title: "Summer Jam",
        event2Date: "août 2026",
        event2Text: "De retour au parc Warande – notre base – le Summer Jam propose à nouveau une journée de sports urbains et de musique. Attendez-vous à un concours de skate, un graffiti jam, du basket 3 contre 3, du hiphop et breakdance, du freerun et des animations pour enfants. La soirée se termine par un fête spectaculaire dans le parc.",
        event3Title: "Sponsors",
        event3Date: "Un grand merci",
        event3Text: "Un grand merci à tous nos sponsors et bénévoles. Grâce à votre soutien, votre confiance et votre engagement, De STrooperij peut continuer à grandir et à rassembler les gens.",
        event4Title: "Plus que des événements",
        event4Date: "En continu et partout",
        event4Text: "De STrooperij va plus loin que les événements. Nous participons à la rénovation de la Citadelle et soutenons les jeunes créatifs via TEXTUUR – un entrepôt situé rue de l’Industrie servant de base créative. Les jeunes peuvent y faire de la musique, créer et expérimenter.",
        aboutTitle: "À propos",
        aboutSubtitle: "La CREW",
        aboutText: "De STrooperij a commencé comme un groupe d’amis passionnés par leur ville, DieST. Au fil des années, le collectif est devenu une ASBL qui rend la culture et le sport accessibles à tous. Grâce au soutien des bénévoles, des associations, des sponsors et de la ville de DieST, leur impact ne cesse de croître. Il s’agit de donner des opportunités, de collaborer, et de construire une communauté chaleureuse et créative.",
        contactTitle: "Contact",
        ticketTitle: "Tickets",
        ticketText: "Achetez ici (Complet)",
        mission_download_title: "Télécharger l'aperçu des événements (PDF)",
        video_play_title: "Lire la vidéo",
        event_info_title: "Info",
    slideshow_prev: "Précédent",
    slideshow_next: "Suivant",
    slideshow_close_title: "Fermer",
    event_graffiti_slideshow_title: "Diaporama photos",
    event_map_title: "Carte",
    emailTitle: "Email",
    emailText: "summerjam2.0@hotmail.com",
    volunteerTitle: "Bénévoles",
    volunteerText: "Envie de nous aider lors de notre prochain événement ?",
  footerByPrefix: "Créé par",
    footerFacebookTooltip: "Suivez-nous sur Facebook",
  footerInstagramTooltip: "Suivez-nous sur Instagram"
  , footerAuthorTooltip: "Voir mon travail",
  totalLoods_title: "TOTAL LOODS",
  totalLoods_subtitle: "⚠️ Festival graffiti avec sports urbains et silent disco ⚠️",
  totalLoods_location: "Entrepôt Citadelle Diest",
  totalLoods_bar_title: "BAR LOODS",
  totalLoods_bar_date: "📅 Vendredi 24 avril 2026 de 16h à 23h",
  totalLoods_games_title: "GRAFFITI ET JEUX :",
  totalLoods_game_pingpong: "Ping pong",
  totalLoods_game_kicker: "Baby-foot",
  totalLoods_game_flipperkast: "Flipper",
  totalLoods_game_boogschieten: "Tir à l’arc",
  totalLoods_game_darts: "Fléchettes",
  totalLoods_game_spikeball: "Spike ball",
  totalLoods_game_kubb: "Kubb",
  totalLoods_game_nagelskloppen: "Taper des clous",
  totalLoods_food_quesa: "FOOD : quesadillas",
  totalLoods_total_title: "TOTAL LOODS",
  totalLoods_total_date: "📅 Samedi 25 avril 2026 de 13h à 19h",
  totalLoods_panna: "Tournoi panna <br>✔️ Tous âges <br>✔️ Démo de Martijn Debbaut (15h15)",
  totalLoods_graffitijam: "Graffitijam : Cecko, Tuzq, Kiwi, 2.Dirty, Nupstr, Meerkat, L’Oxien, Stab, Skill, Rise, Sawer, Smok, Deejoohcee, Bird, Ridha, K.Shit, Jayder, Creol",
  totalLoods_skate: "Skatecontest :<br>✔️ 13h – 14h30 : débutants / enfants (par Nina Skates)<br>✔️ 14h30-18h : avancés (par Level 8)",
  totalLoods_breakdance: "Breakdance : démos et initiation (par U2S Breaking Academy)",
  totalLoods_freerun: "Free Running Area (par FreeRunningDiest)",
  totalLoods_hiphop: "Hip Hop Flash Dances (par Studio YO!)",
  totalLoods_kids: "Kids corner + château gonflable obstacle",
  totalLoods_inschrijven: "➡️ Inscription sur place !",
  totalLoods_food_pizza: "FOOD : comfort pizza by COMPA",
  totalLoods_silent_title: "SILENT DISCO",
  totalLoods_silent_date: "📅 Samedi 25 avril 2026 de 21h à 3h",
  totalLoods_silent_3bars: "3 discobars",
  totalLoods_silent_line1: "Les Craven – Kim Martini - Conform / Makadam",
  totalLoods_silent_line2: "Brainfart Deluxe ft. WD-40 - Discobar De Max - Dafi",
  totalLoods_silent_line3: "DJ 21 - Jack – Berre"
    }
};

  Object.assign(translations.en, {
    event2register3x3: "Register bball 3X3",
    summerJamInfoTitle: "SUMMER JAM 2026",
    summerJamInfoIntro: "On Saturday 29 August, Warande Park will come alive during Summer Jam 2026!",
    summerJamInfoTagline: "De STrooperij organizes a day full of sport, creativity and street culture.",
    summerJamInfoTimeLabel: "Entry is free — from 12:00 you can join for:",
    summerJamInfoBullet1: "Graffiti jam with more than 20 artists",
    summerJamInfoBullet2: "3x3 basketball tournament",
    summerJamInfoBullet3: "Inline skate youth competition from 12:00 to 15:00 — register on site",
    summerJamInfoBullet4: "Laid-back skatejam from 15:00 — no registration needed",
    summerJamInfoBullet5: "Breakdance workshops and battles with U2S",
    summerJamInfoBullet6: "Hip-hop dance with Studio Yo!",
    summerJamInfoBullet7: "Several fingerboard parks",
    summerJamInfoBullet8: "Drinks & bites",
    summerJamInfoEvening: "In the evening: Open-air party",
    summerJamInfoLineupTitle: "Under the stars with a strong line-up of local and national talent:",
    summerJamInfoLineup1: "19:00 — MX Veader",
    summerJamInfoLineup2: "20:00 — Drone",
    summerJamInfoLineup3: "21:00 — DJ 21",
    summerJamInfoLineup4: "22:00 — Grazzhoppa",
    summerJamInfoLineup5: "23:00 — Les Craven & Kim Martini (Back 2 Back)",
    summerJamInfoLineup6: "00:00 — Victor Cacciato",
    summerJamInfoLineup7: "01:00 — Jack",
    summerJamInfoLineup8: "02:00 — DJ Vega (Stikstof / Frontal)",
    summerJamInfoLineup9: "03:00 — Berre",
    summerJamInfoRegister: "Register 3X3"
  });

  Object.assign(translations.fr, {
    event2register3x3: "Inscription bball 3X3",
    summerJamInfoTitle: "SUMMER JAM 2026",
    summerJamInfoIntro: "Le samedi 29 août, le parc Warande s’anime pendant Summer Jam 2026 !",
    summerJamInfoTagline: "De STrooperij organise une journée pleine de sport, de créativité et de street culture.",
    summerJamInfoTimeLabel: "L’entrée est gratuite — à partir de 12h, vous pouvez y venir pour :",
    summerJamInfoBullet1: "Graffitijam avec plus de 20 artistes",
    summerJamInfoBullet2: "Tournoi de basketball 3x3",
    summerJamInfoBullet3: "Compétition youth inline skate de 12h à 15h — inscription sur place",
    summerJamInfoBullet4: "Laid-back skatejam à partir de 15h — aucune inscription nécessaire",
    summerJamInfoBullet5: "Workshops et battles de breakdance avec U2S",
    summerJamInfoBullet6: "Danse hip-hop avec Studio Yo !",
    summerJamInfoBullet7: "Plusieurs parcs de fingerboard",
    summerJamInfoBullet8: "Drinks & bites",
    summerJamInfoEvening: "Le soir : Open-airparty",
    summerJamInfoLineupTitle: "Sous les étoiles avec une belle line-up de talents locaux et nationaux :",
    summerJamInfoLineup1: "19h — MX Veader",
    summerJamInfoLineup2: "20h — Drone",
    summerJamInfoLineup3: "21h — DJ 21",
    summerJamInfoLineup4: "22h — Grazzhoppa",
    summerJamInfoLineup5: "23h — Les Craven & Kim Martini (Back 2 Back)",
    summerJamInfoLineup6: "00h — Victor Cacciato",
    summerJamInfoLineup7: "01h — Jack",
    summerJamInfoLineup8: "02h — DJ Vega (Stikstof / Frontal)",
    summerJamInfoLineup9: "03h — Berre",
    summerJamInfoRegister: "Inscription 3X3"
  });

  document.documentElement.lang = 'nl';
  setLanguage('nl');

// Functie om de video-popup te openen met de juiste video
function openVideoModal(videoPath) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("eventVideo");
    const source = document.getElementById("videoSource");

    source.src = videoPath;
    video.load();
    modal.style.display = "flex";
    video.play();
}

// Functie om de video-popup te sluiten
function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("eventVideo");

    video.pause();
    modal.style.display = "none";
}

// --- Graffiti Slideshow ---
let grafTImages = [
  'img/SJ-2025/1-IMG-20250827-WA0006.jpg',
  'img/SJ-2025/2-WhatsApp Image 2025-08-15 at 10.05.36_34b8d3db.jpg',
  'img/SJ-2025/3-IMG-20250827-WA0008.jpg',
  'img/SJ-2025/4-WhatsApp Image 2025-08-15 at 10.05.36_97d15007.jpg',
  'img/SJ-2025/5-IMG-20250827-WA0009.jpg',
  'img/SJ-2025/6-WhatsApp Image 2025-08-15 at 10.05.36_2dc345e6.jpg',
  'img/SJ-2025/7-IMG-20250827-WA0002.jpg',
  'img/SJ-2025/8-WhatsApp Image 2025-08-15 at 10.05.36_1be166a2.jpg',
  'img/SJ-2025/9-IMG-20250827-WA0004.jpg',
  'img/SJ-2025/10-WhatsApp Image 2025-08-15 at 10.05.36_243e04a1.jpg',
  'img/SJ-2025/11-IMG-20250827-WA0011.jpg',
  'img/SJ-2025/12-WhatsApp Image 2025-08-15 at 10.05.36_b2f8f34c.jpg',
  'img/SJ-2025/13-IMG-20250827-WA0010.jpg',
  'img/SJ-2025/14-IMG-20250827-WA0007.jpg',
  'img/SJ-2025/15-WhatsApp Image 2025-08-15 at 10.05.36_c9565aac.jpg',
  'img/SJ-2025/16-WhatsApp Image 2025-08-15 at 10.05.36_dd6e6790.jpg',
  'img/SJ-2025/17-IMG-20250827-WA0012.jpg',
  'img/SJ-2025/18-WhatsApp Image 2025-08-15 at 10.05.36_f94bfd56.jpg',
  'img/SJ-2025/19-WhatsApp Image 2025-08-15 at 10.05.37_1cb98c8a.jpg',
  'img/SJ-2025/20-WhatsApp Image 2025-08-27 at 07.56.30_f55dc03c.jpg',
  // overige foto's random
  'img/SJ-2025/WhatsApp Image 2025-08-15 at 10.05.37_370e8650.jpg',
  'img/SJ-2025/WhatsApp Image 2025-08-15 at 10.05.37_6a1d714f.jpg',
  'img/SJ-2025/WhatsApp Image 2025-08-15 at 10.05.37_92334d94.jpg',
  'img/SJ-2025/WhatsApp Image 2025-08-15 at 10.05.37_a17fd617.jpg',
  'img/SJ-2025/WhatsApp Image 2025-08-15 at 10.05.37_b1452ba7.jpg',
  'img/SJ-2025/WhatsApp Image 2025-08-15 at 10.05.37_e086e3bf.jpg',
  'img/SJ-2025/WhatsApp Image 2025-08-15 at 10.05.37_f54d8539.jpg',
  'img/SJ-2025/IMG-20250827-WA0003.jpg',
  'img/SJ-2025/IMG-20250827-WA0005.jpg'
];

let tLoodsImages = [
  'img/TLoods_2026/645804575_1420905153162145_7244970095252763401_n.jpg',
  'img/TLoods_2026/657206533_1439485374637456_5748628233573676717_n.jpg',
  'img/TLoods_2026/657418168_1439485527970774_6935635141032647674_n.jpg',
  'img/TLoods_2026/657516618_1439485421304118_5895610368449440443_n.jpg',
  'img/TLoods_2026/658133371_1439485334637460_4566339895416524886_n.jpg',
  'img/TLoods_2026/681274209_1466678715251455_8892182931781564646_n.jpg',
  'img/TLoods_2026/681882925_1466678868584773_8432391604521515327_n.jpg',
  'img/TLoods_2026/681883534_1466679068584753_5633065168713635748_n.jpg',
  'img/TLoods_2026/682652364_1466679185251408_2912864858730701980_n.jpg',
  'img/TLoods_2026/682713459_1466679035251423_8060993586093737964_n.jpg',
  'img/TLoods_2026/682964890_1466678928584767_2633150329182530748_n.jpg',
  'img/TLoods_2026/683368945_1466679101918083_5090348149983766920_n.jpg',
  'img/TLoods_2026/695822763_1478601810725812_6767877232313281451_n.jpg',
  'img/TLoods_2026/696085667_1478602277392432_4670531966593829894_n.jpg',
  'img/TLoods_2026/696089380_1478601504059176_2869855125637783790_n.jpg',
  'img/TLoods_2026/696136597_1478602100725783_2498626546505614322_n.jpg',
  'img/TLoods_2026/696157990_1478602227392437_4076122973109586969_n.jpg',
  'img/TLoods_2026/696165313_1478601710725822_3549515146318147166_n.jpg',
  'img/TLoods_2026/696222164_1478602020725791_5264603213625520437_n.jpg',
  'img/TLoods_2026/696240165_1478601970725796_5498267398024120868_n.jpg',
  'img/TLoods_2026/696269880_1478601577392502_2447749742565909835_n.jpg',
  'img/TLoods_2026/696485421_1478601764059150_8762368052821047608_n.jpg',
  'img/TLoods_2026/696920976_1478601860725807_1563475090847926121_n.jpg',
  'img/TLoods_2026/697077976_1478602060725787_4690216208307437998_n.jpg',
  'img/TLoods_2026/697301313_1478601657392494_3531572273678414577_n.jpg',
  'img/TLoods_2026/698583699_1478602144059112_719114610310038277_n.jpg',
  'img/TLoods_2026/699158522_1478601920725801_1134918368154622457_n.jpg',
  'img/TLoods_2026/699171587_1478601620725831_8658359483819748229_n.jpg',
  'img/TLoods_2026/699597450_1478602177392442_6936307838782292572_n.jpg'
];

let mastaAceImages = [
  'img/Masta_Ace/pics/WhatsApp Image 2026-05-08 at 16.07.48.jpeg'
];

// Keep this array ready: add video paths here once files are available in img/Masta_Ace/video
let mastaAceVideos = [];

let grafTIndex = 0;
let activeSlideshowImages = grafTImages;

function openSlideshow(images) {
  activeSlideshowImages = images;
  if (!activeSlideshowImages || activeSlideshowImages.length === 0) {
    document.getElementById('grafTImage').src = '';
  } else {
    grafTIndex = 0;
    document.getElementById('grafTImage').src = activeSlideshowImages[grafTIndex];
  }
  var navBtns = document.querySelector('.grafT-nav-btns');
  if (navBtns) navBtns.style.display = '';
  document.getElementById('grafTModal').style.display = 'flex';
}

window.openGrafTSlideshow = function() {
  openSlideshow(grafTImages);
}

window.openTLoodsSlideshow = function() {
  openSlideshow(tLoodsImages);
}

window.openMastaAceSlideshow = function() {
  openSlideshow(mastaAceImages);
}

window.openMastaAceVideo = function() {
  if (!mastaAceVideos || mastaAceVideos.length === 0) {
    alert('Masta Ace videos volgen binnenkort.');
    return;
  }
  openVideoModal(mastaAceVideos[0]);
}

window.closeGrafTSlideshow = function() {
  document.getElementById('grafTModal').style.display = 'none';
}
window.nextGrafTImage = function() {
  if (activeSlideshowImages && activeSlideshowImages.length > 0) {
    grafTIndex = (grafTIndex + 1) % activeSlideshowImages.length;
    document.getElementById('grafTImage').src = activeSlideshowImages[grafTIndex];
  }
}
window.prevGrafTImage = function() {
  if (activeSlideshowImages && activeSlideshowImages.length > 0) {
    grafTIndex = (grafTIndex - 1 + activeSlideshowImages.length) % activeSlideshowImages.length;
    document.getElementById('grafTImage').src = activeSlideshowImages[grafTIndex];
  }
}
// --- einde slideshow ---
// --- Swipe en keyboard support voor slideshow ---
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('grafTModal');
  var touchStartX = null;
  var touchEndX = null;

  function isModalOpen() {
    return modal && (modal.style.display === 'flex' || modal.style.display === 'block');
  }

  // Touch events voor mobiel
  if (modal) {
    modal.addEventListener('touchstart', function(e) {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
      }
    });
    modal.addEventListener('touchend', function(e) {
      if (touchStartX !== null && e.changedTouches.length === 1) {
        touchEndX = e.changedTouches[0].clientX;
        if (touchEndX - touchStartX > 50) {
          prevGrafTImage(); // swipe rechts
        } else if (touchStartX - touchEndX > 50) {
          nextGrafTImage(); // swipe links
        }
        touchStartX = null;
        touchEndX = null;
      }
    });
  }

  // Keyboard events voor desktop
  document.addEventListener('keydown', function(e) {
    if (isModalOpen()) {
      if (e.key === 'ArrowLeft') {
        prevGrafTImage();
      } else if (e.key === 'ArrowRight') {
        nextGrafTImage();
      }
    }
  });
});
// --- einde swipe/keyboard ---
// Info popup voor Event2.jpg
window.openInfoPopup = function(imgPath) {
  // Hergebruik de grafTModal, maar toon alleen de gewenste foto
  var modal = document.getElementById('grafTModal');
  var img = document.getElementById('grafTImage');
  img.src = imgPath;
  // Verberg navigatieknoppen
  var navBtns = document.querySelector('.grafT-nav-btns');
  if (navBtns) navBtns.style.display = 'none';
  modal.style.display = 'flex';
  // Sluiten via X werkt zoals gewoonlijk
}

// Zorg dat bij sluiten van modal de navigatieknoppen weer zichtbaar zijn
var grafTCloseBtn = document.querySelector('.grafT-close-btn');
if (grafTCloseBtn) {
  grafTCloseBtn.addEventListener('click', function() {
    var navBtns = document.querySelector('.grafT-nav-btns');
    if (navBtns) navBtns.style.display = '';
  });
}
document.addEventListener('DOMContentLoaded', function() {
  function resetSpraycan() {
    const spraycan = document.querySelector('.spraycan-bounce');
    if (spraycan) {
      spraycan.src = './img/can.png';
      spraycan.classList.remove('spraycan-bounce-out');
      spraycan.style.opacity = '';
      spraycan.style.animation = '';
      // Force reflow to restart animation
      void spraycan.offsetWidth;
      spraycan.style.animation = spraycan.classList.contains('home-only')
        ? 'spraycanIn 1.2s cubic-bezier(.68,-0.55,.27,1.55) 0.3s forwards' : '';
    }
  }

  // Reset bij navigatie naar home
  window.addEventListener('hashchange', function() {
    if (location.hash === '#home' || location.hash === '') {
      resetSpraycan();
    }
  });

  // Initieel bij laden
  if (location.hash === '#home' || location.hash === '') {
    resetSpraycan();
  }

  // Knipoog en bounce out na sprayen
  const spraycan = document.querySelector('.spraycan-bounce');
  if (spraycan) {
    spraycan.addEventListener('animationend', function(e) {
      if (e.animationName === 'spraycanIn') {
        // Spray effect tonen
        const spray = document.querySelector('.spraycan-spray');
        if (spray) {
          spray.style.opacity = '1';
        }
        // Spray effect verbergen net voor can2 verschijnt
        setTimeout(function() {
          if (spray) spray.style.opacity = '0';
        }, 1500 + 80); // Spray verdwijnt sneller
        setTimeout(function() {
          spraycan.src = './img/can2.png';
          spraycan.style.opacity = '1'; // Zorg dat can2 volledig zichtbaar is
        }, 1500 + 500); // 1.5s animatie + 0.7s wachten
        setTimeout(function() {
          spraycan.classList.add('spraycan-bounce-out');
        }, 1500 + 500 + 10000); // 10s smiley, dan bounce out
      }
    });
  }
});

// --- Hexagon Logo Animation ---
document.addEventListener('DOMContentLoaded', function() {
  // Wacht tot de hex is getekend, toon dan het logo
  setTimeout(() => {
    const hexLogo = document.querySelector('.hex-logo');
    const hexShape = document.querySelector('.hex-shape');
    if (hexLogo) {
      hexLogo.style.opacity = 1;
      // Trigger scale-in on mobile via CSS
      hexLogo.classList.add('visible');
    }
    // Laat de blauwe zeshoek verdwijnen wanneer het logo verschijnt
    if (hexShape) {
      hexShape.style.opacity = 0;
      hexShape.style.transition = 'opacity 0.5s ease-out';
    }
  }, 2200);
});

// Total Loods Info Popup functions
function openTotaLoodsInfoPopup() {
  document.getElementById('totalLoodsInfoModal').style.display = 'flex';
}
function closeTotaLoodsInfoPopup() {
  document.getElementById('totalLoodsInfoModal').style.display = 'none';
}

// Summer Jam Info Popup functions
function openSummerJamInfoPopup() {
  var modal = document.getElementById('summerJamInfoModal');
  if (modal) {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeSummerJamInfoPopup() {
  var modal = document.getElementById('summerJamInfoModal');
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  }
}

document.addEventListener('click', function (event) {
  var modal = document.getElementById('summerJamInfoModal');
  if (modal && event.target === modal) {
    closeSummerJamInfoPopup();
  }
});

// Prevent event image hover zoom when user hovers side action buttons
document.addEventListener('DOMContentLoaded', function () {
  var sideLabels = document.querySelectorAll('#events .event-side-labels');

  sideLabels.forEach(function (labels) {
    var eventItem = labels.closest('.event-item');
    if (!eventItem) return;

    labels.addEventListener('mouseenter', function () {
      eventItem.classList.add('no-image-hover');
    });

    labels.addEventListener('mouseleave', function () {
      eventItem.classList.remove('no-image-hover');
    });
  });
});
