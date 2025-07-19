document.addEventListener("DOMContentLoaded", () => {
  const items = {
    buffet: {
      title: "Buffet for Anniversaries and Celebrations",
      image: "assets/experience-buffet.jpg",
      desc: `Planning a birthday, anniversary, reunion, or team gathering? Our buffet-style setup is perfect for celebrating with great food and a relaxed atmosphere.<br><br>
Minimum 20 guests or minimum consumption required. Special drinks? Surprises? Let’s tailor it to your needs. From menu design to drink options, seating layout to event flow—we’ll work with you to create a celebration that fits your style and budget. <br><br>Let’s start planning! Contact us at elamumanagement@gmail.com or WhatsApp +6285819804421.`,
    },
    brunch: {
      title: "Sunday Brunch",
      image: "assets/experience-brunch.jpg",
      desc: `Brunch every Sunday from 11am to 3pm on our open-air patio.<br><br>
Enjoy live DJs, chill island vibes, and Greek-style brunch specials like eggs Benedict, sourdough with flair, moussaka hash, and seafood plates. Each week brings a surprise dish!<br><br>
Sip fresh juices, Bloody Marys, Aperol Spritzes, and iced teas under the bougainvillea. No reservations—just show up and brunch up.`,
    },
    patio: {
      title: "Patio by Elamu",
      image: "assets/experience-patio.jpg",
      desc: `Where Lombok dances. Our almost-weekly party series brings together locals, travelers, and music lovers under the stars.<br><br>
Expect deep grooves, sunset drinks, and late-night dancefloor magic. Guest DJs from across Indonesia and beyond. Follow us on Instagram @patiobyelamu for the next lineup.`,
    },
    wedding: {
      title: "A Big Fat Greek Wedding",
      image: "assets/experience-wedding.jpg",
      desc: `Make your special day unforgettable. Elamu offers elegant indoor/outdoor venues, custom Greek menus, full coordination, and joyful touches.<br><br>
Pre-wedding tastings, live music or DJ, and your vision brought to life—whether you’re dreaming of a cozy garden celebration or a grand terrace dinner. Let's make magic. Contact us to book a consultation.`,
    },
    photography: {
      title: "Wedding Photography Sessions",
      image: "assets/experience-photo.jpg",
      desc: `Looking for that perfect setting? Capture your love story in our scenic restaurant spaces—from sunlit gardens to coastal charm.<br><br>
Available in the morning with advance booking. Email elamumanagement@gmail.com or WhatsApp +6285819804421 to reserve your spot.`,
    },
    shelter: {
      title: "Shelter for Lombok Dogs",
      image: "assets/experience-shelter.jpg",
      desc: `We support the Shelter for Lombok Dogs—a nonprofit giving love and care to 70+ rescued pups in Kuta and Mawun.<br><br>
They run sterilization programs, treat disabled dogs, and offer a second chance to street dogs in need. Support them by buying merch at @lomdogs.merch on Instagram or visiting <a href="https://shelterforlombokdogs.org" target="_blank" class="underline text-amber-500">shelterforlombokdogs.org</a>.`,
    },
  };

  const buttons = document.querySelectorAll(".experience-btn");
  const title = document.getElementById("experienceTitle");
  const desc = document.getElementById("experienceDescription");
  const img = document.getElementById("experienceImage");

  function updateContent(key) {
    if (!items[key]) return;
    title.textContent = items[key].title;
    desc.innerHTML = items[key].desc;
    img.src = items[key].image;

    buttons.forEach((btn) =>
      btn.classList.remove("bg-amber-700", "text-white")
    );
    const activeBtn = document.querySelector(`[data-key="${key}"]`);
    activeBtn.classList.add("bg-amber-700", "text-white");
  }

  // Event listeners
  buttons.forEach((btn) => {
    ["click", "mouseover"].forEach((evt) =>
      btn.addEventListener(evt, () => updateContent(btn.dataset.key))
    );
  });

  // Initialize with default
  updateContent("buffet");
});
