let currentLanguage = "en"; // Default to English

const translations = {
    "en": {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_projects": "Projects",
        "nav_services": "Services",
        "nav_blog": "Blog",
        "nav_Address": "Address",
        "nav_Horatio": "Horatio",
        "nav_Contact": "Contact",
        "See more articles": "See more articles",
        "nav_home2": "Home",
        "nav_about2": "About",
        "nav_projects2": "Projects",
        "nav_services2": "Services",
        "nav_blog2": "Blog",
        "nav_Address2": "Address",
        "nav_Horatio2": "Horatio",
        "nav_Contact": "Contact",
        "footer_about": "About Us",
        "footer_projects": "Projects",
        "footer_services": "Services",
        "footer_contact": "Contact Us",
        "footer_contact_email": "Email:",
        "footer_social_media": "Social Media:",
        "address_title": "Our Address",
        "footer_france_address": "17 Mont Vallier Street, 31770 Colomiers",
        "footer_tunisia_address": "Golden Towers Building, Block B, 2nd Floor, North Urban Center, 1082 Tunis",
        "hero_title": "We simplify Complexity, You amplify Success",
        "hero_subtitle": "We systematically integrate big data and the best monitoring technologies into our systems.",
        "Get in Touch": "Get in Touch",
        "about_title": "About PCP Consulting",
        "about_content": "We simplify the complexity of transitioning to the public cloud and ensure its security. We systematically integrate big data and the best monitoring technologies into our systems. Our innovative approach ensures our clients reduce cloud migration costs by over half, saving you money on cloud expenses while achieving the best results.",
        "projects_title": "They trusted us",
        "projects_airbus": "Airbus",
        "projects_finzzle": "Finzzle",
        "services_title": "Technologies",
        "services_aws": "Amazon Web Services",
        "services_azure": "Microsoft Azure",
        "services_gcp": "Google Cloud Platform",
        "services_tanzu": "VMware Tanzu",
        "services_kubernetes": "Kubernetes",
        "services_docker": "Docker",
        "services_ansible": "Ansible",
        "services_offer_title": "Our Offer",
        "services_cost_reduction": "Cost Reduction",
        "services_cloud_easy": "Cloud Made Easy",
        "services_big_data": "Big Data Solutions",
        "services_reliable_solutions": "Reliable Solutions",
        "services_secure_migration": "Secure Migration",
        "services_ai": "Artificial Intelligence",
        "events_title": "We've Supported",
        "events_sponsored": "Event Sponsorship",
        "events_conference": "Conference: Can AI Replace Humans?",
        "events_workshop": "Workshop: AI in Healthcare",
        "events_jury": "Serving as a Hackathon Jury Member"
    },
    "tn": {
        "nav_home": "Accueil",
        "nav_about": "À propos",
        "nav_projects": "Projets",
        "nav_services": "Services",
        "nav_blog": "Blog",
        "nav_Address": "Adresse",
        "nav_Horatio": "Horatio",
        "nav_Contact": "Contact",
        "See more articles": "Voir plus d'articles",
        "nav_home2": "Accueil",
        "nav_about2": "À propos",
        "nav_projects2": "Projets",
        "nav_services2": "Services",
        "nav_blog2": "Blog",
        "nav_Address2": "Adresse",
        "nav_Horatio2": "Horatio",
        "nav_Contact2": "Contact",
        "footer_about": "À propos",
        "footer_projects": "Projets",
        "footer_services": "Services",
        "footer_contact": "Contact",
        "footer_contact_email": "E-mail :",
        "footer_social_media": "Réseaux sociaux :",
        "address_title": "Notre adresse",
        "footer_france_address": "17 Allée du Mont Vallier, 31770 Colomiers",
        "footer_tunisia_address": "Immeuble Golden Towers, Bloc B, 2ème étage, Centre Urbain Nord, 1082, Tunis",
        "hero_title": "Nous simplifions la complexité, vous amplifiez votre succès",
        "hero_subtitle": "Nous intégrons de manière systématique les données volumineuses et les meilleures technologies de surveillance dans nos systèmes.",
        "Get in Touch": "Prenez contact",
        "about_title": "À propos de PCP Consulting",
        "about_content": "Nous simplifions la complexité de la migration vers le cloud public et en assurons la sécurité. Nous intégrons de manière systématique les données volumineuses et les meilleures technologies de surveillance dans nos systèmes. Notre approche innovante garantit à nos clients une réduction des coûts de plus de la moitié, ce qui vous permet d'économiser sur les dépenses de migration vers le cloud tout en obtenant les meilleurs résultats.",
        "projects_title": "Ils nous ont fait confiance",
        "projects_airbus": "Airbus",
        "projects_finzzle": "Finzzle",
        "services_title": "Technologies",
        "services_aws": "AWS",
        "services_azure": "Azure",
        "services_gcp": "GCP",
        "services_tanzu": "VMware Tanzu",
        "services_kubernetes": "Kubernetes",
        "services_docker": "Docker",
        "services_ansible": "Ansible",
        "services_offer_title": "Notre offre",
        "services_cost_reduction": "Réduction des coûts",
        "services_cloud_easy": "Cloud facile",
        "services_big_data": "Big Data",
        "services_reliable_solutions": "Solutions fiables",
        "services_secure_migration": "Migration sécurisée",
        "services_ai": "Intelligence artificielle",
        "events_title": "Nous avons soutenu",
        "events_sponsored": "Soutenu financièrement l'événement",
        "events_conference": "Conférence : pourquoi l'IA ne peut-elle pas remplacer les humains ?",
        "events_workshop": "Atelier : IA dans le secteur de la santé",
        "events_jury": "Présent en tant que membre du jury du Hackathon"
    },
    "fr": {
        "nav_home": "Accueil",
        "nav_about": "À propos",
        "nav_projects": "Projets",
        "nav_services": "Services",
        "nav_blog": "Blog",
        "nav_Address": "Adresse",
        "nav_Horatio": "Horatio",
        "nav_Contact": "Contact",
        "See more articles": "Voir plus d'articles",
        "nav_home2": "Accueil",
        "nav_about2": "À propos",
        "nav_projects2": "Projets",
        "nav_services2": "Services",
        "nav_blog2": "Blog",
        "nav_Address2": "Adresse",
        "nav_Horatio2": "Horatio",
        "nav_Contact2": "Contact",
        "footer_about": "À propos",
        "footer_projects": "Projets",
        "footer_services": "Services",
        "footer_contact": "Contact",
        "footer_contact_email": "E-mail :",
        "footer_social_media": "Réseaux sociaux :",
        "address_title": "Notre adresse",
        "footer_france_address": "17 Allée du Mont Vallier, 31770 Colomiers",
        "footer_tunisia_address": "Immeuble Golden Towers, Bloc B, 2ème étage, Centre Urbain Nord, 1082, Tunis",
        "hero_title": "Nous simplifions la complexité, vous amplifiez votre succès",
        "hero_subtitle": "Nous intégrons de manière systématique les données volumineuses et les meilleures technologies de surveillance dans nos systèmes.",
        "Get in Touch": "Prenez contact",
        "about_title": "À propos de PCP Consulting",
        "about_content": "Nous simplifions la complexité de la migration vers le cloud public et en assurons la sécurité. Nous intégrons de manière systématique les données volumineuses et les meilleures technologies de surveillance dans nos systèmes. Notre approche innovante garantit à nos clients une réduction des coûts de plus de la moitié, ce qui vous permet d'économiser sur les dépenses de migration vers le cloud tout en obtenant les meilleurs résultats.",
        "projects_title": "Ils nous ont fait confiance",
        "projects_airbus": "Airbus",
        "projects_finzzle": "Finzzle",
        "services_title": "Technologies",
        "services_aws": "AWS",
        "services_azure": "Azure",
        "services_gcp": "GCP",
        "services_tanzu": "VMware Tanzu",
        "services_kubernetes": "Kubernetes",
        "services_docker": "Docker",
        "services_ansible": "Ansible",
        "services_offer_title": "Notre offre",
        "services_cost_reduction": "Réduction des coûts",
        "services_cloud_easy": "Cloud facile",
        "services_big_data": "Big Data",
        "services_reliable_solutions": "Solutions fiables",
        "services_secure_migration": "Migration sécurisée",
        "services_ai": "Intelligence artificielle",
        "events_title": "Nous avons soutenu",
        "events_sponsored": "Soutenu financièrement l'événement",
        "events_conference": "Conférence : pourquoi l'IA ne peut-elle pas remplacer les humains ?",
        "events_workshop": "Atelier : IA dans le secteur de la santé",
        "events_jury": "Présent en tant que membre du jury du Hackathon"
    }
};


function changeLanguage() {
    const languageSelect = document.getElementById("language-select");
    const languageSelector = document.getElementById("language-selector");
    currentLanguage = languageSelect.value;
    // currentLanguage = languageSelector.value; activate this line and the navbar select lang will start working while the original one will stop the only way is to put them in an if statment where currentLanguage = languageSelect.value; ifsidebar is not activated else currentLanguage = languageSelector.value;
  







    // Get all links from the navigation
    const navLinks = document.querySelectorAll('.nav_links a');
    const sideNavLinks = document.querySelectorAll('.side-nav .side_links');
    const heroTitle = document.querySelector('.hero-content h3');
    const heroSubtitle = document.querySelector('.hero-content h4');
    const heroBtn = document.querySelector('.hero-content .btn');
    const aboutTitle = document.querySelector('.about .section_title');
    const aboutContent = document.querySelector('.about .content p');
    const projectsTitle = document.querySelector('.projects .section_title');
    const servicesTitle = document.querySelector('.services .section_title');

    // Add data keys for your projects here based on the image source or any identifier you prefer
    // For example:
    const projectAirbus = document.querySelector('.projects_container img[src="assets/images/Airbus-logo.blanc.png"]');
    const projectFinzzle = document.querySelector('.projects_container img[src="assets/images/Finzzle-logo.blanc.png"]');

    // Change the text for each link based on the selected language
    navLinks.forEach(link => {
        const key = link.getAttribute('data-key');
        link.textContent = translations[currentLanguage][key];
    });

    // Change the text for side-nav links based on the selected language
    sideNavLinks.forEach(link => {
        const key = link.getAttribute('data-key');
        link.textContent = translations[currentLanguage][key];
    });

    // Change the text for hero content based on the selected language
    heroTitle.textContent = translations[currentLanguage]["hero_title"];
    heroSubtitle.textContent = translations[currentLanguage]["hero_subtitle"];
    heroBtn.textContent = translations[currentLanguage]["Get in Touch"];

    // Change the text for the 'About' section based on the selected language
    aboutTitle.textContent = translations[currentLanguage]["about_title"];
    aboutContent.textContent = translations[currentLanguage]["about_content"];

    // Change the text for the 'Projects' section based on the selected language
    projectsTitle.textContent = translations[currentLanguage]["projects_title"];

    // Add translations for project names here
    projectAirbus.alt = translations[currentLanguage]["projects_airbus"];
    projectFinzzle.alt = translations[currentLanguage]["projects_finzzle"];

    // Change the text for the 'Services' section based on the selected language
    servicesTitle.textContent = translations[currentLanguage]["services_title"];

    // Add the following code to handle the 'Our Offer' section
    const servicesOfferTitle = document.querySelector('.services h2[data-key="services_offer_title"]');
    servicesOfferTitle.textContent = translations[currentLanguage]["services_offer_title"];



const costReductionCard = document.querySelector('.card_container .card .card_title[data-key="services_cost_reduction"]');
const cloudEasyCard = document.querySelector('.card[data-aos-duration="550"] .card_title[data-key="services_cloud_easy"]');
const bigDataCard = document.querySelector('.card[data-aos-duration="575"] .card_title[data-key="services_big_data"]');
const reliableSolutionsCard = document.querySelector('.card[data-aos-duration="600"] .card_title[data-key="services_reliable_solutions"]');
const secureMigrationCard = document.querySelector('.card[data-aos-duration="625"] .card_title[data-key="services_secure_migration"]');
const aiCard = document.querySelector('.card[data-aos-duration="625"] .card_title[data-key="services_ai"]');

cloudEasyCard.textContent = translations[currentLanguage]["services_cloud_easy"];
bigDataCard.textContent = translations[currentLanguage]["services_big_data"];
reliableSolutionsCard.textContent = translations[currentLanguage]["services_reliable_solutions"];
secureMigrationCard.textContent = translations[currentLanguage]["services_secure_migration"];
aiCard.textContent = translations[currentLanguage]["services_ai"];
costReductionCard.textContent = translations[currentLanguage]["services_cost_reduction"];


const eventsTitle = document.querySelector('.events .section_title[data-key="events_title"]');
eventsTitle.textContent = translations[currentLanguage]["events_title"];



const eventItems = document.querySelectorAll('.event_items .event_item[data-key]');
eventItems.forEach(item => {
    const key = item.getAttribute('data-key');
    item.textContent = translations[currentLanguage][key];

    // Handle sub-elements with data-key attributes
    const subElements = item.querySelectorAll('[data-key]');
    subElements.forEach(subElement => {
        const subKey = subElement.getAttribute('data-key');
        subElement.textContent = translations[currentLanguage][subKey];
    });
});

const blogTitle = document.querySelector('.blog .section_title[data-key]');
if (blogTitle) {
    blogTitle.textContent = translations[currentLanguage]["blog_title"];
}


const moreLink = document.querySelector('.more a');
moreLink.querySelector('span').textContent = translations[currentLanguage]["See more articles"];


const addressSection = document.getElementById("address_section");

// Change the text for the "Our Address" section based on the selected language
addressSection.textContent = translations[currentLanguage]["address_title"];







    // Get all the links within the <div class="contact_links">
    const contactLinks = document.querySelectorAll('.contact_links a');

    // Change the text for each link based on the selected language and data-key
    contactLinks.forEach(link => {
        const key = link.getAttribute('data-key');
        link.textContent = translations[currentLanguage][key];
    });



     const sidNavLinks = document.querySelectorAll('.side-nav .side_links');

    // Change the text for each link based on the selected language and data-key
    sidNavLinks.forEach(link => {
        const key = link.getAttribute('data-key');
        link.textContent = translations[currentLanguage][key];
    });


}






