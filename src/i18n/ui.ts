export const languages = { fr: 'Français', en: 'English' } as const;
export const defaultLang = 'fr' as const;
export type Lang = keyof typeof languages;

export const ui: Record<Lang, Record<string, string>> = {
  fr: {
    // Nav
    'nav.espaces': 'Espaces',
    'nav.galerie': 'Galerie',
    'nav.equipements': 'Équipements',
    'nav.perigord': 'Périgord',
    'nav.tarifs': 'Tarifs',
    'nav.reservation': 'Réservation',
    'nav.cta': 'Réserver',

    // Hero
    'hero.tag': 'Location de vacances en Dordogne',
    'hero.cta': 'Réserver votre séjour',

    // Description
    'desc.tag': 'Bienvenue',
    'desc.espaces.tag': 'Les espaces',
    'desc.espaces.title': 'Chaque pièce, <em>une invitation</em>',
    'desc.espaces.lead': 'Près de 600 m² pensés pour réunir, partager et se retrouver.',
    'desc.chambres': 'Chambres',
    'desc.bathrooms': 'salles de bain',

    // Gallery
    'gallery.tag': 'Galerie',
    'gallery.title': 'Le <em>lieu</em>',
    'gallery.lead': 'Parc, terrasses et vue sur le château de Fénelon.',
    'gallery.pool': 'La piscine',
    'gallery.placeholder': 'Photos à ajouter',
    'gallery.alt.exterior': 'Le Rambert — extérieur',
    'gallery.alt.pool': 'Le Rambert — piscine',

    // Amenities
    'amenities.tag': 'Équipements',
    'amenities.title': 'Tout le <em>confort</em>',
    'amenities.lead': 'Pour un séjour sans compromis.',

    // Activities
    'activities.tag': 'À découvrir',
    'activities.title': 'Le Périgord <em>Noir</em>',
    'activities.lead': 'Un patrimoine exceptionnel à portée de main.',

    // Pricing
    'pricing.tag': 'Tarifs',
    'pricing.title': 'Séjournez chez <em>nous</em>',
    'pricing.week': 'par semaine',
    'pricing.night': 'par nuit',
    'pricing.minimum': 'Minimum {n} nuits',
    'pricing.cleaning.label': 'Forfait ménage obligatoire : {price} € TTC',

    // Booking
    'booking.tag': 'Réservation',
    'booking.title': 'Disponibilités & <em>contact</em>',
    'booking.lead': 'Sélectionnez vos dates sur le calendrier, puis envoyez-nous un message',
    'booking.form.title': 'Envoyez-nous un message',
    'booking.form.name': 'Nom',
    'booking.form.email': 'Email',
    'booking.form.phone': 'Téléphone (optionnel)',
    'booking.form.submit': 'Envoyer',
    'booking.form.sending': 'Envoi…',
    'booking.form.success': 'Message envoyé ! Nous vous répondrons rapidement.',
    'booking.form.error': "Erreur lors de l'envoi. Réessayez ou contactez-nous directement.",
    'booking.form.network': 'Erreur de connexion. Réessayez.',
    'booking.cal.days': 'Lun,Mar,Mer,Jeu,Ven,Sam,Dim',
    'booking.cal.months': 'Janvier,Février,Mars,Avril,Mai,Juin,Juillet,Août,Septembre,Octobre,Novembre,Décembre',
    'booking.cal.available': 'Disponible',
    'booking.cal.booked': 'Réservé',
    'booking.cal.selected': 'Sélection',
    'booking.cal.hint': 'Cliquez sur un jour disponible pour choisir vos dates',
    'booking.cal.loading': 'Chargement…',
    'booking.cal.error': 'Calendrier indisponible.',
    'booking.msg.template': 'Bonjour,\n\nNous souhaiterions réserver Le Rambert {dates}.\nNous serons .... personnes (dont .... enfants).\n\nMerci !',
    'booking.msg.dateRange': 'du {start} au {end}',
    'booking.msg.datePlaceholder': 'du ........ au ........',

    // PrivateTeaser
    'private.tag': 'Accès privé',
    'private.title': "Envie d'en <em>voir plus</em> ?",
    'private.text': "Accédez à la visite complète : toutes les chambres, les salles de bain, l'adresse exacte et notre guide local.",
    'private.email': 'Votre email',
    'private.password': 'Mot de passe',
    'private.submit': 'Accéder',
    'private.rgpd': 'Votre email est uniquement utilisé pour identifier les accès. Aucune newsletter. Suppression sur demande.',

    // Private page
    'privatePage.back': '← Retour au site',
    'privatePage.title': 'Le Rambert — Visite complète',
    'privatePage.subtitle': 'Bienvenue dans les coulisses',
    'privatePage.rooms': 'Les chambres',
    'privatePage.bathrooms': 'Salles de bain',
    'privatePage.kitchen': 'La cuisine',
    'privatePage.activities': 'Activités',
    'privatePage.placeholder': 'Photos à ajouter',

    // Footer
    'footer.text': 'La Maison du Rambert — Périgord Noir, Dordogne',

    // Meta
    'meta.description': 'Maison de vacances en Dordogne — Calviac-en-Périgord',
    'meta.titleSuffix': 'Location de vacances en Dordogne',
  },
  en: {
    // Nav
    'nav.espaces': 'Spaces',
    'nav.galerie': 'Gallery',
    'nav.equipements': 'Amenities',
    'nav.perigord': 'Périgord',
    'nav.tarifs': 'Rates',
    'nav.reservation': 'Booking',
    'nav.cta': 'Book now',

    // Hero
    'hero.tag': 'Holiday rental in Dordogne, France',
    'hero.cta': 'Book your stay',

    // Description
    'desc.tag': 'Welcome',
    'desc.espaces.tag': 'The spaces',
    'desc.espaces.title': 'Every room, <em>an invitation</em>',
    'desc.espaces.lead': 'Nearly 600 m² designed to gather, share and reconnect.',
    'desc.chambres': 'Bedrooms',
    'desc.bathrooms': 'bathrooms',

    // Gallery
    'gallery.tag': 'Gallery',
    'gallery.title': 'The <em>property</em>',
    'gallery.lead': 'Grounds, terraces and views of Château de Fénelon.',
    'gallery.pool': 'The pool',
    'gallery.placeholder': 'Photos coming soon',
    'gallery.alt.exterior': 'Le Rambert — exterior',
    'gallery.alt.pool': 'Le Rambert — pool',

    // Amenities
    'amenities.tag': 'Amenities',
    'amenities.title': 'Every <em>comfort</em>',
    'amenities.lead': 'For a stay without compromise.',

    // Activities
    'activities.tag': 'Explore',
    'activities.title': 'The <em>Périgord Noir</em>',
    'activities.lead': 'An exceptional heritage within easy reach.',

    // Pricing
    'pricing.tag': 'Rates',
    'pricing.title': 'Stay with <em>us</em>',
    'pricing.week': 'per week',
    'pricing.night': 'per night',
    'pricing.minimum': 'Minimum {n} nights',
    'pricing.cleaning.label': 'Mandatory cleaning fee: €{price} incl. tax',

    // Booking
    'booking.tag': 'Booking',
    'booking.title': 'Availability & <em>contact</em>',
    'booking.lead': 'Select your dates on the calendar, then send us a message',
    'booking.form.title': 'Send us a message',
    'booking.form.name': 'Name',
    'booking.form.email': 'Email',
    'booking.form.phone': 'Phone (optional)',
    'booking.form.submit': 'Send',
    'booking.form.sending': 'Sending…',
    'booking.form.success': 'Message sent! We will get back to you shortly.',
    'booking.form.error': 'Failed to send. Please try again or contact us directly.',
    'booking.form.network': 'Connection error. Please try again.',
    'booking.cal.days': 'Mon,Tue,Wed,Thu,Fri,Sat,Sun',
    'booking.cal.months': 'January,February,March,April,May,June,July,August,September,October,November,December',
    'booking.cal.available': 'Available',
    'booking.cal.booked': 'Booked',
    'booking.cal.selected': 'Selected',
    'booking.cal.hint': 'Click on an available day to select your dates',
    'booking.cal.loading': 'Loading…',
    'booking.cal.error': 'Calendar unavailable.',
    'booking.msg.template': 'Hello,\n\nWe would like to book Le Rambert {dates}.\nThere will be .... of us (including .... children).\n\nThank you!',
    'booking.msg.dateRange': 'from {start} to {end}',
    'booking.msg.datePlaceholder': 'from ........ to ........',

    // PrivateTeaser
    'private.tag': 'Private access',
    'private.title': 'Want to <em>see more</em>?',
    'private.text': 'Access the full tour: all bedrooms, bathrooms, the exact address and our local guide.',
    'private.email': 'Your email',
    'private.password': 'Password',
    'private.submit': 'Enter',
    'private.rgpd': 'Your email is only used to log access. No newsletter. Deletion on request.',

    // Private page
    'privatePage.back': '← Back to site',
    'privatePage.title': 'Le Rambert — Full tour',
    'privatePage.subtitle': 'Welcome behind the scenes',
    'privatePage.rooms': 'Bedrooms',
    'privatePage.bathrooms': 'Bathrooms',
    'privatePage.kitchen': 'The kitchen',
    'privatePage.activities': 'Activities',
    'privatePage.placeholder': 'Photos coming soon',

    // Footer
    'footer.text': 'La Maison du Rambert — Périgord Noir, Dordogne',

    // Meta
    'meta.description': 'Holiday rental in Dordogne — Calviac-en-Périgord, France',
    'meta.titleSuffix': 'Holiday rental in Dordogne',
  },
};
